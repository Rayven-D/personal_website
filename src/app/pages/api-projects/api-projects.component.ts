import { Component, OnInit } from '@angular/core';
import { ApiControllerService } from 'src/app/common/api-controller.service';
import { Weather } from 'src/assets/data/api-classes/weather';
import { google } from 'google-maps';

@Component({
  selector: 'app-api-projects',
  templateUrl: './api-projects.component.html',
  styleUrls: ['./api-projects.component.scss'],
  providers:[
    ApiControllerService
  ]
})
export class ApiProjectsComponent implements OnInit {

  public weather: Weather = { temp: -999, city: "", type: "", icon: "http://openweathermap.org/img/wn/" };
  public loadedWeather: boolean = false;
  public errorWeather: boolean = false;

  public issLatLong: number[] = [];
  public issTimestamp: number = 0;
  public issCity: string = "";
  public loadedISS: boolean = true;
  public errorISS: boolean = false;

  constructor(
    private _apiService: ApiControllerService
  ) { }

  async ngOnInit() {
    this.getLocalWeather();
    this.getISSLocation();

  }

  private async getLocalWeather(): Promise<void>{
    navigator.geolocation.getCurrentPosition( async (pos) => {
      try{
        const fetched = await this._apiService.getTemp(pos.coords.latitude, pos.coords.longitude)
        this.weather.icon += fetched.weather[0].icon + ".png";
        this.weather.city = fetched.name;
        this.weather.type = fetched.weather[0].description.split(" ").map( (word: any) => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");
        this.weather.temp = Math.round(fetched.main.temp);
        this.loadedWeather = true;
      }catch(error){
        this.errorWeather = true;
        this.loadedWeather = true;
      }
    },
      () =>{
        this.errorWeather = true;
        this.loadedWeather = true;
      }
    );
  }

  private async getISSLocation(){
    try{
      const iss = await this._apiService.getISSLocation();
      this.issLatLong[0] = iss.iss_position.latitude;
      this.issLatLong[1] = iss.iss_position.longitude;
      this.issTimestamp = iss.timestamp;
      console.log(this.issLatLong);


      let map: google.maps.Map;
      const center = { lat: this.issLatLong[0], lng: this.issLatLong[1]};
      map = new google.maps.Map(document.getElementById("map") as HTMLElement,{
        center: center,
        zoom: 8
      });

      const marker = new google.maps.Marker({
        position: center,
        map: map,
      })

    }catch(error){
      this.errorISS = true;
      this.loadedISS = true;

    }
  }

}
