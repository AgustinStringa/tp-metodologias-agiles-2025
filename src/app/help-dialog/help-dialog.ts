import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-help-dialog",
  imports: [],
  templateUrl: "./help-dialog.html",
  styleUrl: "./help-dialog.css",
})
export class HelpComponent {
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() close = new EventEmitter<void>();

  closeHelp() {
    this.close.emit();
  }
}
