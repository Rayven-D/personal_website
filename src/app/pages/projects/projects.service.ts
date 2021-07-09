import { Injectable } from '@angular/core';
import { Project } from 'src/assets/data/project-routes/project.Project';
import { PROJECTS } from 'src/assets/data/project-routes/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects(): Project[]{
    return PROJECTS;
  }
}
