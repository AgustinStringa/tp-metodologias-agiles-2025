import { chromium } from "playwright";

const isCI = process.env.CI === "true";

export const LaunchGameWithWord = {
  named: (word: string) => ({
    async performAs(actor) {
      const browser = await chromium.launch({ headless: isCI });
      const context = await browser.newContext();
      const page = await context.newPage();

      await page.goto(`http://localhost:4200`);
      actor["page"] = page;
    },
  }),
};
