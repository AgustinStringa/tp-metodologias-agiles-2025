import { Browser, chromium, Page } from "playwright";

const isCI = process.env["CI"] === "true";

export class Actor {
  browser!: Browser;
  page!: Page;

  async launchAppWithWord(word: string) {
    this.browser = await chromium.launch({ headless: isCI });
    const context = await this.browser.newContext();
    this.page = await context.newPage();
    await this.page.goto(`http://localhost:4200`);
  }

  async clickLetter(letter: string) {
    await this.page.click(`button#${letter}`);
  }

  async getMessage(): Promise<string> {
    return (await this.page.textContent("#game-status"))?.trim() || "";
  }

  async stop() {
    await this.browser?.close();
  }
}
