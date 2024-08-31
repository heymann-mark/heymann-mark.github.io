import { Component, AfterViewInit } from '@angular/core';
import {SearchheaderComponent} from '../searchheader/searchheader.component';
declare function dijkstraReset(num:number):any;
@Component({
  selector: 'app-dijkstra',
  standalone: true,
  imports: [SearchheaderComponent],
  templateUrl: './dijkstra.component.html',
  styleUrl: './dijkstra.component.css'
})
export class DijkstraComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    dijkstraReset(0);
}
}
