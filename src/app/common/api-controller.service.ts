import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GlobalVars } from './global-vars';

@Injectable({
  providedIn: 'root',
})
export class ApiControllerService {

  constructor(private http: HttpClient) { }

  getTemp(latitude: number, longitude: number){
    return this.http.post(GlobalVars.WEATHER_URL_BASE + "getTemp", {lat: latitude, long: longitude});
  }

}
