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
  public selectedProject: number = -1;

  constructor(
    private _projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.projects = this._projectsService.getProjects();
  }

  panelOpened(index: number){
    let inner = document.createElement(this.projects[index].app)
    let outer = document.getElementById(`${index}`);
    outer?.appendChild(inner);
    console.log(outer);
    console.log(document.getElementById(`panel${index}`))
  }
}
