
import { CommonModule } from '@angular/common';
import { Component,  EventEmitter,  Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() name = ""

  word:string = "Hello";

  @Output() userClicked = new EventEmitter<string>();

  onUserClicked() {
    this.userClicked.emit("I Never Quit");
    this.word = "alert";
  }

  
}
