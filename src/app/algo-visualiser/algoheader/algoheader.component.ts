import { Component, OnInit,AfterViewInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-algoheader',
  standalone: true,
  templateUrl: './algoheader.component.html',
  styleUrl: './algoheader.component.css',
  imports: [NgbDropdownModule, FormsModule, MatSliderModule]
})

export class AlgoheaderComponent implements OnInit{
  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  delaySliderValue = 0;
  quantitySliderValue = 0;

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

}
