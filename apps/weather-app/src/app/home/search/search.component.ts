import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { OpenweatherService } from '../../services/openweather.service';

import { OverlaySpinner } from '../../core/overlay-spinner/overlay-spinner';
import { WeatherModel } from '../../../../../../libs/models/weather.model';
import { Router } from '@angular/router';

@Component({
  selector: 'weather-app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnChanges {
  @Input() isMetric: boolean;
  weatherForm: FormGroup;
  chosenCities: string[] = []; // cities list
  citiesForecasts: WeatherModel[] = []; // weathers list per city

  constructor(
    private openweatherService : OpenweatherService,
    private overlaySpinner: OverlaySpinner,
    private router: Router,
    private fb: FormBuilder) {}


  ngOnInit(): void {

    this.weatherForm = this.fb.group({
      cities: this.fb.array([''])
    });
  }

  get cityArray(): FormArray {
    return this.weatherForm.get('cities') as FormArray;
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isMetric) {
      if (!changes.isMetric.firstChange) {
        this.resetSavedForecasts();
      }

    }
  }


  resetSavedForecasts() {
    this.citiesForecasts = [];
    this.chosenCities = [];
  }


  addNewCity(i: number, city: FormControl) {
    if (city?.value?.length) {
      this.chosenCities[i] = city.value
      if (!this.chosenCities.includes('')) this.chosenCities.push('');

      // re set the form array control with the update chosenRolesList and update the form
      this.weatherForm.setControl('cities', this.fb.array(this.chosenCities));

      this.weatherForm.updateValueAndValidity();
    } else if (!city?.value) {
      // no value, don't add nor search
    }

  }


  async onSearchClick(i: number, city: FormControl){
    this.overlaySpinner.showSpinner();
    if (city?.value?.length) {
      this.openweatherService.getForecastByLocationKey(city.value).subscribe((res: WeatherModel) => {
        if (res) {
          this.citiesForecasts.push(res);
          this.addNewCity(i, city);
        } else {
          this.router.navigate(['error']);
        }
        this.overlaySpinner.hideSpinner();
      }, error => {
        this.overlaySpinner.hideSpinner();
        this.router.navigate(['error']);
      })

    }

  }

}
