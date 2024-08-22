import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

declare function chooseMethod(num: number): any;
@Component({
  selector: 'app-searchheader',
  standalone: true,
  imports: [FormsModule, NgbDropdownModule],
  templateUrl: './searchheader.component.html',
  styleUrl: './searchheader.component.css'
})
export class SearchheaderComponent implements OnInit{
  @Input() speed = 500;
  @Input() quantity = 100;
  @Input() cellsize = 14;
  ngOnInit(){
    chooseMethod(3);
  }

}
