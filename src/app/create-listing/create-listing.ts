import { Component, ChangeDetectorRef } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-create-listing',
  imports: [ReactiveFormsModule],
  templateUrl: './create-listing.html',
  styleUrl: './create-listing.scss',
})
export class CreateListing {

  images: string[] = [];
  selectedFiles: File[] = [];
  photoError = false;

  constructor(private cdr: ChangeDetectorRef) {}

  listingForm = new FormGroup({

    title: new FormControl('', [
      Validators.required
    ]),

    category: new FormControl('', [
      Validators.required
    ]),

    condition: new FormControl('', [
      Validators.required
    ]),

    price: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(0.01)
    ]),

    location: new FormControl('', [
      Validators.required
    ]),

    description: new FormControl('', [
      Validators.required
    ])

  });

  onImagesChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files) {

      for (const file of Array.from(input.files)) {

        if (file.type.startsWith('image/')) {

          const reader = new FileReader();

          reader.onload = () => {
            this.images.push(reader.result as string);
            this.selectedFiles.push(file);
            this.photoError = false;
            this.cdr.markForCheck();
          };

          reader.readAsDataURL(file);

        }

      }

      input.value = '';

    }
  }

  removeImage(index: number) {
    this.images.splice(index, 1);
    this.selectedFiles.splice(index, 1);
  }

  onAddItem() {

    this.photoError = this.images.length === 0;

    if (this.listingForm.valid && !this.photoError) {
      console.log('Form is valid');
    } else {
      this.listingForm.markAllAsTouched();
    }

  }

}