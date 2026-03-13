import React, { useState, useEffect } from 'react';

const PokemonCard = ({ pokemonName = 'pikachu' }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        
        if (!response.ok) {
          throw new Error('No se pudo encontrar a ese Pokemon');
        }

        const data = await response.json();
        setPokemon(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonName]); 

  if (loading) return <p>Cargando datos del Pokémon...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div>
        <strong>Tipos:</strong>
        {pokemon.types.map(t => (
          <span key={t.type.name} style={{ margin: '0 5px' }}>
            {t.type.name}
          </span>
        ))}
      </div>
      <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
    </div>
  );
};

export default PokemonCard;