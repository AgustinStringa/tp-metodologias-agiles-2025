import { Given, Then, When } from "@cucumber/cucumber";
import assert from "assert";
import { Hangman } from "../../src/core/hangman";

Given("word is {string}", function (word) {
  this["hangman"] = new Hangman();
  this["hangman"]["word"] = word;
});

When(
  "I try {string}, {string}, {string}, {string}",
  function (fistLetter, secondLetter, thirdLetter, fourthLetter) {
    this["hangman"].tryLetter(fistLetter);
    this["hangman"].tryLetter(secondLetter);
    this["hangman"].tryLetter(thirdLetter);
    this["hangman"].tryLetter(fourthLetter);
  }
);

Then("I should see {string}", function (expectedAnswer) {
  this["actualAnswer"] = this["hangman"].getGameStatus();
  assert.strictEqual(this["actualAnswer"], expectedAnswer);
});
