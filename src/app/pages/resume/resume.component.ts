import { Component, OnInit } from '@angular/core';
import { GlobalVars } from '../../common/global-vars';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  public isMobile: boolean = GlobalVars.isMobile;

  constructor() { }

}
