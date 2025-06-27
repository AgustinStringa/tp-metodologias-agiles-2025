import { Hangman } from "../hangman";

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

describe("mostrar las letras que acerté", () => {
  test("si la palabra es 'vaca', al intentar la letra 'a' getRightLetters() debe devolver ['a'] ", () => {
    hangman.word = "vaca";
    hangman.tryLetter("a");
    expect(hangman.getRightLetters()).toEqual(["a"]);
  });

  test("si la palabra es 'cobre', al intentar la letra 'a' getRightLetters() debe devolver [] ", () => {
    hangman.word = "cobre";
    hangman.tryLetter("a");
    expect(hangman.getRightLetters()).toEqual([]);
  });

  test("si la palabra es 'terodactilo', al intentar la letra 'a', seguida de 't' getRightLetters() debe devolver ['a', 't'] ", () => {
    hangman.word = "terodactilo";
    hangman.tryLetter("a");
    hangman.tryLetter("t");
    expect(hangman.getRightLetters()).toEqual(["a", "t"]);
  });
});

describe("ver letradas intentadas incorrectas", () => {
  test("al iniciar el juego la función getWrongLetters() debe retornar []", () => {
    expect(hangman.getWrongLetters()).toEqual([]);
  });

  test('si la palabra es "auto" e intento "p", la función getWrongLetters(), debería retornar ["p"]', () => {
    hangman.word = "auto";
    hangman.tryLetter("p");
    expect(hangman.getWrongLetters()).toEqual(["p"]);
  });

  test('si la palabra es "auto" e intento "p", "a", la función getWrongLetters(), debería retornar ["p"]', () => {
    hangman.word = "auto";
    hangman.tryLetter("p");
    hangman.tryLetter("a");
    expect(hangman.getWrongLetters()).toEqual(["p"]);
  });

  test('si la palabra es "auto" e intento "u", "a", la función getWrongLetters(), debería retornar []', () => {
    hangman.word = "auto";
    hangman.tryLetter("u");
    hangman.tryLetter("a");
    expect(hangman.getWrongLetters()).toEqual([]);
  });
});
