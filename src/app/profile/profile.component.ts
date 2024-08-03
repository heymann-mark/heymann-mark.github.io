import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header/header.component';
import { IntroComponent } from '../intro/intro/intro.component';
import { AboutComponent } from '../about/about/about.component';
import { ContactComponent } from '../contact/contact/contact.component';
import { EducationComponent } from '../education/education/education.component';
import { ExperienceComponent } from '../experience/experience/experience.component';
import { ProjectsComponent } from '../projects/projects/projects.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent,IntroComponent,AboutComponent,ContactComponent,EducationComponent,ContactComponent,ExperienceComponent,ProjectsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
