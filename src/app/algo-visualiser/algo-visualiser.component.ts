import { Component, Input } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-algo-visualiser',
  standalone: true,
  imports: [NgbDropdownModule, NgbTooltipModule,FormsModule,NgbPopoverModule, NgbCollapseModule ],
  templateUrl: './algo-visualiser.component.html',
  styleUrl: './algo-visualiser.component.css'
})
export class AlgoVisualiserComponent {
  @Input() speed = 500;
  @Input() quantity = 100;
  @Input() array_access = 0;
  @Input() swaps = 0;
  isCollapsed = true;

}
