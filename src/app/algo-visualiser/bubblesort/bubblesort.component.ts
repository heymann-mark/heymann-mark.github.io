import { Component, AfterViewInit, Input } from '@angular/core';
import { sortHeaderComponent } from '../sortHeader/sortHeader.component'
import { FormsModule } from '@angular/forms';

declare function resetbubble(): void;
declare function sortSetup(): void;

@Component({
  selector: 'app-bubblesort',
  standalone: true,
  imports: [sortHeaderComponent, FormsModule],
  templateUrl: './bubblesort.component.html',
  styleUrl: './bubblesort.component.css',
})
export class BubblesortComponent implements AfterViewInit {
  @Input() quantity = 100;
  constructor(){
  //  sortSetup();
  }
  ngOnInit(){
    //sortSetup();
  }
  ngAfterViewInit(): void {
    resetbubble();
  }
}
