export default function Tarjeta({
  pokemon,
  esFavorito,
  alternarFavorito,
  bloquearPokemon,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-all duration-300 relative">

      {/* Botón Favoritos */}
      <button
        onClick={() => alternarFavorito(pokemon)}
        className="absolute top-3 left-3 text-2xl"
        title={
          esFavorito
            ? "Quitar de favoritos"
            : "Agregar a favoritos"
        }
      >
        {esFavorito ? "⭐" : "☆"}
      </button>

      {/* Botón Bloquear */}
      <button
        onClick={() => bloquearPokemon(pokemon)}
        className="absolute top-3 right-3 text-xl"
        title="Bloquear Pokémon"
      >
        🚫
      </button>

      <img
        src={pokemon.imagen}
        alt={pokemon.name}
        className="w-28 h-28 mx-auto object-contain"
      />

      <h2 className="capitalize text-center mt-4 font-bold text-slate-700 text-lg">
        {pokemon.name}
      </h2>

      <p className="text-center text-slate-400 text-sm mt-1">
        #{pokemon.id}
      </p>

    </div>
  );
}