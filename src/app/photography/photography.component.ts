import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../profile/header/header.component';
@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [NgbCarouselModule,HeaderComponent],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css'
})
export class PhotographyComponent {
  constructor(private route : ActivatedRoute){}
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
