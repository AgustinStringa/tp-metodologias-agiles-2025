import { Hangman } from "../src/hangman";
let hangman: Hangman;
beforeEach(() => {
  hangman = new Hangman();
});

test("al iniciar el juego la cantidad de 'vidas' debe ser 7", () => {
  expect(hangman.lives).toBe(7);
});
