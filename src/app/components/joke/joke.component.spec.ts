import { Component } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  jokes = [
    {
      setup: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!"
    },
    {
      setup: "Did you hear about the mathematician who's afraid of negative numbers?",
      punchline: "He'll stop at nothing to avoid them!"
    },
    // Add more jokes here
  ];
  currentJokeIndex = 0;
  revealPunchline = false;

  get currentJoke() {
    return this.jokes[this.currentJokeIndex];
  }

  togglePunchline() {
    this.revealPunchline = !this.revealPunchline;
  }

}