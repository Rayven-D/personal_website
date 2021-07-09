import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellSimulationComponent } from './cell-simulation.component';

describe('CellSimulationComponent', () => {
  let component: CellSimulationComponent;
  let fixture: ComponentFixture<CellSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellSimulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
