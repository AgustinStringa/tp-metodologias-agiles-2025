import { Task } from '@cucumber/screenplay';
import { Page } from 'playwright';

export const PressLetters = {
  of: (letters: string[]): Task => ({
    async performAs(actor) {
      const page: Page = actor['page'];
      for (const letter of letters) {
        await page.click(`button:text-is("${letter}")`);
      }
    }
  })
};