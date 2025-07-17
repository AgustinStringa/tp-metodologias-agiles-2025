import { Difficulty } from "./types/difficulty.type";
import { Language } from "./types/language.type";

export class Dictionary {
  private words: { id: number; solution: string }[] = [];

  async loadWords(language: Language, difficulty: Difficulty): Promise<void> {
    const data = await import(
      `./resources/${language}-${difficulty}-words.json`
    );
    this.words = data.default;
  }

  getRandomWord(): { id: number; solution: string } {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    return this.words[randomIndex];
  }
  static async getRandomWord(
    language: Language = "spanish",
    difficulty: Difficulty = "medium"
  ): Promise<{ id: number; solution: string }> {
    const dictionary = new Dictionary();
    await dictionary.loadWords(language, difficulty);
    return dictionary.getRandomWord();
  }
}
