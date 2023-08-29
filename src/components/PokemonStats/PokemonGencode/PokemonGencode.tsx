import React, { useContext } from 'react';
import { LocalizationContext } from '../../../constants';
import { PokeStats } from '../../../types';

export interface IPokemonGencode {
  gencode: number[];
  setGencode: ((gen: number) => void)[];
  aditionalGen: any;
  inputView: boolean;
}

export const PokemonGencode: React.FC<IPokemonGencode> = ({
  gencode,
  setGencode,
  aditionalGen,
  inputView,
}) => {
  const loc = useContext(LocalizationContext);

  const onGenChange = (gen: string, e: any) => {
    const newGen = () => (e.target.value < 0 && 0) || Number(e.target.value);

    gencode.map((_, idx) => {
      return gen === PokeStats[idx] && setGencode[idx](newGen());
    });
  };

  const pokemonGen = gencode.map((gen: number, idx) => (
    <p key={PokeStats[idx]}>
      {PokeStats[idx]}
      <input type='number' onChange={e => onGenChange(PokeStats[idx], e)} value={gen} />
    </p>
  ));

  const view = aditionalGen.map((gen: number, idx: number) => (
    <p>
      {PokeStats[idx]} - {gen}
    </p>
  ));

  return (
    <div>
      <p style={{ backgroundColor: 'yellowgreen' }}>{loc.GENCODE}</p>
      {inputView ? view : pokemonGen}
    </div>
  );
};
