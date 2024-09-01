import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-searchHeader',
  standalone: true,
  imports: [FormsModule, NgbDropdownModule, RouterModule],
  templateUrl: './searchHeader.component.html',
  styleUrl: './searchHeader.component.css'
})
export class searchHeaderComponent {
  @Input() speed = 500;
  @Input() quantity = 100;
  @Input() cellsize = 14;

  cellsizeSliderChange(val:number){
    console.log("here we are changing the cell size"+val);
  }
}
