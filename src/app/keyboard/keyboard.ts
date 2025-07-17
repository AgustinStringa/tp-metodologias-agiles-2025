import { Component, inject, OnInit } from "@angular/core";
import { GameService } from "../../core/services/game.service";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-keyboard",
  templateUrl: "./keyboard.html",
  styleUrls: ["./keyboard.css"],
  imports: [NgClass],
})
export class KeyboardComponent implements OnInit {
  readonly gameService = inject(GameService);
  triedLetters: string[] = [];
  rightLetters: string[] = [];

  keyRows: string[][] = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  ngOnInit() {
    this.gameService.getTriedLettersObservable().subscribe((letters) => {
      this.triedLetters = letters;
    });

    this.gameService.getRightLettersObservable().subscribe((letters) => {
      this.rightLetters = letters;
    });
  }

  pressKey(key: string) {
    if (!this.gameService.hangman) return;

    const result = this.gameService.hangman.tryLetter(key);
    if (!result) {
      this.gameService.addOneError()
    }
    this.rightLetters = this.gameService.hangman.getRightLetters();
    this.triedLetters = this.gameService.hangman.getTriedLetters();
  }

  isRight(key: string): boolean {
    return this.rightLetters.includes(key);
  }

  isWrong(key: string): boolean {
    return this.triedLetters.includes(key) && !this.rightLetters.includes(key);
  }

  isTried(key: string): boolean {
    return this.triedLetters.includes(key);
  }
}
