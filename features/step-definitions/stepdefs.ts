import { Given, Then, When } from "@cucumber/cucumber";
import assert from "assert";
import { expect } from "@playwright/test";

// hangman-game feature
Given("word is {string}", async function (word) {
  await this["actor"].launchAppWithWord(word);
});

When(
  "I press the buttons for {string}",
  async function (lettersString: string) {
    const letters = lettersString.split("");

    for (const letter of letters) {
      await this["actor"].clickLetter(letter);
    }
  }
);

Then("the message should be {string}", async function (expectedAnswer) {
  const actual = await this["actor"].getMessage();
  assert.strictEqual(actual, expectedAnswer);
});

// display-right-letters
Then("word display should look like {string}", async function (expectedAnswer) {
  const actual = await this["actor"].getWordDisplay();
  assert.strictEqual(actual, expectedAnswer);
});

// disable-tried-letter
Then("the button for {string} should look disabled", async function (letter) {
  const button = this["actor"].page.locator(`button#${letter}`);
  await expect(button).toBeDisabled();
});

// drawing-hangman
Then("I should see {string} parts of hangman", async function (count: string) {
  const countNumber = Number.parseInt(count);
  const actualBodyCount = await this["actor"].countHangmanParts();
  assert.strictEqual(actualBodyCount, countNumber);
});

// get-solution
Then(
  "I should lose the game and see the solution {string}",
  async function (solution: string) {
    const actual = await this["actor"].getSolution();
    assert.strictEqual(actual, solution);
  }
);

// difficulty-selection
Given("I open the settings dialog", async function () {
  await this["actor"].launchAppWithWord("");
  await this["actor"].page.click("#settings-btn");
});

When("I choose difficulty {string}", async function (difficulty) {
  await this["actor"].page.selectOption("#difficulty-select", difficulty);
});

When("I press save settings", async function () {
  await this["actor"].page.click("#save-settings-btn");
});

Then(
  "the game should use a word of {string} difficulty",
  async function (expectedDifficulty) {
    await this["actor"].waitForSetting("difficulty", expectedDifficulty);

    const settings = await this["actor"].getCurrentSettings();
    const actualWord = await this["actor"].getCurrentWord();

    const validWords = await this["actor"].getValidWords();

    assert.ok(
      validWords.includes(actualWord),
      `Expected word "${actualWord}" to be in ${settings.language}-${settings.difficulty}-words.json`
    );
  }
);

//language-selection
When("I choose language {string}", async function (language) {
  await this["actor"].page.selectOption("#language-select", language);
});

Then(
  "the game should use words in {string}",
  async function (expectedLanguage) {
    await this["actor"].waitForSetting("language", expectedLanguage);

    const settings = await this["actor"].getCurrentSettings();
    const actualWord = await this["actor"].getCurrentWord();

    assert.strictEqual(
      settings.language,
      expectedLanguage,
      `Expected language "${expectedLanguage}", but got "${settings.language}"`
    );

    const validWords = await this["actor"].getValidWords();

    assert.ok(
      validWords.includes(actualWord),
      `Expected word "${actualWord}" to be in ${settings.language}-${settings.difficulty}-words.json`
    );
  }
);

// play-again
When("I press the play again button", async function () {
  await this["actor"].page.click("#play-again-btn");
});

Then(
  "the buttons for {string} should not look disabled",
  async function (lettersString) {
	for(const letter of lettersString) {
		const button = this["actor"].page.locator(`button#${letter}`);
		await expect(button).toBeEnabled();
  }
});

// hangman-statistics
Then("I should see the stats {string}", async function (expectedStats: string) {
  expectedStats = expectedStats.replace(/#/g, "|");
  const statsText = await this["actor"].page.textContent(".stats-text");
  assert.ok(
    statsText?.includes(expectedStats),
    `Expected stats "${expectedStats}" but got "${statsText}"`
  );
});
