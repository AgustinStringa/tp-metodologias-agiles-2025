export function tryLetter(letter: string) {
  if (
    letter === "" ||
    letter === "#" ||
    letter === "&" ||
    letter === "aa" ||
    letter === "6"
  )
    throw new Error("la función debe contener solo letras");
  return true;
}
