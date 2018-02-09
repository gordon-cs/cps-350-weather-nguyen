import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SimpleWeather } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WeatherService } from '../providers/weather-service';

@NgModule({
  declarations: [
    SimpleWeather,
    AboutPage,
    ContactPage,
    HomePage,
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
    AboutPage,
    ContactPage,
    HomePage,
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
