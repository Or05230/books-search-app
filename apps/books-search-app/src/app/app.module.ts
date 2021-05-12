import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';


import { ErrorPageModule } from './error-page/error-page.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BaseTemplateComponent } from './core/base-template/base-template.component';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth/auth.guard';
import { AuthenticationModule } from './services/auth/authentication.module';
import { LoginComponent } from './core/login/login.component';
import { LoginModule } from './core/login/login.module';
import { FavoritesModule } from './core/favorites/favorites.module';
import { FavoritesComponent } from './core/favorites/favorites.component';
import { InterceptorService } from './services/auth/interceptor.service';
import { LoggerServiceModule } from '../../../../libs/services';


@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule,
    CoreModule,
    AuthenticationModule,
    ErrorPageModule,
    HomeModule,
    LoggerServiceModule,
    FavoritesModule,
    LoginModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: '/home' },
        {
          path: '', component: BaseTemplateComponent, canActivate: [AuthGuard], children: [
            { path: 'home', component: HomeComponent },
            { path: 'favorites', component: FavoritesComponent }
            ]
        },
        { path: 'login', component: LoginComponent },
        { path: '**', component: ErrorPageComponent }]),
    MatButtonModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  exports: [
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-AU' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },]
})
export class AppModule {}


