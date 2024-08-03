import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent,IntroComponent,AboutComponent,ContactComponent,EducationComponent,ContactComponent,ExperienceComponent,ProjectsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
