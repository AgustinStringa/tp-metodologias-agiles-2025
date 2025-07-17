import { Component, inject, OnInit } from "@angular/core";
import { GameService } from "../../core/services/game.service";

@Component({
  selector: "app-hangman-drawing",
  templateUrl: "./hangman-drawing.html",
  styleUrls: ["./hangman-drawing.css"],
})
export class HangmanDrawingComponent implements OnInit {
  gameService = inject(GameService);
  errorsCount = 0;

  ngOnInit() {
    this.gameService
      .getErrorCountObservable()
      .subscribe((errorsCount) => (this.errorsCount = errorsCount));
  }
}
