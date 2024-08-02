import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  //templateUrl: './app.component.html',
  template:`<app-user />`,

  //styleUrl: './app.component.css'
  styles: `
    :host {
      color: blue;
    }
  `,
})
export class AppComponent {
  title = 'heymann-mark.github.io';
  city = 'San Francisco';
}
