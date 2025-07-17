import { Given, Then, When } from "@cucumber/cucumber";
import assert from "assert";
import { expect } from "@playwright/test";
import { Hangman } from "../../src/core/hangman";

// hangman-game feature
Given("word is {string}", async function (word) {
  this["hangman"] = await Hangman.create({
    language: "spanish",
    difficulty: "easy",
  });
  this["hangman"]["word"] = word;
});

When("I try {string}", function (lettersString: string) {
  const letters = lettersString.split("");

  letters.forEach((letter: string) => {
    this["hangman"].tryLetter(letter);
  });
});

Then("I should see {string}", function (expectedAnswer) {
  this["actualAnswer"] = this["hangman"].getGameStatus();
  assert.strictEqual(this["actualAnswer"], expectedAnswer);
});

// hangman-game-ui feature
Given("word with UI is {string}", async function (word) {
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
  // me aseguro de que haya tiempo para que se rendericen las letras
  await this["actor"].page.waitForFunction(
    () => {
      const spans = document.querySelectorAll(".word-display span");
      let result = "";
      spans.forEach((span) => {
        const content = span.textContent?.trim();
        result += content === "" ? "_" : content;
      });
      return result;
    },
    { timeout: 7000 }
  );

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

// get-current-difficulty

Given("I open the settings dialog", async function () {
  await this["actor"].launchAppWithWord("");
  await this["actor"].page.click("#settings-btn");
});

When("I choose difficulty {string}", async function (difficulty) {
  await this["actor"].page.selectOption("#dificultad", difficulty);
});

When("I press save settings", async function () {
  await this["actor"].page.click("button.btn-primary");
});

Then(
  "the game should use a word of {string} difficulty",
  async function (expectedDifficulty) {
    await this["actor"].page.waitForFunction(
      (expected: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (window as any).CURRENT_SETTINGS?.difficulty === expected;
      },
      expectedDifficulty,
      { timeout: 3000 }
    );

    const settings = await this["actor"].getCurrentSettings();
    const actualWord = await this["actor"].getCurrentWord();

    const wordsData = await import(
      `../../src/core/resources/${settings.language}-${settings.difficulty}-words.json`
    );

    const validWords = wordsData.default.map((entry: { solution: string }) =>
      entry.solution
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
    );

    assert.ok(
      validWords.includes(actualWord),
      `Expected word "${actualWord}" to be in ${settings.language}-${settings.difficulty}-words.json`
    );
  }
);

//language-selection

When("I choose language {string}", async function (language) {
  await this["actor"].page.selectOption("#idioma", language);
});

Then(
  "the game should use words in {string}",
  async function (expectedLanguage) {
    await this["actor"].page.waitForFunction(
      (expected: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (window as any).CURRENT_SETTINGS?.language === expected;
      },
      expectedLanguage,
      { timeout: 3000 }
    );

    const settings = await this["actor"].getCurrentSettings();
    const actualWord = await this["actor"].getCurrentWord();

    assert.strictEqual(
      settings.language,
      expectedLanguage,
      `Expected language "${expectedLanguage}", but got "${settings.language}"`
    );

    const wordsData = await import(
      `../../src/core/resources/${settings.language}-${settings.difficulty}-words.json`
    );

    const validWords = wordsData.default.map((entry: { solution: string }) =>
      entry.solution
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
    );

    assert.ok(
      validWords.includes(actualWord),
      `Expected word "${actualWord}" to be in ${settings.language}-${settings.difficulty}-words.json`
    );
  }
);
