import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { OverlayService } from '../../services/overlay/overlay.service';

/**
 * Defines the field names used in the form.
 */
type FieldType = 'name' | 'email' | 'message' | 'checkbox';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  /**
   * Holds the reactive form group for the contact form.
   */
  contactForm!: FormGroup;

  /**
   * boolean to lock the submitting proces
   * Used to prevent double submissions
   */
  isSubmitting: boolean = false;

  /**
   * References for the inputs of the form
   * Used for monitoring and validating the inputs
   */
  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;
  @ViewChild('messageInput') messageInput!: ElementRef<HTMLInputElement>;
  @ViewChild('checkboxInput') checkboxInput!: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder, public overlayService: OverlayService) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
      message: ['', [Validators.required, Validators.minLength(4)]],
      checkbox: ['', Validators.requiredTrue],
    });
  }

  /**
   * Checks if a form input is invalid and has been touched.
   * Used to decide if validation errors should be displayed
   * @param field Type of the input
   * @returns True if the input is invalid and touched.
   */

  error(field: FieldType): boolean {
    const inputControl = this.contactForm.get(field);
    if (!inputControl) return false;
    return (inputControl?.invalid && inputControl?.touched) ?? false;
  }

  /**
   * Checks if the email input has a `required` validation error.
   * Used in the template to dicide which error message should be displayed.
   */
  get emailRequiredError(): boolean {
    const emailControl = this.contactForm.get('email');
    if (!emailControl) return false;
    return emailControl?.hasError('required') ?? false;
  }

  ngOnInit(): void {}

  /**
   * Set `touched` to `true` for all form inputs
   * Enabled displaying validation errors
   */
  errorBeforSubmit() {
    this.contactForm.markAllAsTouched();
  }

  /**
   * Starts the submit process and prevents multiple submissions.
   */
  submitForm() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.sendFormData()
        .then((response) => this.handlingFormRespons(response))
        .catch(() => this.submitError())
        .finally(() => (this.isSubmitting = false));
    }
  }

  /**
   * Deconstructs the form inputs
   * To pick only the wanted values
   * Converts the data to a JSON
   * Sends the data to 'https://formspree.io/f/mwpgbywv'
   * @returns Promise from the fetch request
   */
  sendFormData(): Promise<Response> {
    const { name, email, message } = this.contactForm.value;
    const dataToSend = { name, email, message };
    return fetch('https://formspree.io/f/mwpgbywv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });
  }

  /**
   * Checks if the response is ok.
   * If yes , it triggers the success message
   * otherwise,  it throw an error
   * @param response Response from the server after the fetch
   */
  handlingFormRespons(response: Response) {
    if (response.ok) {
      this.submitSuccess();
    } else {
      throw new Error('Die nachricht konnte nicht versendet werden.');
    }
  }

  /**
   * Shows success feedback overlay
   * Using i18n key with prefixed 'FORM.SUCCESS'.
   * Used if the submit is successful.
   * Clear the input values.
   */
  submitSuccess() {
    this.overlayService.showFeedback({
      titleKey: 'FORM.SUCCESS.TITLEKEY',
      messageKey: 'FORM.SUCCESS.MESSAGEKEY',
      type: 'success',
    });
    this.contactForm.reset();
  }

  /**
   * Shows an error feedback overlay if the submit fails.
   * Uses i18n key with prefixed 'FORM.ERROR'.
   */
  submitError() {
    this.overlayService.showFeedback({
      titleKey: 'FORM.ERROR.MESSAGEKEY',
      messageKey: 'FORM.ERROR.MESSAGEKEY',
      type: 'error',
    });
  }
}
