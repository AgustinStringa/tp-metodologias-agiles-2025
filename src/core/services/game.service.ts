import { BehaviorSubject } from "rxjs";
import { GameSettings } from "../interfaces/game-settings.interface";
import { Hangman } from "../hangman";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class GameService {
  settings?: GameSettings;
  hangman?: Hangman;
  errorsCount = 0;

  private initialWord: string | null = null;

  private triedLetters$ = new BehaviorSubject<string[]>([]);
  private rightLetters$ = new BehaviorSubject<string[]>([]);
  private word$ = new BehaviorSubject<string>("");
  private errorsCount$ = new BehaviorSubject<number>(0);

  async createHangman(
    settings: GameSettings = { language: "spanish", difficulty: "medium" }
  ): Promise<void> {
    this.hangman = await Hangman.create(settings);
    this.settings = settings;

    if (typeof window !== "undefined") {
      window.CURRENT_SETTINGS = settings;
    }

    if (this.initialWord) {
      this.hangman.word = this.initialWord;
    } else if (typeof window !== "undefined" && window.INITIAL_WORD) {
      this.hangman.word = window.INITIAL_WORD;
    }
    this.rightLetters$.next(this.hangman.getRightLetters());
    this.triedLetters$.next(this.hangman.getTriedLetters());
    this.word$.next(this.hangman.word);
    this.errorsCount = 0;
    this.errorsCount$.next(this.errorsCount);
  }

  addOneError() {
    this.errorsCount++;
    this.errorsCount$.next(this.errorsCount);
  }

  getTriedLettersObservable() {
    return this.triedLetters$.asObservable();
  }

  getRightLettersObservable() {
    return this.rightLetters$.asObservable();
  }

  getWordObservable() {
    return this.word$.asObservable();
  }

  getErrorCountObservable() {
    return this.errorsCount$.asObservable();
  }
}
