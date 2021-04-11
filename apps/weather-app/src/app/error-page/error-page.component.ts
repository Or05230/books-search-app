import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent {
  logo = 'assets/deer-icon.svg';
  constructor(private router: Router) {}

  onRetryClick() {
    this.router.navigate(['']);
  }
}
