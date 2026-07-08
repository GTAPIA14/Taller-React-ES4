export default function PanelBloqueados({
  bloqueados,
  desbloquearPokemon,
}) {
  return (
    <aside className="bg-white rounded-2xl shadow-lg p-5">

      <h2 className="text-2xl font-bold text-red-600 mb-4">
        🚫 Bloqueados
      </h2>

      {bloqueados.length === 0 ? (
        <p className="text-slate-500">
          No hay Pokémon bloqueados.
        </p>
      ) : (
        <ul className="space-y-3">

          {bloqueados.map((pokemon) => (

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
                onClick={() => desbloquearPokemon(pokemon.id)}
                className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-lg"
              >
                Desbloquear
              </button>

            </li>

          ))}

        </ul>
      )}

    </aside>
  );
}