import { Actor } from "@cucumber/screenplay";
import { Browser, chromium } from "playwright";

const isCI = process.env.CI === "true";

export class User extends Actor {
  browser!: Browser;
}

export class UserCast {
  async prepare(actor: User) {
    actor.browser = await chromium.launch({ headless: isCI });
    return actor;
  }
}
