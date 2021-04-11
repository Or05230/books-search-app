import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { WeatherIconsEnum } from '../../../../libs/models/weather-icons.enum';

@Component({
  selector: 'weather-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'weather-app';

  constructor( private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.addWeatherIconToRegistry();
  }

  addWeatherIconToRegistry() {
    this.matIconRegistry.addSvgIcon(
      "moon",
      this.domSanitizer.bypassSecurityTrustResourceUrl(WeatherIconsEnum.MOON))
      .addSvgIcon("cloud_moon",
        this.domSanitizer.bypassSecurityTrustResourceUrl(WeatherIconsEnum.CLOUD_MOON))
      .addSvgIcon("cloud",
        this.domSanitizer.bypassSecurityTrustResourceUrl(WeatherIconsEnum.CLOUD))
      .addSvgIcon("snow",
        this.domSanitizer.bypassSecurityTrustResourceUrl(WeatherIconsEnum.SNOW))
      .addSvgIcon("rain",
        this.domSanitizer.bypassSecurityTrustResourceUrl(WeatherIconsEnum.RAIN))
      .addSvgIcon("showers",
        this.domSanitizer.bypassSecurityTrustResourceUrl(WeatherIconsEnum.SHOWERS))
      .addSvgIcon("partly_sunny",
        this.domSanitizer.bypassSecurityTrustResourceUrl(WeatherIconsEnum.PARTLY_SUNNY))
      .addSvgIcon("sun",
        this.domSanitizer.bypassSecurityTrustResourceUrl(WeatherIconsEnum.SUN))
    }
  }
