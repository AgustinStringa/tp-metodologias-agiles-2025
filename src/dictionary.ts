import { words } from "../resources/words";
export class Dictionary {
  static getRandomWord(): { id: number; solution: string } {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
}
