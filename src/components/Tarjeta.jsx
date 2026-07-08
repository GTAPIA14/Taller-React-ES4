export default function Tarjeta({
  pokemon,
  esFavorito,
  alternarFavorito,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-all duration-300 relative">

      <button
        onClick={() => alternarFavorito(pokemon)}
        className="absolute top-3 right-3 text-2xl"
      >
        {esFavorito ? "⭐" : "☆"}
      </button>

      <img
        src={pokemon.imagen}
        alt={pokemon.name}
        className="w-28 h-28 mx-auto object-contain"
      />

      <h2 className="capitalize text-center mt-4 font-bold text-slate-700 text-lg">
        {pokemon.name}
      </h2>

    </div>
  );
}