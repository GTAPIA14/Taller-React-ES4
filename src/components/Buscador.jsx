export default function Buscador({ busqueda, setBusqueda }) {
  return (
    <div className="max-w-3xl mx-auto mb-8">
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full p-4 rounded-xl border-2 border-teal-300 focus:outline-none focus:border-teal-600 text-lg"
      />
    </div>
  );
}