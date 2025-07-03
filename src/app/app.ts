import { Component } from "@angular/core";
import { HangmanDrawingComponent } from "./hangman-drawing/hangman-drawing";
import { KeyboardComponent } from "./keyboard/keyboard";
import { RouterOutlet } from "@angular/router";
import { WordDisplayComponent } from "./word-display/word-display";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    HangmanDrawingComponent,
    KeyboardComponent,
    WordDisplayComponent,
  ],
  templateUrl: "./app.html",
})
export class App {
  protected title = "tp-metodologias-agiles-2025";
  pressedKey = "";
  numeroDeErrores = 0;

  onKey(letter: string) {
    this.pressedKey = letter;
  }
}
