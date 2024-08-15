import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-algo-visualiser',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './algo-visualiser.component.html',
  styleUrl: './algo-visualiser.component.css'
})
export class AlgoVisualiserComponent {
  doubleSlider = [1000, 5000];
  simpleSlider = 3000;
}
