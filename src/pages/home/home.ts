import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherService } from '../../providers/weather-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //temporaryWeather : Observable<string>;
  data : any;


  constructor(public navCtrl: NavController, public weather: WeatherService) {
    //this.temporaryWeather = weather.getWenham();
    
    //this.weather.getTimeZone().subscribe(Response => console.log(Response));
    console.log('hello');
    
  }

  //testing to see if service function loads. It should 
  //print in console log "I do something useful".
  ionViewDidLoad() {
    this.weather.randomFunction();
    this.weather.getTimeZone().subscribe(data => { 
      console.log (data)
      this.data = data;
    }) ;

    
    
  }

  // getWenham() {
  //   //this.weather.getTimeZone().subscribe((data : any) => { this.data = data.temperature; }) ;
  //   this.weather.getTimeZone().subscribe(data => { console.log (data)}) ;
  // }


}
