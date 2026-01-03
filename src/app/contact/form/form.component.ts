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

type FieldName = 'name' | 'email' | 'message' | 'checkbox';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  contactForm!: FormGroup;
  submitted: boolean = false;
  isSubmitting: boolean = false;
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

  // Getter
  get checkboxError(): boolean {
    const checkboxControl = this.contactForm.get('checkbox');
    return (checkboxControl?.invalid && checkboxControl?.touched) ?? false;
  }

  get nameError(): boolean {
    const nameControl = this.contactForm.get('name');
    return (nameControl?.invalid && nameControl?.touched) ?? false;
  }

  get emailError(): boolean {
    const emailControl = this.contactForm.get('email');
    if (emailControl?.invalid && emailControl?.touched) {
      if (emailControl?.hasError('required')) {
        return true;
      }
      if (emailControl?.hasError('pattern')) {
        return true;
      }
      return false;
    }
    return false;
  }

  get emailRequiredError(): boolean {
    const emailControl = this.contactForm.get('email');
    return this.emailError && (emailControl?.hasError('required') ?? false);
  }

  get messagError(): boolean {
    const messageControl = this.contactForm.get('message');
    return (messageControl?.invalid && messageControl?.touched) ?? false;
  }

  error(field: FieldName): boolean {
    const inputControl = this.contactForm.get(field);
    return (inputControl?.invalid && inputControl?.touched) ?? false;
  }

  ngOnInit(): void {}

  errorBeforSubmit() {
    this.contactForm.markAllAsTouched();
  }

  submitForm() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const { name, email, message } = this.contactForm.value;
      const dataToSend = { name, email, message };
      fetch('https://formspree.io/f/mwpgbywv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })
        .then((respons) => {
          if (respons.ok) {
            console.log('Versendet');
            this.submitSuccess();
          } else {
            throw new Error('Die nachricht konnte nicht versendet werden.');
          }
        })
        .catch(() => this.submitError())
        .finally(() => (this.isSubmitting = false));
    }
  }

  submitSuccess() {
    this.overlayService.showFeedback({
      titleKey: 'FORM.SUCCESS.TITLEKEY',
      messageKey: 'FORM.SUCCESS.MESSAGEKEY',
      type: 'success',
    });
    this.contactForm.reset();
  }

  submitError() {
    this.overlayService.showFeedback({
      titleKey: 'FORM.ERROR.MESSAGEKEY',
      messageKey: 'FORM.ERROR.MESSAGEKEY',
      type: 'error',
    });
  }
}
