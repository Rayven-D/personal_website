import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public test:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.test = (this.test+7)%8;
  }

}
