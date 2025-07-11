import { Component, Input } from "@angular/core";

@Component({
  selector: "app-word-display",
  templateUrl: "./word-display.html",
  styleUrls: ["./word-display.css"],
})
export class WordDisplayComponent {
  @Input() word!: string;
  @Input() guessedLetters: string[] = [];
}
