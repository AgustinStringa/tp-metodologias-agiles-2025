import { Component, inject } from "@angular/core";
import { GameService } from "../../core/services/game.service";
import { GameSettings } from "../../core/interfaces/game-settings.interface";
import { HelpComponent } from "../help-dialog/help-dialog.js";
import { Settings } from "../settings/settings.js";

@Component({
  selector: "app-navbar",
  imports: [Settings, HelpComponent],
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.css",
})
export class Navbar {
  gameService = inject(GameService);
  showSettings = false;

  toggleDialog() {
    this.showSettings = !this.showSettings;
  }

  async onCloseDialog(newSettings: GameSettings | null) {
    if (newSettings !== null) await this.gameService.createHangman(newSettings);
    this.showSettings = !this.showSettings;
  }

  showHelp = false;

  showHelpDialog() {
    this.showHelp = true;
  }

  onCloseHelp() {
    this.showHelp = false;
  }
}
