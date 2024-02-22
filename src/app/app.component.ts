import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { JokeComponent } from './components/joke/joke.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,  JokeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mustafa-angular-app';
}
