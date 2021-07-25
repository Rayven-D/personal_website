import { Component, OnInit } from '@angular/core';
import { GlobalVars } from 'src/app/common/global-vars';

@Component({
  selector: 'app-api-projects',
  templateUrl: './api-projects.component.html',
  styleUrls: ['./api-projects.component.scss']
})
export class ApiProjectsComponent implements OnInit {

  public weatherTemp: number | string = "";
  public weatherCity: string = "";
  public weatherType: string = "";
  public weatherIcon: string ="http://openweathermap.org/img/wn/"
  public loadedWeather: boolean = false;
  constructor() { }

  ngOnInit() {
    this.getLocalWeather().then( () => {
      setTimeout( () => {
        this.loadedWeather = true;
      },100000000)
    });
  }

  public async getLocalWeather(){
    navigator.geolocation.getCurrentPosition( (pos) => {
      fetch( GlobalVars.WEATHER_URL_BASE + "getTemp" + `?lat=${pos.coords.latitude}&long=${pos.coords.longitude}`).then( (response) =>{
        response.json().then( data => {
          this.weatherCity = data.name;
          this.weatherType = data.weather[0].description
          this.weatherType = this.weatherType.split(" ").map( (val) => val.charAt(0).toUpperCase() + val.substring(1)).join(" ");
          this.weatherIcon += data.weather[0].icon + ".png";
          this.weatherTemp = Math.round(data.main.temp);
        })
      })
    }, (error) => { 
      console.log("Failed to get location"); 
      this.weatherCity = "Can't get location";
    })  
  }

}
