import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-keyboard",
  templateUrl: "./keyboard.html",
  styleUrls: ["./keyboard.css"],
})
export class KeyboardComponent {
  keyRows: string[][] = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  @Output() keyPressed = new EventEmitter<string>();

  pressKey(key: string) {
    this.keyPressed.emit(key);
  }
}
