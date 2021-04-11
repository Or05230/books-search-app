import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ErrorPageComponent } from './error-page.component';

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [BrowserModule, MatButtonModule],
  bootstrap: [ErrorPageComponent]
})
export class ErrorPageModule {}
