import { Component, AfterViewInit } from '@angular/core';
import {searchHeaderComponent} from '../searchHeader/searchHeader.component';

declare function astarReset(num:number):any;

@Component({
  selector: 'app-astar',
  standalone: true,
  imports: [searchHeaderComponent],
  templateUrl: './astar.component.html',
  styleUrl: './astar.component.css'
})
export class AstarComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    astarReset(0);
}
}
