import { Dictionary } from "./dictionary";

export class Hangman {
  word: string;
  rawWord: string;
  lives = 7;

  constructor() {
    this.rawWord = Dictionary.getRandomWord().solution;
    this.word = this.normalize(this.rawWord.toLowerCase());
  }
  substractLive() {
    this.lives -= 1;
  }

  isLetter(letter: string) {
    return this.word.includes(letter);
  }

  getLettersCount(): number {
    return this.rawWord.length;
  }

  normalize(text: string): string {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  tryLetter(letter: string) {
    if (this.lives === 0) throw new Error("No tienes más vidas.");
    letter = letter.toLowerCase();
    if (!/^[a-zñ]$/.test(letter)) {
      throw new Error("La función debe contener solo una letra válida");
    }

    const result = this.isLetter(letter);

    if (!result) this.substractLive();
    return result;
  }
}
