import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { EditProfile } from './edit-profile/edit-profile';
import { RateFeedback } from './rate-feedback/rate-feedback';
import { CreateListing } from './create-listing/create-listing';
import { EditListing } from './edit-listing/edit-listing';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'edit-profile', component: EditProfile },
  { path: 'rate-feedback', component: RateFeedback },
  { path: 'create-listing', component: CreateListing },
  { path: 'edit-listing', component: EditListing }
];