import React, { useContext } from 'react';
// styles
import * as S from '../styled';
// other
import { PokeStats } from '../../../types';
import { LocalizationContext } from '../../../constants';

export interface IResultStats {
  resultStats: number[];
}

export const ResultStats: React.FC<IResultStats> = ({ resultStats }) => {
  const loc = useContext(LocalizationContext);

  const stats = resultStats.map((stat, idx) => (
    <S.Stat key={Math.random()}>
      <div>{PokeStats[idx]}</div>
      <div> - </div>
      <div>{stat}</div>
    </S.Stat>
  ));

  return (
    <S.StatsContainer>
      <S.StatsTitle>{loc.RESULT_STATS}</S.StatsTitle>
      <S.Stats>{stats}</S.Stats>
    </S.StatsContainer>
  );
};
