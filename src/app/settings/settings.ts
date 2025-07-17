import { Component, EventEmitter, inject, OnInit, Output } from "@angular/core";
import { Difficulty } from "../../core/types/difficulty.type";
import { FormsModule } from "@angular/forms";
import { GameService } from "../../core/services/game.service";
import { GameSettings } from "../../core/interfaces/game-settings.interface";
import { Language } from "../../core/types/language.type";

@Component({
  selector: "app-settings",
  imports: [FormsModule],
  templateUrl: "./settings.html",
  styleUrl: "./settings.css",
})
export class Settings implements OnInit {
  @Output() closeDialog = new EventEmitter<GameSettings | null>();
  selectedDifficulty = "medium";
  selectedLanguage = "spanish";
  readonly gameService = inject(GameService);

  onClose() {
    this.closeDialog.emit(null);
  }

  ngOnInit(): void {
    this.selectedDifficulty =
      this.gameService.settings?.difficulty || this.selectedDifficulty;
    this.selectedLanguage =
      this.gameService.settings?.language || this.selectedLanguage;
  }

  save() {
    this.closeDialog.emit({
      language: this.selectedLanguage as Language,
      difficulty: this.selectedDifficulty as Difficulty,
    });
  }
}
