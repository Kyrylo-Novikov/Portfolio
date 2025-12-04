import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

type FieldName = 'name' | 'email' | 'message' | 'checkbox';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  contactForm!: FormGroup;
  submitted: boolean = false;
  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;
  @ViewChild('messageInput') messageInput!: ElementRef<HTMLInputElement>;
  @ViewChild('checkboxInput') checkboxInput!: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
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
    return (emailControl?.invalid && emailControl?.touched) ?? false;
  }

  get emailRequiredError(): boolean {
    const emailControl = this.contactForm.get('email');
    return this.emailError && (emailControl?.hasError('required') ?? false);
  }

  get emailFormatError(): boolean {
    const emailControl = this.contactForm.get('email');
    return this.emailError && (emailControl?.hasError('email') ?? false);
  }

  get messagError(): boolean {
    const messageControl = this.contactForm.get('message');
    return (messageControl?.invalid && messageControl?.touched) ?? false;
  }

  error(field: FieldName): boolean {
    const inputControl = this.contactForm.get(field);
    return (inputControl?.invalid && inputControl?.touched) ?? false;
  }

  fokusInput(fieldName: FieldName) {
    const key = this[`${fieldName}Input` as `${FieldName}Input`].nativeElement;
    key.focus();
  }

  ngOnInit(): void {}

  errorBeforSubmit() {
    this.contactForm.markAllAsTouched();
  }

  onSubmit(): void {}

  submitForm() {
    if (this.contactForm.valid) {
      fetch('https://formspree.io/f/mwpgbywv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.contactForm.value),
      }).then(() => console.log('sent', this.contactForm.value));
    }
  }
}
