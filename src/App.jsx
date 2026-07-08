import { useEffect, useState } from "react";
import Tarjeta from "./components/Tarjeta";

export default function App() {

  const [pokemons, setPokemons] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const obtenerPokemons = async () => {

      try {

        const respuesta = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=50"
        );

        if (!respuesta.ok) {
          throw new Error("Error al obtener la información");
        }

        const datos = await respuesta.json();

        const lista = datos.results.map((pokemon) => {

          const partes = pokemon.url.split("/");
          const id = partes[partes.length - 2];

          return {
            id,
            name: pokemon.name,
            imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          };

        });

        setPokemons(lista);

      } catch (err) {

        setError(err.message);

      } finally {

        setCargando(false);

      }

    };

    obtenerPokemons();

  }, []);

  if (cargando) {
    return (
      <h1 className="text-center mt-10 text-2xl font-bold">
        Cargando Pokédex...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-center mt-10 text-red-600 text-2xl font-bold">
        {error}
      </h1>
    );
  }

  return (

    <div className="min-h-screen bg-green-50">

      <h1 className="text-center text-4xl font-black text-teal-700 py-8">
        Pokédex
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 pb-10">

        {pokemons.map((pokemon) => (
          <Tarjeta
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))}

      </div>

    </div>

  );

}

