import { Question } from '@cucumber/screenplay';
import { expect } from '@playwright/test';
import { Page } from 'playwright';

export const MessageShouldBe = {
  equalTo: (expected: string): Question => ({
    async answeredBy(actor) {
      const page: Page = actor['page'];
      const message = await page.textContent('#message');
      expect(message?.trim()).toBe(expected);
      return true;
    }
  })
};
