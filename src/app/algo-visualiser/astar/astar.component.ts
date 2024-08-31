import { Component, AfterViewInit } from '@angular/core';
import {SearchheaderComponent} from '../searchheader/searchheader.component';

declare function astarReset(num:number):any;

@Component({
  selector: 'app-astar',
  standalone: true,
  imports: [SearchheaderComponent],
  templateUrl: './astar.component.html',
  styleUrl: './astar.component.css'
})
export class AstarComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    astarReset(0);
}
}
