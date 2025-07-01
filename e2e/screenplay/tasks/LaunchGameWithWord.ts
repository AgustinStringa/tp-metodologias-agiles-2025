import { Task } from '@cucumber/screenplay';
import { Page, chromium } from 'playwright';

export const LaunchGameWithWord = {
  named: (word: string): Task => ({
    async performAs(actor) {
      const browser = await chromium.launch({ headless: false });
      const context = await browser.newContext();
      const page = await context.newPage();

      await page.goto(`http://localhost:4200`);
      actor['page'] = page;
    }
  })
};