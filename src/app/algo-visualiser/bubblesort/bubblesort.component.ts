import { Component, OnInit, AfterViewInit } from '@angular/core';
import {SortheaderComponent} from '../sortheader/sortheader.component';
import { FormsModule } from '@angular/forms';

declare function  resetbubble(num: number): void;

@Component({
  selector: 'app-bubblesort',
  standalone: true,
  imports: [SortheaderComponent, FormsModule],
  templateUrl: './bubblesort.component.html',
  styleUrl: './bubblesort.component.css'
})
export class BubblesortComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    resetbubble(0);
}
}
