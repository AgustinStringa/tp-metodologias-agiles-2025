import { intentarLetra } from "../src/index";

test("funcion intentar letra debe estar definida", () => {
  expect(intentarLetra).toBeDefined();
});

test("al recibir '' intentar letra debe dar error", () => {
  expect(() => {
    intentarLetra("");
  }).toThrow();
});

test("al recibir 'a' intentar letra debe retornar true or false", () => {
  const letra = "a";
  expect([true, false]).toContain(intentarLetra(letra));
});

test("al recibir 'b' intentar letra debe retornar true or false", () => {
  const letra = "b";
  expect([true, false]).toContain(intentarLetra(letra));
});

test("al recibir '#' intentar letra debe lanzar un error", () => {
  const letra = "#";
  expect(() => {
    intentarLetra(letra);
  }).toThrow();
});

test("al recibir '&' intentar letra debe lanzar un error", () => {
  const letra = "&";
  expect(() => {
    intentarLetra(letra);
  }).toThrow();
});

test("al recibir un número como argumento intentar letra debe lanzar un error", () => {
  const letra = "6";
  expect(() => {
    intentarLetra(letra);
  }).toThrow();
});

//una vez considerados los casos de varias letras, de caracteres especiales y de números continuar con strings de length > 1
