import { Routes } from '@angular/router';
import { AboutComponent} from './profile/about/about.component';
import { ProjectsComponent} from './profile/projects/projects.component';
import { ContactComponent} from './profile/contact/contact.component';
import { ProfileComponent} from './profile/profile.component';
import {PhotographyComponent} from './photography/photography.component';
import {SearchComponent} from './algo-visualiser/search/search.component';
import {SortComponent} from './algo-visualiser/sort/sort.component';;
import {BubblesortComponent} from './algo-visualiser/bubblesort/bubblesort.component';
import {MergesortComponent} from './algo-visualiser/mergesort/mergesort.component';
import {QuicksortComponent} from './algo-visualiser/quicksort/quicksort.component';
import {DijkstraComponent} from './algo-visualiser/dijkstra/dijkstra.component';
import {AstarComponent} from './algo-visualiser/astar/astar.component';

export const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'photography', component: PhotographyComponent},
  {path: 'sort', component: SortComponent},
  {path: 'search', component: SearchComponent},
  {path: 'bubblesort', component: BubblesortComponent},
  {path: 'quicksort', component: QuicksortComponent},
  {path: 'mergesort', component: MergesortComponent},
  {path: 'dijkstra', component: DijkstraComponent},
  {path: 'astar', component: AstarComponent}

];
