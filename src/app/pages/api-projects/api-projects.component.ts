import { Component, OnInit } from '@angular/core';
import { ApiControllerService } from 'src/app/common/api-controller.service';
import { GlobalVars } from 'src/app/common/global-vars';
import { Weather } from 'src/assets/data/api-classes/weather';

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
  constructor(
    private apiService: ApiControllerService
  ) { }

  async ngOnInit() {
    this.getLocalWeather();

  }

  public async getLocalWeather(): Promise<void>{
    navigator.geolocation.getCurrentPosition( (pos) => {
      this.apiService.getTemp(pos.coords.latitude, pos.coords.longitude).then(
        (data:any) => {
          this.weather.icon += data.weather[0].icon + ".png";
          this.weather.city = data.name;
          this.weather.type = data.weather[0].description.split(" ").map( (word: any) => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");
          this.weather.temp = Math.round(data.main.temp);
          this.loadedWeather = true;
        }
      ).catch( () =>{
        this.loadedWeather = true;
        this.errorWeather = true;
      })
    }, (error) => { 
      console.log("Failed to get location"); 
      this.loadedWeather = true;
      this.errorWeather = true;
    });
  }

}
