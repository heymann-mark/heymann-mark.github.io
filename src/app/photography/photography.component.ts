import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css'
})
export class PhotographyComponent {
  constructor(private route : ActivatedRoute){}
}
