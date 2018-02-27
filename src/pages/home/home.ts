import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherService } from '../../providers/weather-service';
import { Observable } from 'rxjs/Observable';
import { Temperature } from '../../models/temperature.model'; 
import { ForecastPage } from '../forecast/forecast';
import { dayforecast } from '../../models/forecast.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  temperature: Observable<Temperature>;
  today:dayforecast = new dayforecast();
  private currentTemp: string;
  private currentSum: string;

  constructor(public navCtrl: NavController, public weather: WeatherService) {

    //written by Max
    //this is using the day forecast interface
    this.today.setWeekday(this.weather.divideDay(new Date().getDay()));


    this.getTemperature();
  }

  getTemperature() {
    this.temperature = this.weather.getDefaultTemperature();
    this.temperature.subscribe( (data: any) => { 
      if (data.currently != undefined )
      {
        this.today.setSummary(data.currently.summary);
        this.today.setTempHigh(+data.currently.temperature);
        this.today.setHumidity( (data.currently.humidity * 100) );
        this.today.setWindSpeed(data.currently.windSpeed);
        this.today.setIcon(data.currently.icon);
        this.weather.changeIconName([this.today]);
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
