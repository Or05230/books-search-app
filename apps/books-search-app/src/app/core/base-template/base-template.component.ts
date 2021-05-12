import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { OverlaySpinner } from '../overlay-spinner/overlay-spinner';
import { UsersEnum } from '../../../../../../libs/models/users.enum';
import { LoggerService } from '../../../../../../libs/services';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'books-search-app-base-template',
  templateUrl: './base-template.component.html',
  styleUrls: ['./base-template.component.scss'],
})
export class BaseTemplateComponent implements OnInit {
  copyright = '© Or Ahlagi 2021';
  userName: string;
  navIcon = 'favorite'

  constructor(private overlaySpinner: OverlaySpinner, private router: Router, private loggerService: LoggerService) {
  }

  ngOnInit() {
    this.loggerService.setLoggerConfig(environment.loggerConfig)
    this.getUsername();
    this.router.events.subscribe( (url : NavigationEnd )=> {
      this.setPageIcon(url.url);
    });
  }

  getUsername() {
    this.userName = localStorage.getItem(UsersEnum.USERNAME_KEY)
  }

  setPageIcon(url: string) {
    switch(url) {
      case pageUrlOptions.favorite:
        this.navIcon = 'home'
        break;
      case pageUrlOptions.home:
        this.navIcon = 'favorite'
        break;
      default:
        this.navIcon = 'favorite'
    }
  }


  async navigateToFavorite () {
    await this.router.navigate(['/favorites'])

  }

  async navigateToHome() {
    await this.router.navigate(['/'])

  }
}



export enum pageUrlOptions {
  favorite = '/favorites',
  home= '/home'
}
