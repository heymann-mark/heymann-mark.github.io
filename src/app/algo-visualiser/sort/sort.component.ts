import { Component } from '@angular/core';
import {SortheaderComponent} from '../sortheader/sortheader.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [SortheaderComponent,FormsModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})
export class SortComponent {

}
