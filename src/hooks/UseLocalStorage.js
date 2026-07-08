import { useState } from "react";

export default function useLocalStorage(key, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const item = localStorage.getItem(key);

      return item ? JSON.parse(item) : valorInicial;
    } catch (error) {
      console.error(error);
      return valorInicial;
    }
  });

  const guardarValor = (nuevoValor) => {
    try {
      setValor(nuevoValor);
      localStorage.setItem(
        key,
        JSON.stringify(nuevoValor)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return [valor, guardarValor];
}