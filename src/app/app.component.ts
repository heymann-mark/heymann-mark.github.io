import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
declare function sortSetup(): any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'heymann-mark.github.io';
  constructor(){

  }
  ngAfterViewInit(){
    //sortSetup();//loads faster with this here
  }
}
