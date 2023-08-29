import React from 'react';
import { IPokemon } from '../../types';
import { DefaultStats } from './DefaultStats';
import { PokemonEffortValues } from './PokemonEffortValues';
import { PokemonGencode } from './PokemonGencode';
import { ResultStats } from './ResultStats';

export interface IPokemonStats {
  pokemon: IPokemon;
  effortValues: number[];
  setEffortValues: ((effortValue: number) => void)[];
  gencodeOfPokemon: string;
  gencode: number[];
  setGencode: ((gen: number) => void)[];
  inputView: boolean;
  resultStats: number[];
}

export const PokemonStats: React.FC<IPokemonStats> = ({
  pokemon,
  effortValues,
  setEffortValues,
  gencodeOfPokemon,
  gencode,
  setGencode,
  inputView,
  resultStats,
}) => {
  const findGen = (gen1: string, gen2: string) =>
    Number(gencodeOfPokemon?.toLocaleLowerCase().replaceAll(' ', '').split(gen1)[1]?.split(gen2)[0]) || 0;

  const genHP = findGen('h', 'a');
  const genA = findGen('a', 'd');
  const genD = findGen('d', 's');
  const genSa = findGen('sa', 'sd');
  const genSd = findGen('sd', '.');
  const genS = findGen('s', 'sa');

  const aditionalGen = [genHP, genA, genD, genSa, genSd, genS];

  return (
    <div>
      <DefaultStats pokemon={pokemon} />
      <PokemonEffortValues effortValues={effortValues} setEffortValues={setEffortValues} />
      <PokemonGencode
        gencode={gencode}
        setGencode={setGencode}
        aditionalGen={aditionalGen}
        inputView={inputView}
      />
      <ResultStats resultStats={resultStats} />
    </div>
  );
};
