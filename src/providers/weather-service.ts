import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/Observable'; //CORS error if not used. Learned my lesson..

// //Subjects implement both the Observer and the Observable interfaces, 
// //meaning that we can use them to both emit values and register subscribers.
// import { Subject } from 'rxjs/Subject';

// //return upon subscription the last value of the stream, 
// //or an initial state if no value was emitted yet
// // - THIS IS COOL - can retrieve current value of stream at any time.
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Injectable()
export class WeatherService {

    private apiUrl : string = 'https://api.darksky.net/forecast/';
    private apiKey : string = 'c7a0bbc2b027787365af6e16179330a4'; //this should be private
    private wenhamLocation : string = '42.589611,-70.819806';
    private realUrl : string;

    // private _currentBehavior : BehaviorSubject<string>;
    // private _currentTemperature : Observable<string>; //got "any" from demo code

    // private _currentTimezoneBehavior : BehaviorSubject<string>;
    // private _currentTimezone : Observable<string>;

    constructor(public http: HttpClient) { 
        // console.log('Hello Weather Service');

        // this.realUrl = this.apiUrl + this.apiKey + "/" + this.wenhamLocation;

        // //to tell the user that page is currently loading
        // this._currentBehavior = new BehaviorSubject("LOADING");

        // this._currentTemperature = this._currentBehavior.asObservable(); //got this from demo code

        // this.http.jsonp(this.realUrl, 'callback').
        //             // => defines 3 functions for subcribe
        //             subscribe(data => { 
        //                                 this._currentBehavior.next(data["currently"]["temperature"]); 
        //                               },
        //               err => { console.log("JSONP Error ");
        //                        console.log(err)
        //                      },
        //               ()  => { console.log("Done");
        //                      }
        //                  );


    }

    //testing
    randomFunction() {
        console.log("I actually do something useful");
    }

    // GET wenham temperature
    // getWenham() : Observable<string> {
    //     console.log("current temperature in Wenham ");
    //     console.log(this._currentTemperature);
    //     return this._currentTemperature;
        
    // }

    getTimeZone() {
        console.log("hello whats going on");
        return this.http.get('https://api.darksky.net/forecast/c7a0bbc2b027787365af6e16179330a4/42.589611,-70.819806')
            .map(res => res);
        
    }   
}