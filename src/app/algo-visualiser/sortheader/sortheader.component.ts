import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sortheader',
  standalone: true,
  imports: [FormsModule,NgbDropdownModule],
  templateUrl: './sortheader.component.html',
  styleUrl: './sortheader.component.css'
})
export class SortheaderComponent {
@Input() speed = 500;
@Input() quantity = 100;
@Input() cellsize = 14;
}
