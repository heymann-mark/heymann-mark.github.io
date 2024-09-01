import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sortHeader',
  standalone: true,
  imports: [FormsModule,NgbDropdownModule,RouterModule],
  templateUrl: './sortHeader.component.html',
  styleUrl: './sortHeader.component.css'
})
export class sortHeaderComponent {
@Input() speed = 100;
@Input() quantity = 100;
}
