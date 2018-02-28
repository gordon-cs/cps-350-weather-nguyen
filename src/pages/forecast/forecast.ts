import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { WeatherService } from '../../providers/weather-service';
import { Observable } from 'rxjs/Observable';
import { Temperature, Daily } from '../../models/temperature.model';
import { dayforecast } from '../../models/forecast.model';

//got from Max, implemented in forecast service
import { LoadingController } from 'ionic-angular'; 
 


@Component({
  selector: 'page-forecast',
  templateUrl: 'forecast.html',
})
export class ForecastPage {

  temperature: Observable<Temperature>;
  dailyTemp: Daily;
  sevenDays: dayforecast[];

  constructor(public navCtrl: NavController, public weather: WeatherService, private loadingCtrl: LoadingController) {

      this.sevenDays = [ new dayforecast(),new dayforecast(),new dayforecast(),
                         new dayforecast(),new dayforecast(),new dayforecast(),
                         new dayforecast()];
      this.getWeek();
      this.sevenDays[0].setWeekday("Today");
      //once data is pulled. needs to load it
      this.loadWeek();
  }

//converting numbers in API to date format
//Max wrote this function as well as loadWeek function
//Link i researched to understand it: 
//https://ionicframework.com/docs/api/components/loading/LoadingController/

getWeek() {
  let todayNum = new Date().getDay();
  let i = 0;
  this.sevenDays.forEach(day => 
    { day.setWeekday(this.weather.divideDay(todayNum + i)); 
      i++;}
    );
}

//load the week
loadWeek() {
  let loading = this.loadingCtrl.create({
    content: ''
  });

  loading.present();

  setTimeout(() => {
    this.getTemperature()
    loading.dismiss();
  }, 150);//may need to change
}

getTemperature() {
  this.temperature = this.weather.getDefaultTemperature();
  this.temperature.subscribe( (data : any) => { 
    this.dailyTemp = data.daily; 
    if (data.currently != undefined )
    {
      let i = 0;

      this.sevenDays.forEach(day => {
        day.setTempHigh( Math.round(this.dailyTemp.data[i]["temperatureHigh"]) );
        day.setTempLow( Math.round(this.dailyTemp.data[i]["temperatureLow"]) );
        day.setSummary(this.dailyTemp.data[i]["summary"]);
        day.setIcon(this.dailyTemp.data[i]["icon"]);
        i++
      });
      this.weather.changeIconName(this.sevenDays);
    } 
  })
}

}
