import { Component, inject, OnInit } from "@angular/core";
import { GameService } from "../core/services/game.service";
import { HangmanDrawingComponent } from "./hangman-drawing/hangman-drawing";
import { KeyboardComponent } from "./keyboard/keyboard";
import { Navbar } from "./navbar/navbar";
import { WordDisplayComponent } from "./word-display/word-display";

@Component({
  selector: "app-root",
  imports: [
    HangmanDrawingComponent,
    KeyboardComponent,
    WordDisplayComponent,
    Navbar,
  ],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App implements OnInit {
  protected title = "tp-metodologias-agiles-2025";
  readonly gameService = inject(GameService);

  gameReady = false;

  async ngOnInit() {
    await this.gameService.createHangman();
    this.gameReady = true;
  }
}
