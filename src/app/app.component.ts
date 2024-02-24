import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { JokeComponent } from './components/joke/joke.component';
import { UserComponent } from './components/user/user.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,  JokeComponent , UserComponent , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mustafa-angular-app';

  users = [
    {
      name: "Mustafa",
    },
    {
      name: "Alphonso"
    },
    {
      name: "Joseph"
    },

  ]

  recivedData(e:string){
    console.log(e);
    alert(e);
  }
 
}