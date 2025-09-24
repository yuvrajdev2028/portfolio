import { Component } from '@angular/core';
import { HeroSection } from "../../components/hero-section/hero-section";
import { About } from "../../components/about/about";
import { Experience } from "../../components/experience/experience";
import { Projects } from '../../components/projects/projects';
import { RouterLink } from '@angular/router';
import { Footer } from "../../components/footer/footer";
import { Education } from "../../components/education/education";
import { Contact } from "../../components/contact/contact";

@Component({
  selector: 'app-home-page',
  imports: [HeroSection, About, Experience, Projects, Footer, Education, Contact],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
