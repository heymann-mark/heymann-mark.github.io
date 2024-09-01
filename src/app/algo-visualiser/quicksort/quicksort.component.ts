import { Component } from '@angular/core';
import {sortHeaderComponent} from '../sortHeader/sortHeader.component';
import { FormsModule } from '@angular/forms';
declare function  resetquick(): void;
@Component({
  selector: 'app-quicksort',
  standalone: true,
  imports: [sortHeaderComponent, FormsModule],
  templateUrl: './quicksort.component.html',
  styleUrl: './quicksort.component.css'
})
export class QuicksortComponent {
  ngAfterViewInit(): void {
    resetquick();
}
}
