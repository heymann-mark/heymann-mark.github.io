import { Component } from '@angular/core';
import {SortheaderComponent} from '../sortheader/sortheader.component';
import { FormsModule } from '@angular/forms';
declare function  resetquick(): void;
@Component({
  selector: 'app-quicksort',
  standalone: true,
  imports: [SortheaderComponent, FormsModule],
  templateUrl: './quicksort.component.html',
  styleUrl: './quicksort.component.css'
})
export class QuicksortComponent {
  ngAfterViewInit(): void {
    resetquick();
}
}
