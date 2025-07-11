import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-keyboard",
  templateUrl: "./keyboard.html",
  styleUrls: ["./keyboard.css"],
  imports: [NgClass],
})
export class KeyboardComponent {
  keyRows: string[][] = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  @Input({ required: true }) triedLetters!: string[];
  @Input({ required: true }) rightLetters!: string[];
  @Output() keyPressed = new EventEmitter<string>();

  pressKey(key: string) {
    this.keyPressed.emit(key);
  }

  isRight(key: string): boolean {
    return this.rightLetters.includes(key);
  }

  isWrong(key: string): boolean {
    return this.triedLetters.includes(key) && !this.rightLetters.includes(key);
  }

  isTried(key: string): boolean {
    return this.triedLetters.includes(key);
  }
}
