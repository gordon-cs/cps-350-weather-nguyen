import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherService } from '../../providers/weather-service';
import { Observable } from 'rxjs/Observable';
import { Temperature } from '../../models/temperature.model'; 
import { ForecastPage } from '../forecast/forecast';
import { dayforecast } from '../../models/forecast.model';

@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html'
})
export class ActivitiesPage {

  temperature: Observable<Temperature>;
  today:dayforecast = new dayforecast();
  

  constructor(public navCtrl: NavController, public weather: WeatherService) {
    this.today.setWeekday(this.weather.divideDay(new Date().getDay()));
    this.getTemperature();
  }

  getTemperature() {
    this.temperature = this.weather.getDefaultTemperature();
    this.temperature.subscribe( (data: any) => { 
      //if statement is Max's idea
      if (data.currently != undefined )
      {
        this.today.setSummary(data.currently.summary);
        this.today.setIcon(data.currently.icon);
        this.weather.changeIconName([this.today]);
      } 
    })
  }



  swipe(event) {
    if(event.direction === 2) {
      this.navCtrl.parent.select(2);
    }
    if(event.direction === 4) {
      this.navCtrl.parent.select(0);
    }
  }

}
