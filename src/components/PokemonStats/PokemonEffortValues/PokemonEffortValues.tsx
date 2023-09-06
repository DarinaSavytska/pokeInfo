import React, { useContext } from 'react';
// components
import { Input } from '../../Input';
// styles
import * as S from '../styled';
// other
import { LocalizationContext } from '../../../constants';
import { PokeStats } from '../../../types';

interface IEffortValues {
  effortValues: number[];
  setEffortValues: ((effortValue: number) => void)[];
}

export const PokemonEffortValues: React.FC<IEffortValues> = ({ effortValues, setEffortValues }) => {
  const loc = useContext(LocalizationContext);

  const onEffortValueChange = (gen: string, e: any) => {
    const newEffortValue = () =>
      (e.target.value > 256 && 256) || (e.target.value < 0 && 0) || Number(e.target.value);

    effortValues.map((_, idx) => {
      return gen === PokeStats[idx] && setEffortValues[idx](newEffortValue());
    });
  };

  const pokemonEffortValue = effortValues.map((effortValue: number, idx) => (
    <S.Stat key={PokeStats[idx]}>
      {PokeStats[idx]}
      <Input
        type='number'
        onChange={e => onEffortValueChange(PokeStats[idx], e)}
        value={parseInt(effortValue.toString(), 10).toString()}
      />
    </S.Stat>
  ));

  return (
    <S.StatsContainer>
      <S.StatsTitle>{loc.EV}</S.StatsTitle>
      <S.Stats>{pokemonEffortValue}</S.Stats>
    </S.StatsContainer>
  );
};
