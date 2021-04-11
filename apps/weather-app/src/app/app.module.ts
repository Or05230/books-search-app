import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';

import { ErrorPageModule } from './error-page/error-page.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BaseTemplateComponent } from './core/base-template/base-template.component';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule,
    StoreModule.forRoot( [appReducer]),
    StoreModule.forFeature('state', appReducer),
    CoreModule,
    ErrorPageModule,
    HomeModule,
    RouterModule.forRoot(
    [
      { path: '', pathMatch: 'full', redirectTo: '/home' },
      { path: '', component: BaseTemplateComponent, children: [
        { path: 'home', component: HomeComponent }]
      },
      {path: '**', component: ErrorPageComponent}]),
    MatButtonModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers : [{ provide: MAT_DATE_LOCALE, useValue: "en-AU" }]
})
export class AppModule {}


