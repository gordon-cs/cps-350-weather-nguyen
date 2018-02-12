export interface Temperature{
    latitude: number;
    longtitude: number;
    timezone: string;
    currently: Currently[];
    minutely: Minutely[];
    hourly: Hourly[];
    daily: Daily[];
    flags: Flags[];
    offset: number;
  }

  export interface Currently {
      time: number;
      summary: string;
      icon: string;
      nearestStormDistance: number;
      nearestStormBearing: number;
      precipIntensity: number;
      precipProbability: number;
      temperature: number;
      apparentTemperature: number;
      dewPoint: number;
      humidity: number;
      pressure: number;
      windSpeed: number;
      windGust: number;
      windBearing: number;
      cloudCover: number;
      uvIndex: number;
      visibility: number;
      ozone: number;

  }

  export interface Minutely {
    summary: string;
    icon: string;
    data: string;
  }

  export interface Hourly {
      summary: string;
      icon: string;
      data: string;      
  }

  export interface Daily {
    summary: string;
    icon: string;
    data: string;
  }

  export interface Flags {
      sources: string;
      stations: string;
      units: string; 
  }