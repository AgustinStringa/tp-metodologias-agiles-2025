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

describe("al intentar una letra, dependiendo si está o no en la palabra, debería cambiar o no el número de vidas respectivamente", () => {
  let hangman: Hangman;
  let initialLives: number;
  const wrongLetter = "j";
  const rightLetter = "p";

  beforeEach(() => {
    hangman = new Hangman();
    hangman.word = "perro";
    initialLives = hangman.lives;
  });

  test("si la palabra es perro e intento la letra j, debería devolver false", () => {
    expect(hangman.tryLetter(wrongLetter)).toBe(false);
  });

  test("si la palabra es perro, e intento la letra p, la cantidad de vidas debería verse disminuida en 1", () => {
    hangman.tryLetter(wrongLetter);
    expect(hangman.lives).toEqual(initialLives - 1);
  });

  test("si la palabra es perro, e intento la letra p, la cantidad de vidas debería mantenerse igual.", () => {
    hangman.tryLetter(rightLetter);
    expect(hangman.lives).toEqual(initialLives);
  });
});

