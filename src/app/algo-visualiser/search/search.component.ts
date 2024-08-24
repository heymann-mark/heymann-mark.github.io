import { Component, Input, OnInit } from '@angular/core';
import { SearchheaderComponent} from '../searchheader/searchheader.component';

declare function chooseMethod(num: number): any;
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SearchheaderComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent  implements OnInit{
  ngOnInit(){
    ///chooseMethod(3);
  }
}
