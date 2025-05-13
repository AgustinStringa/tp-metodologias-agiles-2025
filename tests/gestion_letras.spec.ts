import { tryLetter } from "../src/index";

test("funcion intentar letra debe estar definida", () => {
  expect(tryLetter).toBeDefined();
});

test("al recibir '' intentar letra debe dar error", () => {
  expect(() => {
    tryLetter("");
  }).toThrow();
});

test("al recibir 'a' intentar letra debe retornar true or false", () => {
  const letter = "a";
  expect([true, false]).toContain(tryLetter(letter));
});

test("al recibir 'b' intentar letra debe retornar true or false", () => {
  const letter = "b";
  expect([true, false]).toContain(tryLetter(letter));
});

test("al recibir '#' intentar letra debe lanzar un error", () => {
  const letter = "#";
  expect(() => {
    tryLetter(letter);
  }).toThrow();
});

test("al recibir '&' intentar letra debe lanzar un error", () => {
  const letter = "&";
  expect(() => {
    tryLetter(letter);
  }).toThrow();
});

test("al recibir un número como argumento intentar letra debe lanzar un error", () => {
  const letter = "6";
  expect(() => {
    tryLetter(letter);
  }).toThrow();
});

test("al recibir más de un carácter como argumento intentar letra debe lanzar error", () => {
  const letter = "aa";
  expect(() => {
    tryLetter(letter);
  }).toThrow();
});

//una vez considerados los casos de varias letras, de caracteres especiales y de números continuar con strings de length > 1
