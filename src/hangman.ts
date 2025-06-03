export class Hangman {
  word = "abuela";
  lives = 7;

  tryLetter(letter: string) {
    letter = letter.toLowerCase();
    if (!/^[a-zñ]$/.test(letter)) {
      throw new Error("La función debe contener solo una letra válida");
    }

    const result = this.word.includes(letter);

    if (!result) this.lives -= 1;
    return result;
  }
}
