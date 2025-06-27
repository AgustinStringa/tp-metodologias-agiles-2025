import { Dictionary } from "./dictionary";

enum GameStatus {
  IN_PROGRESS = "IN PROGRESS",
  WON = "WON",
  LOST = "LOST",
}

export class Hangman {
  word: string;
  rawWord: string;
  lives = 7;
  triedLetters: string[] = [];
  rightLetters: string[] = [];

  constructor() {
    this.rawWord = Dictionary.getRandomWord().solution;
    this.word = this.normalize(this.rawWord.toLowerCase());
  }

  substractLive() {
    this.lives -= 1;
  }

  getGameStatus(): GameStatus {
    if (this.lives === 0) return GameStatus.LOST;

    const won = Array.from(this.word).every((l) =>
      this.rightLetters.includes(l)
    );

    if (won) return GameStatus.WON;
    return GameStatus.IN_PROGRESS;
  }

  isLetter(letter: string) {
    return this.word.includes(letter);
  }

  getLettersCount(): number {
    return this.word.length;
  }

  normalize(text: string): string {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  tryLetter(letter: string) {
    const gameStatus: GameStatus = this.getGameStatus();
    if (gameStatus !== GameStatus.IN_PROGRESS) {
      if (gameStatus === GameStatus.LOST) {
        throw new Error("No tienes más vidas.");
      }
      throw new Error("El juego fue finalizado.");
    }

    letter = letter.toLowerCase();
    if (!/^[a-zñ]$/.test(letter)) {
      throw new Error("El caracter proporcionado no es válido.");
    }

    if (this.triedLetters.includes(letter)) {
      throw new Error("La letra fue ingresada previamente.");
    }

    const result = this.isLetter(letter);
    this.triedLetters.push(letter);

    if (result) this.rightLetters.push(letter);
    else this.substractLive();

    return result;
  }

  getTriedLetters() {
    return this.triedLetters;
  }

  getRightLetters() {
    return this.rightLetters;
  }
}
