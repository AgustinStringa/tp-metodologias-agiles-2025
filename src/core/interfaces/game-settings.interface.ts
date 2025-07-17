import { Difficulty } from "../types/difficulty.type";
import { Language } from "../types/language.type";

export interface GameSettings {
  language: Language;
  difficulty: Difficulty;
}
