import { Hangman } from "../src/hangman";
let hangman: Hangman;
beforeEach(() => {
  hangman = new Hangman();
});

test("Al iniciar el juego tiene que haber una palabra a la cual adivinar", () => {
  expect(hangman.word).not.toBeFalsy();
});

test("la palabra a adivinar debe ser de tipo string", () => {
  expect(typeof hangman.word).toBe("string");
});

test("la palabra a adivinar debe ser distinta de  '' ", () => {
  expect(hangman.word).not.toBe("");
});
