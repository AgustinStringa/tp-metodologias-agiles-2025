export class Hangman {
  word = "abuela";
  lives = 7;

  substractLive() {
    this.lives -= 1;
  }

  isLetter(letter: string) {
    return this.word.includes(letter);
  }

  tryLetter(letter: string) {
    letter = letter.toLowerCase();
    if (!/^[a-zñ]$/.test(letter)) {
      throw new Error("La función debe contener solo una letra válida");
    }

    const result = this.isLetter(letter);

    if (!result) this.substractLive();
    return result;
  }
}
