import { Hangman } from "../hangman";

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

  test("si la palabra es perro, e intento la letra j, la cantidad de vidas debería verse disminuida en 1", () => {
    hangman.tryLetter(wrongLetter);
    expect(hangman.lives).toEqual(initialLives - 1);
  });

  test("si la palabra es perro, e intento la letra p, la cantidad de vidas debería mantenerse igual", () => {
    hangman.tryLetter(rightLetter);
    expect(hangman.lives).toEqual(initialLives);
  });
});

test("si la cantidad de vidas resulta igual a 0, no se puede intentar una letra", () => {
  hangman = new Hangman();
  hangman.word = "cachorro";
  hangman.lives = 0;

  expect(() => {
    hangman.tryLetter("z");
  }).toThrow("No tienes más vidas");
});
describe("La cantidad de letras debe mantenerse igual con el correr de los intentos (es decir pérdida de vidas)", () => {
  test("si la palabra es 'auto' e intento 'B' la cantidad de letras debe ser 4.", () => {
    hangman.word = "auto";
    hangman.tryLetter("B");
    expect(hangman.getLettersCount()).toBe(4);
  });
  test("si la palabra es 'ave' la cantidad de letras debe ser 3", () => {
    hangman.word = "ave";
    expect(hangman.getLettersCount()).toBe(3);
  });
});

test("al recibir una letra con tilde (ej: 'a), tryLetter() debería comportarse como si fuera sin tilde (ej: 'a'", () => {
  hangman.rawWord = "camión";
  hangman.word = hangman.normalize(hangman.rawWord);
  expect(hangman.tryLetter("o")).toBe(true);
});
