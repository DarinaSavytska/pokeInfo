import React, { useContext, useEffect, useState } from 'react';
// components
import { Input } from './Input';
import { Button, PokemonMainInfo } from '../components';
import { PokemonStats } from './PokemonStats/PokemonStats';
// styles
import * as S from './styled';
// other
import { IPokemon } from '../types';
import { LocalizationContext } from '../constants';
import { ButtonType } from './Button/types';

interface IContainerInfo {
  pokemon: IPokemon;
  getPokemon: (number: number) => Promise<void>;
}

export const ContainerInfo: React.FC<IContainerInfo> = ({ pokemon, getPokemon }) => {
  const loc = useContext(LocalizationContext);

  // Effort values
  const [effortValueHP, setEffortValueHP] = useState<number>(0);
  const [effortValueA, setEffortValueA] = useState<number>(0);
  const [effortValueD, setEffortValueD] = useState<number>(0);
  const [effortValueSa, setEffortValueSa] = useState<number>(0);
  const [effortValueSd, setEffortValueSd] = useState<number>(0);
  const [effortValueS, setEffortValueS] = useState<number>(0);

  const effortValues = [
    effortValueHP,
    effortValueA,
    effortValueD,
    effortValueSa,
    effortValueSd,
    effortValueS,
  ];
  const setEffortValues = [
    setEffortValueHP,
    setEffortValueA,
    setEffortValueD,
    setEffortValueSa,
    setEffortValueSd,
    setEffortValueS,
  ];

  // Gencode
  const [genHP, setGenHP] = useState<number>(0);
  const [genA, setGenA] = useState<number>(0);
  const [genD, setGenD] = useState<number>(0);
  const [genSa, setGenSa] = useState<number>(0);
  const [genSd, setGenSd] = useState<number>(0);
  const [genS, setGenS] = useState<number>(0);

  const gencode = [genHP, genA, genD, genSa, genSd, genS];
  const setGencode = [setGenHP, setGenA, setGenD, setGenSa, setGenSd, setGenS];

  // Stats
  const [hpStatResult, setHpStatResult] = useState<number>(0);
  const [aStatResult, setAStatResult] = useState<number>(0);
  const [dStatResult, setDStatResult] = useState<number>(0);
  const [saStatResult, setSaStatResult] = useState<number>(0);
  const [sdStatResult, setSdStatResult] = useState<number>(0);
  const [sStatResult, setSStatResult] = useState<number>(0);

  const resultStats = [hpStatResult, aStatResult, dStatResult, saStatResult, sdStatResult, sStatResult];
  const setResultStats = [
    setHpStatResult,
    setAStatResult,
    setDStatResult,
    setSaStatResult,
    setSdStatResult,
    setSStatResult,
  ];

  const countResultStats = () => {
    const hpStat =
      pokemon &&
      Math.round(
        (pokemon.stats[0].base_stat * 2 + genHP + effortValueHP / 2) * (pokeLevel / 100) + 10 + pokeLevel
      );

    const res = pokemon?.stats.map((stat, idx) =>
      Math.round((((stat.base_stat * 2 + gencode[idx] + effortValues[idx] / 2) * pokeLevel) / 100 + 5) * char)
    );

    resultStats.map((_, idx: number) => setResultStats[idx](Number(idx === 0 ? hpStat : res?.[idx])));
  };

  const resetResult = () => resultStats.map((_, idx: number) => setResultStats[idx](0));

  const clearResults = () => {
    effortValues.map((_, idx) => setEffortValues[idx](0));

    gencode.map((_, idx) => setGencode[idx](0));

    setPokeLevel(1);
    resetResult();
  };

  // Level
  const [pokeLevel, setPokeLevel] = useState<number>(1);

  const onLevelChange = (e: any) =>
    (e.target.value > 100 && 100) ||
    (e.target.value < 0 && setPokeLevel(0)) ||
    setPokeLevel(Number(e.target.value));

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const char = 1; // добавить функционал для хара

  useEffect(() => {
    clearResults();
    resetResult();
  }, [pokemon]);

  return (
    <S.Container>
      <S.MainInfo>{loc.MAIN_INFO}</S.MainInfo>
      <PokemonMainInfo getPokemon={getPokemon} pokemon={pokemon} />

      {pokemon && (
        <>
          <S.StatsContainer>
            <PokemonStats
              pokemon={pokemon}
              effortValues={effortValues}
              setEffortValues={setEffortValues}
              gencode={gencode}
              setGencode={setGencode}
              resultStats={resultStats}
            />
          </S.StatsContainer>

          <S.AdditionalRise>
            <S.AdditionalRiseText>{loc.CHARACTER}</S.AdditionalRiseText>
            <Input disabled style={{ maxWidth: '100px' }} />

            <S.AdditionalRiseText>{loc.LEVEL}</S.AdditionalRiseText>
            <Input
              style={{ width: '50px' }}
              name='pokeLevel'
              type='number'
              value={parseInt(pokeLevel.toString(), 10).toString()}
              onChange={onLevelChange}
              min={0}
              max={100}
              step={1}
            />
          </S.AdditionalRise>

          <S.ButtonsContainer>
            <Button type={ButtonType.Button} onClick={() => countResultStats()}>
              {loc.SEE_THE_RESULT}
            </Button>
            <Button type={ButtonType.Button} onClick={clearResults}>
              {loc.CLEAR_ALL_STATS}
            </Button>
          </S.ButtonsContainer>
        </>
      )}
    </S.Container>
  );
};

export default ContainerInfo;
