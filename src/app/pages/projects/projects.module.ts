import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellSimulationComponent } from './cell-simulation/cell-simulation.component';
import { DiceGameComponent } from './dice-game/dice-game.component';
import { HealthcareComponent } from './healthcare/healthcare.component';



@NgModule({
  declarations: [
    CellSimulationComponent,
    DiceGameComponent,
    HealthcareComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
