//this was written by Max Monix
//I could not figure out how to show dates 
//by week. All service files using forecast model
//is credited to Max Monix
export class dayforecast
{
    private weekday:string;
    private tempMain:string;
    private tempLow:string
    private tempHigh:string;
    private summary:string;
    private humidity:string;
    private windSpeed: string;
    private icon:string;
    

    constructor(){
        this.weekday = "";
        this.tempMain = ""
        this.tempHigh = ""
        this.tempLow = ""
        this.humidity = ""
        this.windSpeed = ""
        this.summary = ""
        this.icon = ""
    }

    //Accessors
    getWeekday()
    {return this.weekday;}
    getTempMain()
    {return this.tempMain;}
    getTempHigh()
    {return this.tempHigh;}
    getTempLow()
    {return this.tempLow;}
    getSummary()
    {return this.summary;}
    getIcon()
    {return this.icon;}
    getHumidity()
    {return this.humidity;}
    getWindSpeed()
    {return this.windSpeed;}

    //used in getTemperature function
    setWeekday(weekday)
    { this.weekday = weekday;}
    setTempMain(temp)
    { this.tempMain = temp;}
    setTempHigh(temp)
    { this.tempHigh = temp;}
    setTempLow(temp)
    { this.tempLow = temp;}
    setSummary(summary)
    { this.summary = summary;}
    setIcon(icon)
    { this.icon = icon; } 
    setHumidity(humidity)
    { this.humidity = humidity;}
    setWindSpeed(windSpeed)
    { this.windSpeed = windSpeed;}

    
}