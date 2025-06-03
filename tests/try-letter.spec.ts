import { Hangman } from "../src/hangman";

let hangman: Hangman;
beforeEach(() => {
  hangman = new Hangman();
});

test("funcion tryLetter() debe estar definida", () => {
  expect(hangman.tryLetter).toBeDefined();
});

test("al recibir '' tryLetter() debe dar error", () => {
  expect(() => {
    hangman.tryLetter("");
  }).toThrow();
});

test("al recibir 'a' tryLetter() debe retornar true or false", () => {
  const letter = "a";
  expect([true, false]).toContain(hangman.tryLetter(letter));
});

test("al recibir 'b' tryLetter() debe retornar true or false", () => {
  const letter = "b";
  expect([true, false]).toContain(hangman.tryLetter(letter));
});

describe("la palabra no tiene que poseer números o caracteres especiales", () => {
  test("al recibir '#' tryLetter() debe lanzar un error", () => {
    const letter = "#";
    expect(() => {
      hangman.tryLetter(letter);
    }).toThrow();
  });

  test("al recibir '&' tryLetter() debe lanzar un error", () => {
    const letter = "&";
    expect(() => {
      hangman.tryLetter(letter);
    }).toThrow();
  });

  test("al recibir un número como argumento tryLetter() debe lanzar un error", () => {
    const letter = "6";
    expect(() => {
      hangman.tryLetter(letter);
    }).toThrow();
  });
});

test("al recibir más de un carácter como argumento tryLetter() debe lanzar error", () => {
  const letter = "aa";
  expect(() => {
    hangman.tryLetter(letter);
  }).toThrow();
});

test("al recibir 'A' -letra en mayúscula- tryLetter() debe retornar true or false", () => {
  const letter = "A";
  expect([true, false]).toContain(hangman.tryLetter(letter));
});

test("al recibir 'ñ' -letra existente en idioma castellano- tryLetter() debe retornar true or false", () => {
  const letter = "ñ";
  expect([true, false]).toContain(hangman.tryLetter(letter));
});

test("si la palabra es perro e intento la letra j, debería devolver false", () => {
  const hangman = new Hangman();
  hangman.word = "perro";
  const letter = "j";
  expect(hangman.tryLetter(letter)).toBe(false);
});

