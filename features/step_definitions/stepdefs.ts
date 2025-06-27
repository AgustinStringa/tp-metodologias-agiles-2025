import { Given, Then, When } from "@cucumber/cucumber";
import assert from "assert";
import { Hangman } from "../../src/core/hangman";

Given("word is {string}", function (word) {
  this["hangman"] = new Hangman();
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
