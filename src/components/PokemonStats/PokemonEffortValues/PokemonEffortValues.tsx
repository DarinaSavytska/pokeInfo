import React, { useContext } from 'react';
import { LocalizationContext } from '../../../constants';
import { PokeStats } from '../../../types';

interface IEffortValues {
  effortValues: number[];
  setEffortValues: ((effortValue: number) => void)[];
}

export const PokemonEffortValues: React.FC<IEffortValues> = ({ effortValues, setEffortValues }) => {
  const loc = useContext(LocalizationContext);

  const onEffortValueChange = (gen: string, e: any) => {
    const newEffortValue = () => (e.target.value > 256 && 256) || (e.target.value < 0 && 0) || Number(e.target.value);

    effortValues.map((_, idx) => {
      return gen === PokeStats[idx] && setEffortValues[idx](newEffortValue());
    });
  };

  const pokemonEffortValue = effortValues.map((effortValue: number, idx) => (
    <p key={PokeStats[idx]}>
      {PokeStats[idx]}
      <input type='number' onChange={e => onEffortValueChange(PokeStats[idx], e)} value={effortValue} />
    </p>
  ));

  return (
    <div>
      <p style={{ backgroundColor: 'yellowgreen' }}>{loc.EV}</p>
      {pokemonEffortValue}
    </div>
  );
};
