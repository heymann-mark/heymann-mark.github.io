import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-searchheader',
  standalone: true,
  imports: [FormsModule, NgbDropdownModule, RouterModule],
  templateUrl: './searchheader.component.html',
  styleUrl: './searchheader.component.css'
})
export class SearchheaderComponent {
  @Input() speed = 500;
  @Input() quantity = 100;
  @Input() cellsize = 14;

  cellsizeSliderChange(val:number){
    console.log("here we are changing the cell size"+val);
  }
}
