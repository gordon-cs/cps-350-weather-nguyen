import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { WeatherService } from '../../providers/weather-service';
import { Observable } from 'rxjs/Observable';
import { Temperature } from '../../models/temperature.model'; 


@Component({
  selector: 'page-forecast',
  templateUrl: 'forecast.html',
})
export class ForecastPage {

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

}
