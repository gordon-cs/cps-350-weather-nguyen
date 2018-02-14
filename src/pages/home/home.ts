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
  private summary: string;

  //hourly
  private hour0: string;
  private hour1: string;
  private hour2: string;
  private hour3: string;
  private hour4: string;

  constructor(public navCtrl: NavController, public weather: WeatherService) {
    //this.temporaryWeather = weather.getWenham();
    
    //this.weather.getTimeZone().subscribe(Response => console.log(Response));
    console.log('hello');

    weather.getDefaultTemperature().subscribe( (data : any) => {
      this.currentTemp = data.currently.temperature;
      this.timeZone = data.timezone;
      this.summary = data.currently.summary;

      //hourly
      this.hour0 = data.hourly.data[0].temperature;
      this.hour1 = data.hourly.data[1].temperature;
      this.hour2 = data.hourly.data[2].temperature;
      this.hour3 = data.hourly.data[3].temperature;
      this.hour4 = data.hourly.data[4].temperature;
      
    });

    
  }


}
