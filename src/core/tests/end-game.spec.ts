import { Hangman } from "../hangman";

let hangman: Hangman;

beforeEach(() => {
  hangman = new Hangman();
});

test('Si la palabra es AUTO, intento A, U, T, O, el estado del juego debe ser "WON"', () => {
  hangman.word = "AUTO";
  hangman.tryLetter("A");
  hangman.tryLetter("U");
  hangman.tryLetter("T");
  hangman.tryLetter("O");

  const gameStatus = hangman.getGameStatus();
  const expectedGameStatus = "WON";
  expect(gameStatus).toEqual(expectedGameStatus);
});

test('Si la palabra es AUTO, intento J, K, L, M, N, Z, H el estado del juego debe ser "LOST"', () => {
  hangman.word = "AUTO";
  hangman.tryLetter("J");
  hangman.tryLetter("K");
  hangman.tryLetter("L");
  hangman.tryLetter("M");
  hangman.tryLetter("N");
  hangman.tryLetter("Z");
  hangman.tryLetter("H");

  const gameStatus = hangman.getGameStatus();
  const expectedGameStatus = "LOST";
  expect(gameStatus).toEqual(expectedGameStatus);
});
