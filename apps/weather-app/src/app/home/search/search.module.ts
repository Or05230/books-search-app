import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MiniWeatherItemModule } from '../../core/mini-weather-item/mini-weather-item.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [SearchComponent],
  imports: [BrowserModule, MatFormFieldModule, MatAutocompleteModule, MiniWeatherItemModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatIconModule, MatMenuModule],
  bootstrap: [SearchComponent],
  exports: [
    SearchComponent
  ]
})
export class SearchModule {}
