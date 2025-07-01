import { Actor, Cast } from '@cucumber/screenplay';
import { Browser, chromium } from 'playwright';

export class User extends Actor {
  browser!: Browser;
}

export class UserCast implements Cast {
  async prepare(actor: User) {
    actor.browser = await chromium.launch({ headless: false });
    return actor;
  }
}
