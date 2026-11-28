import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.scss',
})
export class EditProfile {

  profileImage = '/images/profile.png';

  editProfileForm = new FormGroup({

    name: new FormControl('', [
      Validators.required
    ]),

    about: new FormControl(''),

    password: new FormControl('', [
      Validators.minLength(8),
      Validators.pattern(/^(?=.*\d)(?=.*[^a-zA-Z0-9\s]).*$/)
    ])

  });

  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = () => {
        this.profileImage = reader.result as string;
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  onEdit() {
    if (this.editProfileForm.valid) {
      console.log('Form is valid');
    } else {
      this.editProfileForm.markAllAsTouched();
    }
  }

}