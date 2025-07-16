import { Browser, chromium, Page } from "playwright";

const isCI = process.env["CI"] === "true";

export class Actor {
  browser!: Browser;
  page!: Page;

  async launchAppWithWord(word: string) {
    this.browser = await chromium.launch({ headless: isCI });
    const context = await this.browser.newContext();
    this.page = await context.newPage();
    await this.injectInitialWord(word);
    await this.page.goto(`http://localhost:4200`);
  }

  async clickLetter(letter: string) {
    await this.page.click(`button#${letter}`);
  }

  async injectInitialWord(word: string) {
    await this.page.addInitScript((injectedWord) => {
      (window as any).INITIAL_WORD = injectedWord;
    }, word);
  }

  async getMessage(): Promise<string> {
    return (await this.page.textContent("#game-status"))?.trim() || "";
  }

  async getWordDisplay(): Promise<string> {
    const labels = this.page.locator(".word-display span");
    const count = await labels.count();
    let wordDisplay = "";

    for (let i = 0; i < count; i++) {
      const raw = await labels.nth(i).textContent();
      const content = raw?.trim().toUpperCase();
      wordDisplay += content === "" || !content ? "_" : content;
    }

    return wordDisplay;
  }

  async countHangmanParts(): Promise<number> {
    const partIds = [
      "hangman_head",
      "hangman_chest",
      "hangman_leftarm",
      "hangman_rightarm",
      "hangman_leftleg",
      "hangman_rightleg",
      "hangman_killmark",
    ];

    let count = 0;

    await this.page.waitForSelector(".hangman-svg", { timeout: 3000 });

    for (const id of partIds) {
      const el = await this.page.$(`#${id}`);
      if (el !== null) {
        count++;
      } else {
        break;
      }
    }
    return count;
  }

  async stop() {
    await this.browser?.close();
  }

  async getSolution(): Promise<string> {
    return (await this.page.textContent("#solution"))?.trim() || "";
  }
}
