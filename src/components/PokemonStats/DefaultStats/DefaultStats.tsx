import React, { useContext } from 'react';
import { LocalizationContext } from '../../../constants';
import { PokeStats, IPokemon, IStat } from '../../../types';

export interface IPokemonStats {
  pokemon: IPokemon;
}

export const DefaultStats: React.FC<IPokemonStats> = ({ pokemon }) => {
  const loc = useContext(LocalizationContext);

  const defaultStats = pokemon.stats.map((stat: IStat, idx: number) => (
    <p key={stat.stat.url}>
      {PokeStats[idx]} is {stat.base_stat}
    </p>
  ));

  return (
    <div>
      <p style={{ backgroundColor: 'yellowgreen' }}>{loc.STATS}</p>
      <div>{defaultStats}</div>

    </div>
  );
};
