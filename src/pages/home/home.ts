import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherService } from '../../providers/weather-service';
import { Observable } from 'rxjs/Observable';
import { Temperature } from '../../models/temperature.model'; 
import { ForecastPage } from '../forecast/forecast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  temperature: Observable<Temperature>;
  private currentTemp: string;
  private currentSum: string;

  constructor(public navCtrl: NavController, public weather: WeatherService) {
    this.getTemperature();
  }

  getTemperature() {
    this.temperature = this.weather.getDefaultTemperature();
    this.temperature.subscribe( (data: any) => { 
      if (data.currently != undefined )
      {
        this.currentTemp = data.currently.temperature;
        this.currentSum = data.currently.summary;

      } 
    })
  }

  swipe(event) {
    if(event.direction === 2) {
      this.navCtrl.parent.select(1);
    }
  }

  openForecast() {
    this.navCtrl.push(ForecastPage);
  }

}
