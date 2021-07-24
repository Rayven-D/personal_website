import { Component, OnInit } from '@angular/core';
import { GlobalVars } from 'src/app/common/global-vars';

@Component({
  selector: 'app-api-projects',
  templateUrl: './api-projects.component.html',
  styleUrls: ['./api-projects.component.scss']
})
export class ApiProjectsComponent implements OnInit {

  public weatherTemp: number | string = "";
  public weatherCity: string = "Loading...";
  public weatherType: string = "";
  public finishedWeather: boolean = false;
  constructor() { }

  async ngOnInit() {
    this.getLocalWeather();
  }

  public getLocalWeather(){
    navigator.geolocation.getCurrentPosition( (pos) => {
      fetch( GlobalVars.WEATHER_URL_BASE + "getTemp" + `?lat=${pos.coords.latitude}&long=${pos.coords.longitude}`).then( (response) =>{
        response.json().then( data => {
          console.log(data)
          this.weatherCity = data.name;
          this.weatherType = data.weather[0].description;
          this.weatherTemp = Math.round(data.main.temp);
        })
      })
    }, (error) => { 
      console.log("Failed to get location"); 
      this.weatherTemp = "Can't get location. Did you reject location?";
    })  
  }

}
