import { Component, inject } from "@angular/core";
import { GameService } from "../../core/services/game.service";
import { GameSettings } from "../../core/interfaces/game-settings.interface";
import { Settings } from "../settings/settings";

@Component({
  selector: "app-navbar",
  imports: [Settings],
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
}
