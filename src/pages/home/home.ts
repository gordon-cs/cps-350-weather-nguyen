import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherService } from '../../providers/weather-service';
import { Observable } from 'rxjs/Observable';
import { Temperature } from '../../models/temperature.model'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  private currentTemp: string;
  private timeZone: string;

  constructor(public navCtrl: NavController, public weather: WeatherService) {
    //this.temporaryWeather = weather.getWenham();
    
    //this.weather.getTimeZone().subscribe(Response => console.log(Response));
    console.log('hello');

    weather.getDefaultTemperature().subscribe( (data : any) => {
      this.currentTemp = data.currently.temperature;
      this.timeZone = data.timezone;
    });

    
  }


}
