import { Hangman } from "../hangman";

let hangman: Hangman;

beforeEach(() => {
  hangman = new Hangman();
});

describe("Transiciones del estado del juego", () => {
  test('Si la palabra es "auto", intento A, U, T, O, el estado del juego debe ser "WON"', () => {
    hangman.word = "auto";

    hangman.tryLetter("A");
    hangman.tryLetter("U");
    hangman.tryLetter("T");
    hangman.tryLetter("O");

    const gameStatus = hangman.getGameStatus();
    const expectedGameStatus = "WON";
    expect(gameStatus).toEqual(expectedGameStatus);
  });

  test('Si la palabra es "auto", intento J, K, L, M, N, Z, H el estado del juego debe ser "LOST"', () => {
    hangman.word = "auto";
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

  test('Si la palabra es "auto", intento T, A el estado del juego debe ser "IN PROGRESS"', () => {
    hangman.word = "auto";
    hangman.tryLetter("T");
    hangman.tryLetter("A");

    const gameStatus = hangman.getGameStatus();
    const expectedGameStatus = "IN PROGRESS";
    expect(gameStatus).toEqual(expectedGameStatus);
  });

  test('Si la palabra es "carro", intento C, A, R, O, el estado del juego debe ser "WON"', () => {
    hangman.word = "carro";

    hangman.tryLetter("C");
    hangman.tryLetter("A");
    hangman.tryLetter("R");
    hangman.tryLetter("O");

    const gameStatus = hangman.getGameStatus();
    const expectedGameStatus = "WON";
    expect(gameStatus).toEqual(expectedGameStatus);
  });
});

test('Si la palabra es "pez", intento P, E, Z y luego A, tryLetter() debería lanzar un error.', () => {
  expect(() => {
    hangman.word = "pez";

    hangman.tryLetter("P");
    hangman.tryLetter("E");
    hangman.tryLetter("Z");
    hangman.tryLetter("A");
  }).toThrow("El juego fue finalizado.");
});
