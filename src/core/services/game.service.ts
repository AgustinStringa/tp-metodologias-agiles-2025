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
    } else if (typeof window !== "undefined" && (window as any).INITIAL_WORD) {
      game.word = (window as any).INITIAL_WORD;
    }
    return game;
  }
}
