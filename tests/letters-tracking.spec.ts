import { Hangman } from "../src/hangman";

let hangman: Hangman;
beforeEach(() => {
  hangman = new Hangman();
});

describe("conocer las letras ya intentadas", () => {
  test("al intentar la letra 'a' getTriedLetters() debe devolver ['a']", () => {
    const letter = "a";
    hangman.tryLetter(letter);
    expect(hangman.getTriedLetters()).toEqual(["a"]);
  });

  test("al intentar la letra 'b' getTriedLetters() debe devolver ['b']", () => {
    const letter = "b";
    hangman.tryLetter(letter);
    expect(hangman.getTriedLetters()).toEqual(["b"]);
  });

  test("al intentar las letras 'a' y luego 'b', getTriedLetters() debe devolver ['a', 'b']", () => {
    hangman.tryLetter("a");
    hangman.tryLetter("b");
    expect(hangman.getTriedLetters()).toEqual(["a", "b"]);
  });
});
