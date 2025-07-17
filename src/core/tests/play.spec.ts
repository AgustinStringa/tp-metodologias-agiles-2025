import { Hangman } from "../hangman";
let hangman: Hangman;
beforeEach(async () => {
  hangman = await Hangman.create({ language: "spanish", difficulty: "easy" });
});

test("al iniciar el juego la cantidad de 'vidas' debe ser 7", () => {
  expect(hangman.lives).toBe(7);
});
