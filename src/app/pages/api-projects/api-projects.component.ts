import { Component, OnInit } from '@angular/core';
import { GlobalVars } from 'src/app/common/global-vars';

@Component({
  selector: 'app-api-projects',
  templateUrl: './api-projects.component.html',
  styleUrls: ['./api-projects.component.scss']
})
export class ApiProjectsComponent implements OnInit {

  public temp: any;
  constructor() { }

  ngOnInit(): void {
    const temp =  fetch( GlobalVars.WEATHER_URL_BASE + "getTemp", {headers: Access-Control-Allow-Origin}).then( (response) =>{
      console.log(response);
    })
  }

}
