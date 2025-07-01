import { Component, Input } from "@angular/core";

@Component({
  selector: "app-hangman-drawing",
  templateUrl: "./hangman-drawing.html",
  styleUrls: ["./hangman-drawing.css"],
})
export class HangmanDrawingComponent {
  @Input() fails = 0;
}
