import { Routes } from '@angular/router';
import { AboutComponent} from './profile/about/about.component';
import { ProjectsComponent} from './profile/projects/projects.component';
import { ContactComponent} from './profile/contact/contact.component';
import { ProfileComponent} from './profile/profile.component';
export const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contact', component: ContactComponent}
];
