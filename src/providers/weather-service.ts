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
    private realUrl : string;

    

    private currentTemperatureSubject: Subject<any>;
    private currentTemperature: Observable<Temperature>;

    constructor(private http: HttpClient) { 
        
    }


    //testing
    randomFunction() {
        console.log("I actually do something useful");
    }

    getDefaultTemperature() {

        this.currentTemperatureSubject = new BehaviorSubject("??");
        this.currentTemperature = this.currentTemperatureSubject.asObservable();
        let realUrl = this.apiUrl + this.apiKey + "/" + this.wenhamLocation;
        this.http.jsonp(realUrl,'callback').subscribe( data => this.currentTemperatureSubject.next(data));
        return this.currentTemperature;        
    }



}