import { Component, inject, OnInit } from "@angular/core";
import { GameService } from "../../core/services/game.service";

@Component({
  selector: "app-word-display",
  templateUrl: "./word-display.html",
  styleUrls: ["./word-display.css"],
})
export class WordDisplayComponent implements OnInit {
  gameService = inject(GameService);
  guessedLetters: string[] = [];
  word = "";

  ngOnInit() {
    this.gameService.getRightLettersObservable().subscribe((letters) => {
      this.guessedLetters = letters;
    });
    this.gameService.getWordObservable().subscribe((word) => {
      this.word = word;
    });
  }
}
