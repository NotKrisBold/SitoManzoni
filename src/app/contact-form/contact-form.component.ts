import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm: FormGroup;
  toastMessage: string | null = null;
  toastType: 'success' | 'error' | null = null;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.emailService.sendEmail(
        this.contactForm.value.name,
        this.contactForm.value.email,
        this.contactForm.value.message
      ).then(response => {
        this.showToast('Message sent successfully!', 'success');
        this.contactForm.reset();
      }).catch(error => {
        this.showToast('Error sending message. Please try again.', 'error');
      });
    }
  }

  showToast(message: string, type: 'success' | 'error') {
    this.toastMessage = message;
    this.toastType = type;
    
    setTimeout(() => {
      this.toastMessage = null;
      this.toastType = null;
    }, 4000);
  }

  onBlur(controlName: string) {
    this.contactForm.get(controlName)?.markAsTouched();
  }
}
