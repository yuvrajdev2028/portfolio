import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-tag',
  imports: [],
  templateUrl: './skills-tag.html',
  styleUrl: './skills-tag.css'
})
export class SkillsTag {
  @Input() skill!:string;
}
