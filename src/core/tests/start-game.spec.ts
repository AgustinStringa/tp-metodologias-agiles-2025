import { Hangman } from "../hangman";
let hangman: Hangman;
beforeEach(async () => {
  hangman = await Hangman.create({ language: "spanish", difficulty: "easy" });
});

test("Al iniciar el juego tiene que haber una palabra a la cual adivinar", () => {
  expect(hangman.word).not.toBeFalsy();
});

test("la palabra a adivinar debe ser de tipo string", () => {
  expect(typeof hangman.word).toBe("string");
});

test("la palabra a adivinar debe ser distinta de  '' ", () => {
  expect(hangman.word).not.toBe("");
});

test("Al iniciar el juego la palabra a adivinar debe tener una cantidad de letras", () => {
  expect(hangman.getLettersCount).toBeDefined();
});

test("La cantidad de letras de la palabra a adivinar no debe ser un número negativo", () => {
  expect(hangman.getLettersCount()).not.toBeLessThan(0);
});

test("Si inicio un juego y luego inicio otro juego, las palabras a adivinar deben ser distintas", async () => {
  const word1 = hangman.word;
  hangman = await Hangman.create({ language: "spanish", difficulty: "easy" });
  const word2 = hangman.word;
  expect(word1).not.toBe(word2);
});
