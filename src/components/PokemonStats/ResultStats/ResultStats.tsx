import React, { useContext } from 'react';
import { LocalizationContext } from '../../../constants';
import { PokeStats } from '../../../types';

export interface IResultStats {
  resultStats: number[];
}

export const ResultStats: React.FC<IResultStats> = ({ resultStats }) => {
  const loc = useContext(LocalizationContext);

  const stats = resultStats.map((stat, idx) => (
    <p key={Math.random()}>
      {PokeStats[idx]} is {stat}
    </p>
  ));

  return (
    <div>
      <p>{loc.RESULT_STATS}</p>
      {stats}
    </div>
  );
};
