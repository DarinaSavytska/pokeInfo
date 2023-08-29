import React, { useContext, useState } from 'react';
import { getPokemonByNumber } from '../api';
import { Authorization, PokemonMainInfo } from '../components';
import { PokemonStats } from './PokemonStats/PokemonStats';
import { IPokemon } from '../types';
import { LocalizationContext } from '../constants';

export const ContainerInfo: React.FC = () => {
  const loc = useContext(LocalizationContext);
  const getPokemon = async (number: number) => {
    const pokemonFromAPI = await getPokemonByNumber(number);

    setPokemon(pokemonFromAPI);
  };

  const [authorization, setAuthorization] = useState(true);
  const [pokemon, setPokemon] = useState<IPokemon | null>();

  // Effort values
  const [effortValueHP, setEffortValueHP] = useState<number>(0);
  const [effortValueA, setEffortValueA] = useState<number>(0);
  const [effortValueD, setEffortValueD] = useState<number>(0);
  const [effortValueSa, setEffortValueSa] = useState<number>(0);
  const [effortValueSd, setEffortValueSd] = useState<number>(0);
  const [effortValueS, setEffortValueS] = useState<number>(0);

  const effortValues = [effortValueHP, effortValueA, effortValueD, effortValueSa, effortValueSd, effortValueS];
  const setEffortValues = [
    setEffortValueHP,
    setEffortValueA,
    setEffortValueD,
    setEffortValueSa,
    setEffortValueSd,
    setEffortValueS,
  ];

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
      pokemon && (pokemon.stats[0].base_stat * 2 + genHP + effortValueHP / 2) * (pokeLevel / 100) + 10 + pokeLevel;

    const res = pokemon?.stats.map((stat, idx) =>
      Math.round((((stat.base_stat * 2 + gencode[idx] + effortValues[idx] / 2) * pokeLevel) / 100 + 5) * char)
    );

    resultStats.map((_, idx: number) => setResultStats[idx](Number(idx === 0 ? hpStat : res?.[idx])));
  };

  // Gencode
  const [gencodeOfPokemon, setGencodeOfPokemon] = useState<string>('');
  const [inputView, setInputView] = useState(false);
  // const [tempGencodeOfPokemon, setTempGencodeOfPokemon] = useState<string>();

  const [genHP, setGenHP] = useState<number>(0);
  const [genA, setGenA] = useState<number>(0);
  const [genD, setGenD] = useState<number>(0);
  const [genSa, setGenSa] = useState<number>(0);
  const [genSd, setGenSd] = useState<number>(0);
  const [genS, setGenS] = useState<number>(0);

  const gencode = [genHP, genA, genD, genSa, genSd, genS];
  const setGencode = [setGenHP, setGenA, setGenD, setGenSa, setGenSd, setGenS];

  // Level
  const [pokeLevel, setPokeLevel] = useState<number>(1);

  const onLevelChange = (e: any) =>
    (e.target.value > 100 && 100) ||
    (e.target.value < 0 && setPokeLevel(0)) ||
    setPokeLevel(Number(e.target.value));

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const char = 1; // добавить функционал для хара

  return authorization ? (
    <div>
      <p>{loc.MAIN_INFO}</p>
      <PokemonMainInfo getPokemon={getPokemon} pokemon={pokemon as IPokemon} />

      {pokemon && (
        <>
          <div style={{ display: 'flex', gap: '100px' }}>
            <PokemonStats
              pokemon={pokemon}
              effortValues={effortValues}
              setEffortValues={setEffortValues}
              gencodeOfPokemon={gencodeOfPokemon}
              gencode={gencode}
              setGencode={setGencode}
              inputView={inputView}
              resultStats={resultStats}
            />
          </div>

          <div
            style={{
              display: 'flex',
              height: '20px',
              gap: '10px',
              margin: '20px 0',
            }}
          >
            <p style={{ margin: '0', color: 'red' }}>Character</p>
            <input disabled />

            <p style={{ margin: '0' }}>Level</p>
            <input
              style={{ width: '50px' }}
              name='pokeLevel'
              type='number'
              value={pokeLevel}
              onChange={onLevelChange}
              min={0}
              max={100}
              step={1}
            />
          </div>

          <div
            style={{
              display: 'flex',
              height: '20px',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            {/* {inputView && (
              <div>
                <p>Enter gencode</p>
                <input
                  style={{ width: '180px' }}
                  name='pokeGencode'
                  type='string'
                  value={tempGencodeOfPokemon}
                  onChange={e => setTempGencodeOfPokemon(e.target.value)}
                  placeholder='h0a0d0s0sa0sd0.100'
                />
                <button
                  type='button'
                  onClick={() => {
                    tempGencodeOfPokemon && setGencodeOfPokemon(tempGencodeOfPokemon);
                  }}
                >
                  Enter
                </button>
                <p>For gen you can copy this: h0a0d0s0sa0sd0</p>
              </div>
            )} */}
            <button
              disabled
              onClick={() => {
                setInputView(!inputView);
                setGencodeOfPokemon('h0a0d0s0sa0sd0');
              }}
            >
              View of gen
            </button>
            <button onClick={() => countResultStats()}>See result stats</button>
            <button
              type='button'
              onClick={() => {
                setGencodeOfPokemon('h0a0d0s0sa0sd0');
                setEffortValueHP(0);
                setEffortValueA(0);
                setEffortValueD(0);
                setEffortValueS(0);
                setEffortValueSa(0);
                setEffortValueSd(0);
                setGenHP(0);
                setGenA(0);
                setGenD(0);
                setGenSa(0);
                setGenSd(0);
                setGenS(0);
                setPokeLevel(1);
                countResultStats();
              }}
            >
              Clear All Stats
            </button>
          </div>
        </>
      )}
    </div>
  ) : (
    <Authorization setAuthorization={setAuthorization} />
  );
};

export default ContainerInfo;
