import React, { useContext } from 'react';
// components
import { Input } from '../../Input';
// styles
import * as S from '../styled';
// other
import { LocalizationContext } from '../../../constants';
import { PokeStats } from '../../../types';

export interface IPokemonGencode {
  gencode: number[];
  setGencode: ((gen: number) => void)[];
}

export const PokemonGencode: React.FC<IPokemonGencode> = ({ gencode, setGencode }) => {
  const loc = useContext(LocalizationContext);

  const onGenChange = (gen: string, e: any) => {
    const newGen = () => (e.target.value < 0 && 0) || Number(e.target.value);

    gencode.map((_, idx) => {
      return gen === PokeStats[idx] && setGencode[idx](newGen());
    });
  };

  const pokemonGen = gencode.map((gen: number, idx) => (
    <S.Stat key={PokeStats[idx]}>
      {PokeStats[idx]}
      <Input
        type='number'
        onChange={e => onGenChange(PokeStats[idx], e)}
        value={parseInt(gen.toString(), 10).toString()}
      />
    </S.Stat>
  ));

  return (
    <S.StatsContainer>
      <S.StatsTitle>{loc.GENCODE}</S.StatsTitle>
      <S.Stats>{pokemonGen}</S.Stats>
    </S.StatsContainer>
  );
};
