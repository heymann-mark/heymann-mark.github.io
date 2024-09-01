import { Component, AfterViewInit } from '@angular/core';
import { searchHeaderComponent } from '../searchHeader/searchHeader.component';
declare function dijkstraReset(num: number): any;
@Component({
  selector: 'app-dijkstra',
  standalone: true,
  imports: [searchHeaderComponent],
  templateUrl: './dijkstra.component.html',
  styleUrl: './dijkstra.component.css',
})
export class DijkstraComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    dijkstraReset(0);
  }
}
