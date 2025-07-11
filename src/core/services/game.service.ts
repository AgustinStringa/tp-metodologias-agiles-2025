import { Hangman } from "../hangman";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class GameService {
  private initialWord: string | null = null;

  setInitialWord(word: string) {
    this.initialWord = word;
  }

  createHangman(): Hangman {
    const game = new Hangman();
    if (this.initialWord) {
      game.word = this.initialWord;
    } else if (typeof window !== "undefined" && window.INITIAL_WORD) {
      game.word = window.INITIAL_WORD;
    }
    return game;
  }
}
