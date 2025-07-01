import { Given, Then, When } from "@cucumber/cucumber";
import assert from "assert";
import { Hangman } from "../../src/core/hangman";

Given("word is {string}", function (word) {
  this["hangman"] = new Hangman();
  this["hangman"]["word"] = word;
});

Given("word with UI is {string}", async function (word) {
  await this["actor"].launchAppWithWord(word);
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
