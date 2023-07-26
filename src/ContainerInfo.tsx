import React, { useState } from 'react';
import { getPokemonByNumber } from './api';

export const ContainerInfo: React.FC = () => {
  const [pokeNumberForSearch, setPokeNumberForSearch] = useState<number>(1);
  const [pokemon, setPokemon] = useState<any>(null);

  const [pokeName, setPokeName] = useState<string>();
  const [pokeNum, setPokeNum] = useState<number>();

  const [tempGenecodeOfPokemon, setTempGenecodeOfPokemon] = useState<string>();
  const [genecodeOfPokemon, setGenecodeOfPokemon] = useState<string>();

  const getPokemon = async (number: number) => {
    const pokemonFromAPI = await getPokemonByNumber(number);

    setPokeName(pokemonFromAPI.forms[0].name);
    setPokeNum(pokemonFromAPI.id);
    setPokemon(pokemonFromAPI);

    console.log(pokemonFromAPI);
  };

  const [isGenCorrect, setIsGenCorrect] = useState<boolean>(true);

  const onCountGenecode = (e: any) => {
    if (
      !e.target.value.includes('h') &&
      !e.target.value.includes('a') &&
      !e.target.value.includes('d') &&
      !e.target.value.includes('s') &&
      !e.target.value.includes('sa') &&
      !e.target.value.includes('sd')
    ) {
      setIsGenCorrect(false);
    } else {
      setIsGenCorrect(true);
    }
    isGenCorrect && setTempGenecodeOfPokemon(e.target.value);
  };

  /// обрезать нули в начале

  const onChangePokeNumber = (e: any) => {
    const num = () => {
      if (e.target.value > 1008) {
        return 1008;
      } else if (e.target.value < 0) {
        return 0;
      } else {
        return e.target.value;
      }
    };

    setPokeNumberForSearch(num());
  };

  const [evHP, setEvHP] = useState<number>(0);
  const [evA, setEvA] = useState<number>(0);
  const [evD, setEvD] = useState<number>(0);
  const [evS, setEvS] = useState<number>(0);
  const [evSa, setEvSa] = useState<number>(0);
  const [evSd, setEvSd] = useState<number>(0);

  const [pokeLevel, setPokeLevel] = useState<number>(1);

  const onLevelChange = (e: any) => {
    if (e.target.value > 100) {
      return setPokeLevel(100);
    } else {
      return setPokeLevel(e.target.value);
    }
  };

  const onEvChange = (gen: string, e: any) => {
    const ev = () => {
      if (e.target.value > 126) {
        return 126;
      } else if (e.target.value < 0) {
        return 0;
      } else {
        return e.target.value;
      }
    };

    gen === 'hp' && setEvHP(ev());
    gen === 'a' && setEvA(ev());
    gen === 'd' && setEvD(ev());
    gen === 's' && setEvS(ev());
    gen === 'sa' && setEvSa(ev());
    gen === 'sd' && setEvSd(ev());
  };

  const [hpStatResult, seHpStatResult] = useState<number>(0);
  const [aStatResult, seAStatResult] = useState<number>(0);
  const [dStatResult, seDStatResult] = useState<number>(0);
  const [sStatResult, seSStatResult] = useState<number>(0);
  const [saStatResult, seSaStatResult] = useState<number>(0);
  const [sdStatResult, seSdStatResult] = useState<number>(0);

  const genHP = Number(genecodeOfPokemon?.split('h')[1].split('a')[0]) || 0;
  const genA = Number(genecodeOfPokemon?.split('a')[1].split('d')[0]) || 0;
  const genD = Number(genecodeOfPokemon?.split('d')[1].split('s')[0]) || 0;
  const genS = Number(genecodeOfPokemon?.split('s')[1].split('sa')[0]) || 0;
  const genSA = Number(genecodeOfPokemon?.split('sa')[1].split('sd')[0]) || 0;
  const genSD = Number(genecodeOfPokemon?.split('sd')[1].split('.')[0]) || 0;

  const char = 1; // добавить функционал для трень и хара
  const train = 1; // добавить функционал для трень и хара

  const countResultStats = () => {
    const hpStat =
      (pokemon.stats[0].base_stat * 2 + genHP + evHP / 2) * (pokeLevel / 100) +
      10 +
      Number(pokeLevel);

    const aStat =
      (((pokemon.stats[1].base_stat * 2 + genA + evA / 2) * pokeLevel) / 100 +
        5) *
      char *
      train;
    const dStat =
      (((pokemon.stats[2].base_stat * 2 + genD + evD / 2) * pokeLevel) / 100 +
        5) *
      char *
      train;
    const sStat =
      (((pokemon.stats[5].base_stat * 2 + genS + evS / 2) * pokeLevel) / 100 +
        5) *
      char *
      train;
    const saStat =
      (((pokemon.stats[3].base_stat * 2 + genSA + evSa / 2) * pokeLevel) / 100 +
        5) *
      char *
      train;
    const sdStat =
      (((pokemon.stats[4].base_stat * 2 + genSD + evSd / 2) * pokeLevel) / 100 +
        5) *
      char *
      train;

    seHpStatResult(Math.round(hpStat));
    seAStatResult(Math.round(aStat));
    seDStatResult(Math.round(dStat));
    seSStatResult(Math.round(sStat));
    seSaStatResult(Math.round(saStat));
    seSdStatResult(Math.round(sdStat));
  };

  return (
    <div>
      <p>Test info. Doesn't work with Neophytes</p>

      <div style={{ display: 'flex', height: '150px' }}>
        <div>
          <p>Select number of pokemon</p>
          <div
            style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}
          >
            <input
              name='pokeNumber'
              type='number'
              value={pokeNumberForSearch}
              onChange={onChangePokeNumber}
              min={0}
              max={1008}
              step={1}
            />
            <button
              onClick={() => getPokemon(pokeNumberForSearch)}
              type='submit'
            >
              Load pokemon
            </button>
          </div>
        </div>

        <div style={{ marginLeft: '30px' }}>
          <p>
            {pokeName ? `Pokemon #${pokeNum} is ${pokeName}` : 'Choose pokemon'}
          </p>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {pokemon && (
              <div
                style={{
                  display: 'flex',
                  marginLeft: '10px',
                  alignItems: 'center',
                }}
              >
                <p>{pokemon?.sprites?.front_female ? '♂' : '♂/♀'}</p>
                <img alt='Pokemon sprite' src={pokemon.sprites.front_default} />
              </div>
            )}
            {pokemon?.sprites?.front_female && (
              <div
                style={{
                  display: 'flex',
                  marginLeft: '10px',
                  alignItems: 'center',
                }}
              >
                <p>♀</p>
                <img alt='Pokemon sprite' src={pokemon.sprites.front_female} />
              </div>
            )}
          </div>
        </div>
      </div>

      {pokemon && (
        <>
          <div style={{ display: 'flex', gap: '100px' }}>
            <div>
              <p>Stats</p>
              <p>hp - {pokemon.stats[0].base_stat}</p>
              <p>a - {pokemon.stats[1].base_stat}</p>
              <p>d - {pokemon.stats[2].base_stat}</p>
              <p>s - {pokemon.stats[5].base_stat}</p>
              <p>sa - {pokemon.stats[3].base_stat}</p>
              <p>sd - {pokemon.stats[4].base_stat}</p>
            </div>

            <div>
              <p>Genecode</p>
              <p>{`hp - ${genHP}`}</p>
              <p>{`a - ${genA}`}</p>
              <p>{`d - ${genD}`}</p>
              <p>{`s - ${genS}`}</p>
              <p>{`sa - ${genSA}`}</p>
              <p>{`sd - ${genSD}`}</p>
            </div>

            <div style={{ width: '100px' }}>
              <p>EV</p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '13px',
                }}
              >
                <p
                  style={{
                    display: 'flex',
                    margin: '0',
                    gap: '10px',
                    justifyContent: 'space-between',
                    width: '100px',
                  }}
                >
                  hp
                  <input
                    style={{ width: '50px' }}
                    type='number'
                    onChange={e => onEvChange('hp', e)}
                    value={evHP}
                  />
                </p>
                <p
                  style={{
                    display: 'flex',
                    margin: '0',
                    gap: '10px',
                    justifyContent: 'space-between',
                    width: '100px',
                  }}
                >
                  a
                  <input
                    style={{ width: '50px' }}
                    type='number'
                    onChange={e => onEvChange('a', e)}
                    value={evA}
                  />
                </p>
                <p
                  style={{
                    display: 'flex',
                    margin: '0',
                    gap: '10px',
                    justifyContent: 'space-between',
                    width: '100px',
                  }}
                >
                  d
                  <input
                    style={{ width: '50px' }}
                    type='number'
                    onChange={e => onEvChange('d', e)}
                    value={evD}
                  />
                </p>
                <p
                  style={{
                    display: 'flex',
                    margin: '0',
                    gap: '10px',
                    justifyContent: 'space-between',
                    width: '100px',
                  }}
                >
                  s
                  <input
                    style={{ width: '50px' }}
                    type='number'
                    onChange={e => onEvChange('s', e)}
                    value={evS}
                  />
                </p>
                <p
                  style={{
                    display: 'flex',
                    margin: '0',
                    gap: '10px',
                    justifyContent: 'space-between',
                    width: '100px',
                  }}
                >
                  sa
                  <input
                    style={{ width: '50px' }}
                    type='number'
                    onChange={e => onEvChange('sa', e)}
                    value={evSa}
                  />
                </p>
                <p
                  style={{
                    display: 'flex',
                    margin: '0',
                    gap: '10px',
                    justifyContent: 'space-between',
                    width: '100px',
                  }}
                >
                  sd
                  <input
                    style={{ width: '50px' }}
                    type='number'
                    onChange={e => onEvChange('sd', e)}
                    value={evSd}
                  />
                </p>
              </div>
            </div>

            <div>
              <p>Result stats</p>
              <p>{`hp - ${hpStatResult}`}</p>
              <p>{`a - ${aStatResult}`}</p>
              <p>{`d - ${dStatResult}`}</p>
              <p>{`s - ${sStatResult}`}</p>
              <p>{`sa -  ${saStatResult}`}</p>
              <p>{`sd - ${sdStatResult}`}</p>
            </div>
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
            <input />

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

            <p style={{ margin: '0', color: 'red' }}>Training</p>
            <input />
          </div>

          <div
            style={{
              display: 'flex',
              height: '20px',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <p>Enter genecode</p>
              <input
                style={{ width: '180px' }}
                name='pokeGenecode'
                type='string'
                value={tempGenecodeOfPokemon}
                onChange={onCountGenecode}
                placeholder='h0a0d0s0sa0sd0.100'
              />
            {!isGenCorrect && <p>Enter correct gen</p>}
            <button
              type='button'
              onClick={() => {
                tempGenecodeOfPokemon &&
                  setGenecodeOfPokemon(tempGenecodeOfPokemon);
              }}
            >
              Enter
            </button>
            <button onClick={() => countResultStats()}>See result stats</button>
            <button
              type='button'
              onClick={() => {
                setGenecodeOfPokemon('h0a0d0s0sa0sd0');
                setEvHP(0);
                setEvA(0);
                setEvD(0);
                setEvS(0);
                setEvSa(0);
                setEvSd(0);
                countResultStats();
                setPokeLevel(1);
              }}
            >
              Clear All Stats
            </button>
          </div>
          <p>For gen you can copy this: h0a0d0s0sa0sd0</p>
        </>
      )}
    </div>
  );
};

export default ContainerInfo;
