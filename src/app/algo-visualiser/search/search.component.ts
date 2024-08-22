import { Component } from '@angular/core';
import { SearchheaderComponent} from '../searchheader/searchheader.component';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SearchheaderComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
