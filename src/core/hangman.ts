import { Dictionary } from "./dictionary";
import { GameSettings } from "./interfaces/game-settings.interface";
import { GameStatus } from "./enums/game-status.enum";

export class Hangman {
  word: string;
  rawWord: string;
  lives = 7;
  triedLetters: string[] = [];
  rightLetters: string[] = [];

  private constructor(word: string) {
    this.rawWord = word;
    this.word = this.normalize(this.rawWord);
  }
  static async create(settings: GameSettings): Promise<Hangman> {
    const word = (
      await Dictionary.getRandomWord(settings.language, settings.difficulty)
    ).solution;
    return new Hangman(word!);
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

  isLetterInWord(letter: string) {
    return this.word.includes(letter);
  }

  getLettersCount(): number {
    return this.word.length;
  }

  normalize(text: string): string {
    return text
      .replace(/Ñ/g, "__ENIE__")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/œ/g, "oe")
      .replace(/æ/g, "ae")
      .replace(/ç/g, "c")
      .replace(/đ/g, "d")
      .replace(/__ENIE__/g, "Ñ")
      .toLowerCase();
  }

  tryLetter(letter: string) {
    const gameStatus: GameStatus = this.getGameStatus();
    if (gameStatus !== GameStatus.IN_PROGRESS) {
      if (gameStatus === GameStatus.LOST) {
        throw new Error("No tienes más vidas.");
      }
      throw new Error("El juego fue finalizado.");
    }

    letter = letter.toUpperCase();
    if (!/^[A-ZÑ]$/.test(letter)) {
      throw new Error("El caracter proporcionado no es válido.");
    }

    if (this.triedLetters.includes(letter)) {
      throw new Error("La letra fue ingresada previamente.");
    }

    const result = this.isLetterInWord(letter);
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

  getWrongLetters(): string[] {
    return this.triedLetters.filter(
      (letter) => !this.rightLetters.includes(letter)
    );
  }

  getAnswer(): string {
    if (this.getGameStatus() === GameStatus.IN_PROGRESS)
      throw new Error("El juego está en curso.");

    return this.rawWord;
  }
}
