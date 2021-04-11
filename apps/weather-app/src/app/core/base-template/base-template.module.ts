import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BaseTemplateComponent } from './base-template.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [BaseTemplateComponent],
  imports: [BrowserModule, MatToolbarModule, MatButtonModule, RouterModule, MatIconModule, MatTooltipModule],
  bootstrap: [BaseTemplateComponent],
})
export class BaseTemplateModule {}
