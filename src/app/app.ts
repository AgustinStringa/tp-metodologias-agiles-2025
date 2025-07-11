import { Component } from "@angular/core";
import { GameService } from "../core/services/game.service";
import { Hangman } from "../core/hangman";
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
  errorsCount = 0;
  hangman: Hangman;
  triedLetters: string[] = [];
  rightLetters: string[] = [];

  constructor(private gameService: GameService) {
    this.hangman = this.gameService.createHangman();
  }

  onKey(letter: string) {
    const result = this.hangman.tryLetter(letter);
    if (!result) this.errorsCount++;
    this.rightLetters = this.hangman.getRightLetters();
    this.triedLetters = this.hangman.getTriedLetters();
  }
}
