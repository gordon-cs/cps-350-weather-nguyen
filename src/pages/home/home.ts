import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherService } from '../../providers/weather-service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  temporaryWeather : Observable<string>;


  constructor(public navCtrl: NavController, public weather: WeatherService) {
    this.temporaryWeather = weather.getWenham();
  }

  //testing to see if service function loads. It should 
  //print in console log "I do something useful".
  ionViewDidLoad() {
    this.weather.randomFunction();
  }
}
