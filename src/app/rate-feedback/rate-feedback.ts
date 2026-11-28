import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-rate-feedback',
  imports: [ReactiveFormsModule],
  templateUrl: './rate-feedback.html',
  styleUrl: './rate-feedback.scss',
})
export class RateFeedback {

  sellerName = 'Daniel';

  reviewForm = new FormGroup({

    rating: new FormControl(5, [
      Validators.required,
      Validators.min(1),
      Validators.max(5)
    ]),

    feedback: new FormControl('', [
      Validators.required
    ])

  });

  onSubmitReview() {
    if (this.reviewForm.valid) {
      console.log('Form is valid');
    } else {
      this.reviewForm.markAllAsTouched();
    }
  }

}