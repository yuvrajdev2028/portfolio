import { Component, Input } from '@angular/core';
import { SkillsTag } from '../skills-tag/skills-tag';

@Component({
  selector: 'app-project-card',
  imports: [SkillsTag],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  @Input() projectTitle!:string;
  @Input() projectDesc!:string;
  @Input() projectSkills!:string[];
  @Input() projectImg!:string;
  @Input() projectLiveLink!:string;
  @Input() projectRepoLink!:string;
}
