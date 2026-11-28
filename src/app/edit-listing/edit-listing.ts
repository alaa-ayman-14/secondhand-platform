import { Component, ChangeDetectorRef } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-edit-listing',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-listing.html',
  styleUrl: './edit-listing.scss',
})
export class EditListing {

  productImage = '/images/chair.png';
  selectedFile: File | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  editListingForm = new FormGroup({

    title: new FormControl('Mid-century lounge chair', [
      Validators.required
    ]),

    category: new FormControl('Furniture', [
      Validators.required
    ]),

    condition: new FormControl('Excellent', [
      Validators.required
    ]),

    price: new FormControl<number | null>(180, [
      Validators.required,
      Validators.min(0.01)
    ]),

    location: new FormControl('Mission District, San Francisco', [
      Validators.required
    ]),

    description: new FormControl(
      'Beautiful olive-green lounge chair with solid walnut arms and legs. Well cared for in a smoke-free home. Local pickup available.',
      [Validators.required]
    )

  });

  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {

      const file = input.files[0];

      if (file.type.startsWith('image/')) {

        const reader = new FileReader();

        reader.onload = () => {
          this.productImage = reader.result as string;
          this.selectedFile = file;
          this.cdr.markForCheck();
        };

        reader.readAsDataURL(file);

      }

      input.value = '';

    }
  }

  onEditItem() {
    if (this.editListingForm.valid) {
      console.log('Form is valid');
    } else {
      this.editListingForm.markAllAsTouched();
    }
  }

}