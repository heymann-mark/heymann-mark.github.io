import { Component } from '@angular/core';
import {AlgoheaderComponent} from './algoheader/algoheader.component';
import {BubbleComponent} from './pages/bubble/bubble.component';

@Component({
  selector: 'app-algo-visualiser',
  standalone: true,
  imports: [AlgoheaderComponent,BubbleComponent],
  templateUrl: './algo-visualiser.component.html',
  styleUrl: './algo-visualiser.component.css'
})
export class AlgoVisualiserComponent {

}
