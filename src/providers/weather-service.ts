import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/Observable'; //CORS error if not used. Learned my lesson..

// //Subjects implement both the Observer and the Observable interfaces, 
// //meaning that we can use them to both emit values and register subscribers.
import { Subject } from 'rxjs/Subject';

// //return upon subscription the last value of the stream, 
// //or an initial state if no value was emitted yet
// // - THIS IS COOL - can retrieve current value of stream at any time.
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Temperature } from '../models/temperature.model';



@Injectable()
export class WeatherService {

    private apiUrl : string = 'https://api.darksky.net/forecast/';
    private apiKey : string = 'c7a0bbc2b027787365af6e16179330a4'; //this should be private
    private wenhamLocation : string = '42.589611,-70.819806';

    
    //got this from Dr. Tuck's code
    private currentTemperatureSubject: Subject<any>;
    private currentTemperature: Observable<Temperature>;

    constructor(private http: HttpClient) { 
        
    }

    //move to function outside of constructor
    getDefaultTemperature() {

        this.currentTemperatureSubject = new BehaviorSubject("??");
        this.currentTemperature = this.currentTemperatureSubject.asObservable();
        let realUrl = this.apiUrl + this.apiKey + "/" + this.wenhamLocation;
        this.http.jsonp(realUrl,'callback').subscribe( data => 
                this.currentTemperatureSubject.next(data));
        return this.currentTemperature;        
    }

    //separate days. needed so we know which day it is
    //function was first written by Max
    //takes in day as argument
    //needed for icon as well
    divideDay(day){
        switch(day % 7)
        {
            case 0: return "Sunday"
            case 1: return "Monday"
            case 2: return "Tuesday"
            case 3: return "Wednesday"
            case 4: return "Thursday"
            case 5: return "Friday"
            case 6: return "Saturday"
        }
    }
    
    changeIconName(week)
    {
        week.forEach(day => {
            if(day.icon == "rain"|| "wind" ||"snow" ||"sleet" ||"fog" || "cloudy")
            {
              day.icon = "custom-" + day.icon;   
            }
           });
    }


}