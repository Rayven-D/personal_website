import { Component, OnInit } from '@angular/core';
import { Project } from 'src/assets/data/project-routes/project.Project';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[] = [];

  constructor(
    private _projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.projects = this._projectsService.getProjects();
  }

  public panelOpened(index: number): void{
    let elem = document.getElementById(index+"");
    if(elem === null) return;
    console.log(elem);
    elem.setAttribute('style', 'transition: all 3s ease; grid-column: 1 / -1;');


  }

}
