import { Hangman } from "../hangman";

let hangman: Hangman;
beforeEach(() => {
  hangman = new Hangman();
});

describe("conocer las letras ya intentadas", () => {
  test("al intentar la letra 'A' getTriedLetters() debe devolver ['A']", () => {
    const letter = "A";
    hangman.tryLetter(letter);
    expect(hangman.getTriedLetters()).toEqual(["A"]);
  });

  test("al intentar la letra 'B' getTriedLetters() debe devolver ['B']", () => {
    const letter = "B";
    hangman.tryLetter(letter);
    expect(hangman.getTriedLetters()).toEqual(["B"]);
  });

  test("al intentar las letras 'A' y luego 'B', getTriedLetters() debe devolver ['A', 'B']", () => {
    hangman.tryLetter("A");
    hangman.tryLetter("B");
    expect(hangman.getTriedLetters()).toEqual(["A", "B"]);
  });
});

describe("mostrar las letras que acerté", () => {
  test("si la palabra es 'VACA', al intentar la letra 'A' getRightLetters() debe devolver ['A'] ", () => {
    hangman.word = "VACA";
    hangman.tryLetter("A");
    expect(hangman.getRightLetters()).toEqual(["A"]);
  });

  test("si la palabra es 'cobre', al intentar la letra 'a' getRightLetters() debe devolver [] ", () => {
    hangman.word = "COBRE";
    hangman.tryLetter("A");
    expect(hangman.getRightLetters()).toEqual([]);
  });

  test("si la palabra es 'TERODACTILO', al intentar la letra 'A', seguida de 'T' getRightLetters() debe devolver ['A', 'T'] ", () => {
    hangman.word = "TERODACTILO";
    hangman.tryLetter("A");
    hangman.tryLetter("T");
    expect(hangman.getRightLetters()).toEqual(["A", "T"]);
  });
});

describe("ver letradas intentadas incorrectas", () => {
  test("al iniciar el juego la función getWrongLetters() debe retornar []", () => {
    expect(hangman.getWrongLetters()).toEqual([]);
  });

  test('si la palabra es "AUTO" e intento "P", la función getWrongLetters(), debería retornar ["P"]', () => {
    hangman.word = "AUTO";
    hangman.tryLetter("P");
    expect(hangman.getWrongLetters()).toEqual(["P"]);
  });

  test('si la palabra es "AUTO" e intento "P", "A", la función getWrongLetters(), debería retornar ["P"]', () => {
    hangman.word = "AUTO";
    hangman.tryLetter("P");
    hangman.tryLetter("A");
    expect(hangman.getWrongLetters()).toEqual(["P"]);
  });

  test('si la palabra es "AUTO" e intento "U", "A", la función getWrongLetters(), debería retornar []', () => {
    hangman.word = "AUTO";
    hangman.tryLetter("U");
    hangman.tryLetter("A");
    expect(hangman.getWrongLetters()).toEqual([]);
  });
});
