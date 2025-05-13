import { Hangman } from "../src/hangman";

let hangman: Hangman;
beforeEach(() => {
  hangman = new Hangman();
});

test("funcion intentar letra debe estar definida", () => {
  expect(hangman.tryLetter).toBeDefined();
});

test("al recibir '' intentar letra debe dar error", () => {
  expect(() => {
    hangman.tryLetter("");
  }).toThrow();
});

test("al recibir 'a' intentar letra debe retornar true or false", () => {
  const letter = "a";
  expect([true, false]).toContain(hangman.tryLetter(letter));
});

test("al recibir 'b' intentar letra debe retornar true or false", () => {
  const letter = "b";
  expect([true, false]).toContain(hangman.tryLetter(letter));
});

test("al recibir '#' intentar letra debe lanzar un error", () => {
  const letter = "#";
  expect(() => {
    hangman.tryLetter(letter);
  }).toThrow();
});

test("al recibir '&' intentar letra debe lanzar un error", () => {
  const letter = "&";
  expect(() => {
    hangman.tryLetter(letter);
  }).toThrow();
});

test("al recibir un número como argumento intentar letra debe lanzar un error", () => {
  const letter = "6";
  expect(() => {
    hangman.tryLetter(letter);
  }).toThrow();
});

test("al recibir más de un carácter como argumento intentar letra debe lanzar error", () => {
  const letter = "aa";
  expect(() => {
    hangman.tryLetter(letter);
  }).toThrow();
});
