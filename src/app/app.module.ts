import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SimpleWeather } from './app.component';


import { ActivitiesPage } from '../pages/activities/activities';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ForecastPage } from '../pages/forecast/forecast';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WeatherService } from '../providers/weather-service';

@NgModule({
  declarations: [
    SimpleWeather,
    ActivitiesPage,
    ContactPage,
    HomePage,
    ForecastPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule, HttpClientJsonpModule, //imports
    IonicModule.forRoot(SimpleWeather)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SimpleWeather,
    ActivitiesPage,
    ContactPage,
    HomePage,
    ForecastPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WeatherService,
    {provide: ErrorHandler, useClass: IonicErrorHandler} 
  ]
})
export class AppModule {}
