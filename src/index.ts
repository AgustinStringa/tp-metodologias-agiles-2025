export function intentarLetra(letra: string) {
  if (letra === "" || letra === "#")
    throw new Error("la función debe contener solo letras");
  return true;
}
