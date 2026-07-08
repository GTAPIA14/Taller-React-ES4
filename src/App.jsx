import { useEffect, useState } from "react";
import Tarjeta from "./components/Tarjeta";
import Buscador from "./components/Buscador";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const [busqueda, setBusqueda] = useState("");

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

  const pokemonsFiltrados = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (cargando) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold text-teal-700">
          Cargando Pokédex...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-600">
          {error}
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50">

      <header className="py-8">
        <h1 className="text-center text-4xl font-black text-teal-700">
          Pokédex
        </h1>

        <p className="text-center text-slate-600 mt-2">
          Busca tu Pokémon favorito
        </p>
      </header>

      <Buscador
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      {pokemonsFiltrados.length === 0 && (
        <p className="text-center text-slate-500 mb-6">
          No se encontraron Pokémon.
        </p>
      )}

      <main className="max-w-7xl mx-auto px-5 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemonsFiltrados.map((pokemon) => (
          <Tarjeta
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))}
      </main>

    </div>
  );
}