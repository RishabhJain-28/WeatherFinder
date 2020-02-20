class Weather{
    constructor(city,state){
        this.apiKey='3c1a20283ead2b9d4dd29fe7c154e349';
        this.city=city;
        this.state=state;
    }
    async getWeather(){
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`;
        // const url=``;
        const response = await fetch(url);
        const responseData = await response.json();
        return responseData;
    }
    changeLocation(city,state){
        this.city  = city;
        this.state =  state;
    }
}