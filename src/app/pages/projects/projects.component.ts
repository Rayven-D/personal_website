import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { CellSimulationComponent } from './cell-simulation/cell-simulation.component';
import { DiceGameComponent } from './dice-game/dice-game.component';
import { HealthcareComponent } from './healthcare/healthcare.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  public selectedProject: number = -1;

  constructor() { }  
  public panelOpened(index: number){
    console.log(index);
  }

}
