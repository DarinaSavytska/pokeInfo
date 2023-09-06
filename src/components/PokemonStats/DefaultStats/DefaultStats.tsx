import React, { useContext } from 'react';
// styles
import * as S from '../styled';
// other
import { LocalizationContext } from '../../../constants';
import { PokeStats, IPokemon, IStat } from '../../../types';

export interface IPokemonStats {
  pokemon: IPokemon;
}

export const DefaultStats: React.FC<IPokemonStats> = ({ pokemon }) => {
  const loc = useContext(LocalizationContext);

  const defaultStats = pokemon.stats.map((stat: IStat, idx: number) => (
    <S.Stat key={stat.stat.url}>
      <div>{PokeStats[idx]}</div>
      <div> - </div>
      <div>{stat.base_stat}</div>
    </S.Stat>
  ));

  return (
    <S.StatsContainer>
      <S.StatsTitle>{loc.STATS}</S.StatsTitle>
      <S.Stats>{defaultStats}</S.Stats>
    </S.StatsContainer>
  );
};
