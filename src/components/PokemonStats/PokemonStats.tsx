import React from 'react';
// components
import { DefaultStats } from './DefaultStats';
import { PokemonEffortValues } from './PokemonEffortValues';
import { PokemonGencode } from './PokemonGencode';
import { ResultStats } from './ResultStats';
// styles
import * as S from './styled';
// other
import { IPokemon } from '../../types';

export interface IPokemonStats {
  pokemon: IPokemon;
  effortValues: number[];
  setEffortValues: ((effortValue: number) => void)[];
  gencode: number[];
  setGencode: ((gen: number) => void)[];
  resultStats: number[];
}

export const PokemonStats: React.FC<IPokemonStats> = ({
  pokemon,
  effortValues,
  setEffortValues,
  gencode,
  setGencode,
  resultStats,
}) => (
  <S.AllStatsContainer>
    <DefaultStats pokemon={pokemon} />
    <PokemonEffortValues effortValues={effortValues} setEffortValues={setEffortValues} />
    <PokemonGencode gencode={gencode} setGencode={setGencode} />
    <ResultStats resultStats={resultStats} />
  </S.AllStatsContainer>
);
