import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { OverlaySpinner } from '../overlay-spinner/overlay-spinner';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private overlaySpinner: OverlaySpinner,) {}

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: ['', [Validators.pattern(/^[+ [a-zA-Z0-9]+$/), Validators.required]],
    });  }



    submit() {
      this.overlaySpinner.showSpinner();
      this.authService.login(this.loginForm.get('username').value).pipe(delay(1000)).subscribe(((userExist: boolean) => {
        // delay is to mimic server response and impl. spinner
        this.overlaySpinner.hideSpinner();
        if (userExist) {
          this.router.navigate(['/home'])
        } else {
          this.loginForm.get('username').setErrors({ notExist: true });
        }
      }))
    }


  getErrorMessage(controller: AbstractControl) {
    return controller.hasError('required')
        ? '*This field is required'
        : controller.hasError('pattern')
          ? 'Only english letters and numbers are allowed'
          :  controller.hasError('notExist')
          ? 'User is not exist'
          :'';
  }

}
