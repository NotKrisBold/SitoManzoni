import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Chiama il servizio per inviare l'email
      this.emailService.sendEmail(
        this.contactForm.value.name,
        this.contactForm.value.email,
        this.contactForm.value.message
      ).then(response => {
        console.log('Email sent successfully!', response);
        this.contactForm.reset(); // Resetta il modulo dopo l'invio
      }).catch(error => {
        console.error('Error sending email:', error);
      });
    }
  }

  onBlur(controlName: string) {
    this.contactForm.get(controlName)?.markAsTouched(); // Segna il controllo come "toccato"
  }
}
