import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [LoginComponent],
  imports: [ BrowserModule, MatFormFieldModule, MatAutocompleteModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatIconModule, MatMenuModule],
  bootstrap: [LoginComponent],
})
export class LoginModule {}
