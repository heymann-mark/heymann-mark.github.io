import { AfterViewInit, Component, Input, Output } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {CdkDrag} from '@angular/cdk/drag-drop';
import {SortComponent} from './sort/sort.component'
@Component({
  selector: 'app-algo-visualiser',
  standalone: true,
  imports: [SortComponent,NgbDropdownModule, NgbTooltipModule,FormsModule,
    NgbPopoverModule, NgbCollapseModule, DragDropModule,CdkDrag ],
  templateUrl: './algo-visualiser.component.html',
  styleUrl: './algo-visualiser.component.css'
})
export class AlgoVisualiserComponent  {
  @Input() speed = 500;
  @Input() quantity = 100;
  @Input() cellsize =14;
}
