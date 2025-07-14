import { setWorldConstructor, Before, IWorldOptions } from "@cucumber/cucumber";
import { Actor } from "./actor";

export class CustomWorld {
  actor: Actor;

  constructor(options: IWorldOptions) {
    this.actor = new Actor();
  }
}

setWorldConstructor(CustomWorld);
