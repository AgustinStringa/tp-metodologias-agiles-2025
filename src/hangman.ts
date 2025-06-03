export class Hangman {
  word = "abuela";
  lives = 7;

  tryLetter(letter: string) {
    letter = letter.toLowerCase();
    if (!/^[a-zñ]$/.test(letter)) {
      throw new Error("La función debe contener solo una letra válida");
    }

    this.lives -= 1;
    return this.word.includes(letter);
  }
}
