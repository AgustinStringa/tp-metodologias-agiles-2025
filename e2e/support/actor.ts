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

  async waitForComponent(selector: string, timeout = 7000): Promise<void> {
    await this.page.locator(selector).waitFor({ state: "visible", timeout });
  }

  async getWordDisplay(expected: string): Promise<string> {
    // con el waitForFunction me aseguro de que haya tiempo para que se rendericen las letras
    await this.page.waitForFunction(
      (expect: string) => {
        const spans = document.querySelectorAll(".word-display span");
        let result = "";
        spans.forEach((span) => {
          const content = span.textContent?.trim();
          result += content === "" ? "_" : content;
        });
        return result === expect;
      },
      expected,
      { timeout: 7000 }
    );

    await this.waitForComponent(".word-display");
    const labels = this.page.locator(".word-display span");
    const count = await labels.count();
    let wordDisplay = "";

    for (let i = 0; i < count; i++) {
      const raw = await labels.nth(i).textContent();
      const content = raw?.trim();
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

  async getCurrentDifficulty(): Promise<string> {
    return await this.page.evaluate(() => {
      return (window as any).CURRENT_SETTINGS?.difficulty;
    });
  }

  async getCurrentWord(): Promise<string> {
    return await this.page.evaluate(() => {
      return (window as any).ng.getComponent(document.querySelector("app-root"))
        .gameService.hangman.word;
    });
  }

  async getCurrentSettings(): Promise<{
    language: string;
    difficulty: string;
  }> {
    return await this.page.evaluate(() => {
      return (window as any).CURRENT_SETTINGS;
    });
  }

  async stop() {
    await this.browser?.close();
  }

  async getSolution(): Promise<string> {
    return (await this.page.textContent("#solution"))?.trim() || "";
  }

  async getValidWords(): Promise<string[]> {
    const settings = await this.getCurrentSettings();
    const wordsData = await import(
      `../../src/core/resources/${settings.language}-${settings.difficulty}-words.json`
    );
    return wordsData.default.map((entry: { solution: string }) =>
      entry.solution
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
    );
  }
  async waitForSetting(
    prop: "language" | "difficulty",
    expected: string,
    timeout = 3000
  ): Promise<void> {
    await this.page.waitForFunction(
      (args: { prop: string; val: string }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (window as any).CURRENT_SETTINGS?.[args.prop] === args.val;
      },
      { prop, val: expected },
      { timeout }
    );
  }
}
