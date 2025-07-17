import { Hangman } from "../hangman";

let hangman: Hangman;

beforeEach(async () => {
  hangman = await Hangman.create({ language: "spanish", difficulty: "easy" });
});

describe("Transiciones del estado del juego", () => {
  test('Si la palabra es "AUTO", intento A, U, T, O, el estado del juego debe ser "WON"', () => {
    hangman.word = "AUTO";

    hangman.tryLetter("A");
    hangman.tryLetter("U");
    hangman.tryLetter("T");
    hangman.tryLetter("O");

    const gameStatus = hangman.getGameStatus();
    const expectedGameStatus = "WON";
    expect(gameStatus).toEqual(expectedGameStatus);
  });

  test('Si la palabra es "AUTO", intento J, K, L, M, N, Z, H el estado del juego debe ser "LOST"', () => {
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

  test('Si la palabra es "AUTO", intento T, A el estado del juego debe ser "IN PROGRESS"', () => {
    hangman.word = "AUTO";
    hangman.tryLetter("T");
    hangman.tryLetter("A");

    const gameStatus = hangman.getGameStatus();
    const expectedGameStatus = "IN PROGRESS";
    expect(gameStatus).toEqual(expectedGameStatus);
  });

  test('Si la palabra es "CARRO", intento C, A, R, O, el estado del juego debe ser "WON"', () => {
    hangman.word = "CARRO";

    hangman.tryLetter("C");
    hangman.tryLetter("A");
    hangman.tryLetter("R");
    hangman.tryLetter("O");

    const gameStatus = hangman.getGameStatus();
    const expectedGameStatus = "WON";
    expect(gameStatus).toEqual(expectedGameStatus);
  });
});

test('Si la palabra es "PEZ", intento P, E, Z y luego A, tryLetter() debería lanzar un error.', () => {
  expect(() => {
    hangman.word = "PEZ";

    hangman.tryLetter("P");
    hangman.tryLetter("E");
    hangman.tryLetter("Z");
    hangman.tryLetter("A");
  }).toThrow("El juego fue finalizado.");
});

describe("Ver mensaje de derrota de juego", () => {
  test('Si la palabra es "AUTO" y pierdo todas mis vidas, getAnswer() debería retornar "AUTO"', () => {
    hangman.word = "AUTO";
    hangman.lives = 0;
    const actualAnswer = hangman.getAnswer();
    expect(actualAnswer).toBe(hangman.word);
  });

  test('Si la palabra es "COLZA" y pierdo todas mis vidas, getAnswer() debería retornar "COLZA"', () => {
    hangman.word = "COLZA";
    hangman.lives = 0;
    const actualAnswer = hangman.getAnswer();
    expect(actualAnswer).toBe(hangman.word);
  });

  test("Si el juego está en curso, getAnswer() debería lanzar un error", () => {
    expect(() => {
      hangman.getAnswer();
    }).toThrow("El juego está en curso.");
  });
});
