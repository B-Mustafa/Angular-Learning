import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-joke',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
 jokes = [
    {
      subject : 'Why don\'t scientists trust atoms?',
      punchline : 'Because they make up everything!',
      hide:true
    },
    {
      subject: 'My wife told me to stop impersonating a flamingo',
      punchline: 'I had to put my foot down',
      hide: true
    },
    {
      subject: 'I heard there were a bunch of break-ins over at the car park',
      punchline: 'That is wrong on so many levels.',
      hide: true
    },
    {
      subject: 'When life gives you melons',
      punchline: 'you might be dyslexic',
      hide: true
    },
  ]

  currentJoke = this.jokes[0];

  togglePunchline() {
    this.currentJoke.hide = !this.currentJoke.hide;
  }

  getNewJoke() {
    const randomIndex = Math.floor(Math.random() * this.jokes.length);
    this.currentJoke = this.jokes[randomIndex];
    this.currentJoke.hide = true; 
  }
}
