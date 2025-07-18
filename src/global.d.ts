export {};
import type { GameSettings } from "./core/interfaces/game-settings.interface";

declare global {
  interface Window {
    INITIAL_WORD?: string;
    CURRENT_SETTINGS?: GameSettings;
    TEST_SETTINGS?: GameSettings;
  }
}
