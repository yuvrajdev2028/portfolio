import { Component, inject } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { ProjectDataService } from '../../services/project-data';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projectDataService = inject(ProjectDataService);

  projectData!:any[]
  ngOnInit(){
    this.projectData=this.projectDataService.projectData;
  }
}
