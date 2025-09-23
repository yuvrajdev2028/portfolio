import { Component } from '@angular/core';
import { HeroSection } from "../../components/hero-section/hero-section";
import { About } from "../../components/about/about";
import { Experience } from "../../components/experience/experience";

@Component({
  selector: 'app-home-page',
  imports: [HeroSection, About, Experience],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
