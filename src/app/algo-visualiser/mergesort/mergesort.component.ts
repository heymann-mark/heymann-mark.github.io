import { Component, AfterViewInit } from '@angular/core';
import {SortheaderComponent} from '../sortheader/sortheader.component';
import { FormsModule } from '@angular/forms';
declare function  resetmerge(): void;

@Component({
  selector: 'app-mergesort',
  standalone: true,
  imports: [SortheaderComponent, FormsModule],
  templateUrl: './mergesort.component.html',
  styleUrl: './mergesort.component.css'
})
export class MergesortComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    resetmerge();
}
}
