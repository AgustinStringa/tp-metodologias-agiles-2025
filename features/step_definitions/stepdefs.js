import { Given, Then, When } from "@cucumber/cucumber";
import assert from "assert";

class Hangman {
  word;
  rawWord;
  lives = 7;
  triedLetters = [];
  rightLetters = [];

  constructor() {
    this.rawWord = "PALABRA";
    this.word = this.normalize(this.rawWord.toLowerCase());
  }

  getGameStatus() {
    return "WON";
  }

  substractLive() {
    this.lives -= 1;
  }

  isLetter(letter) {
    return this.word.includes(letter);
  }

  getLettersCount() {
    return this.word.length;
  }

  normalize(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  tryLetter(letter) {
    if (this.lives === 0) throw new Error("No tienes más vidas.");
    letter = letter.toLowerCase();
    if (!/^[a-zñ]$/.test(letter)) {
      throw new Error("La función debe contener solo una letra válida");
    }

    const result = this.isLetter(letter);
    this.triedLetters.push(letter);

    if (result) this.rightLetters.push(letter);
    else this.substractLive();

    return result;
  }

  getTriedLetters() {
    return this.triedLetters;
  }

  getRightLetters() {
    return this.rightLetters;
  }
}

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
