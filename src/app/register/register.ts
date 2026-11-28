import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*\d)(?=.*[^a-zA-Z0-9\s]).*$/)
    ])
  });

  onRegister() {
    if (this.registerForm.valid) {
      console.log('Form is valid');
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

}