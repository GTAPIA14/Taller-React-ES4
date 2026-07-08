export default function PanelFavoritos({
  favoritos,
  quitarFavorito,
}) {
  return (
    <aside className="bg-white rounded-2xl shadow-lg p-5">

      <h2 className="text-2xl font-bold text-teal-700 mb-4">
        ⭐ Favoritos
      </h2>

      {favoritos.length === 0 ? (
        <p className="text-slate-500">
          No hay favoritos.
        </p>
      ) : (
        <ul className="space-y-3">

          {favoritos.map((pokemon) => (

            <li
              key={pokemon.id}
              className="flex items-center justify-between"
            >

              <div className="flex items-center gap-3">

                <img
                  src={pokemon.imagen}
                  alt={pokemon.name}
                  className="w-12 h-12"
                />

                <span className="capitalize font-semibold">
                  {pokemon.name}
                </span>

              </div>

              <button
                onClick={() => quitarFavorito(pokemon.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-lg"
              >
                ✕
              </button>

            </li>

          ))}

        </ul>
      )}

    </aside>
  );
}