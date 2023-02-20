import React, { useState } from 'react';
import { getPokemonByNumber } from './api';

export const ContainerInfo: React.FC = () => {
  const [pokeNumberForSearch, setPokeNumberForSearch] = useState<number>(1);
  const [pokemon, setPokemon] = useState<any>(null);

  const [hpState, setHpState] = useState<number>(0);
  const [attackState, setAttackState] = useState<number>(0);
  const [result, setResult] = useState<number>();
  const [isResultReady, setIsResultReady] = useState<boolean>(false);

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

  const onCountGenecode = (e: any) => {
    setTempGenecodeOfPokemon(e.target.value);
  };

  // const onChangeHP = (e: any) => {
  //   setHpState(e.target.value);
  // };

  // const onChangeAttack = (e: any) => {
  //   setAttackState(e.target.value);
  // };

  const onChangePokeNumber = (e: any) => {
    setPokeNumberForSearch(e.target.value);
  };

  return (
    <div>
      <p>Test info. Don't work with Neophytes</p>

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
            <button onClick={() => getPokemon(pokeNumberForSearch)}>
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
              <p>
                {`hp - ${
                  Number(genecodeOfPokemon?.split('h')[1].split('a')[0]) || 0
                }`}
              </p>
              <p>{`a - ${
                Number(genecodeOfPokemon?.split('a')[1].split('d')[0]) || 0
              }`}</p>
              <p>{`d - ${
                Number(genecodeOfPokemon?.split('d')[1].split('s')[0]) || 0
              }`}</p>
              <p>{`s - ${
                Number(genecodeOfPokemon?.split('s')[1].split('sa')[0]) || 0
              }`}</p>
              <p>{`sa - ${
                Number(genecodeOfPokemon?.split('sa')[1].split('sd')[0]) || 0
              }`}</p>
              <p>{`sd - ${
                Number(genecodeOfPokemon?.split('sd')[1].split('.')[0]) || 0
              }`}</p>
            </div>
          </div>

          {/* <div>
            <div>
              <p>HP</p>
              <input
                name='hpState'
                type='number'
                min={0}
                step={1}
                value={hpState}
                onChange={onChangeHP}
              />
            </div>
            <div>
              <p>Attack</p>
              <input
                name='attackState'
                type='number'
                min={0}
                step={1}
                value={attackState}
                onChange={onChangeAttack}
              />
            </div>
          </div>

          <button
            style={{ margin: '20px' }}
            type='button'
            onClick={() => {
              setResult(Number(hpState) + Number(attackState));
              setIsResultReady(true);
            }}
          >
            Result
          </button>

          <p>{isResultReady && `Result is ${result}`}</p> */}

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
              name='pokeGenecode'
              type='string'
              value={tempGenecodeOfPokemon}
              onChange={onCountGenecode}
            />
            <button
              type='button'
              onClick={() => setGenecodeOfPokemon(tempGenecodeOfPokemon)}
            >
              Enter
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ContainerInfo;
