import React, { useState } from 'react';
import { getPokemonByNumber } from './api';

export const ContainerInfo: React.FC = () => {
  const [hpState, setHpState] = useState<number>(0);
  const [attackState, setAttackState] = useState<number>(0);
  const [result, setResult] = useState<number>();
  const [isResultReady, setIsResultReady] = useState<boolean>(false);

  const [pokeNumber, setPokeNumber] = useState<number>(1);

  const [pokeName, setPokeName] = useState<string>();
  const [pokeNum, setPokeNum] = useState<number>();

  const [pokemon, setPokemon] = useState<any>(null);




  const getPokemon = async (number: number) => {
    const pokemonFromAPI = await getPokemonByNumber(number);

    setPokeName(pokemonFromAPI.forms[0].name);
    setPokeNum(pokemonFromAPI.id);
    setPokemon(pokemonFromAPI);

    console.log(pokemonFromAPI);
  };

  const onChangeHP = (e: any) => {
    setHpState(e.target.value);
  };

  const onChangeAttack = (e: any) => {
    setAttackState(e.target.value);
  };

  const onChangePkeNumber = (e: any) => {
    setPokeNumber(e.target.value);
  };

  return (
    <div>
      <p>Test info. Don't work with Neophytes</p>
      <div>
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

        <div>
          <p>Poke number</p>
          <input
            name='pokeNumber'
            type='number'
            value={pokeNumber}
            onChange={onChangePkeNumber}
            min={0}
            max={1008}
            step={1}
          />
        </div>
      </div>

      <div>
        <button onClick={() => getPokemon(pokeNumber)}>Load pokemon</button>
        <p>
          {pokeName ? `Pokemon #${pokeNum} is ${pokeName}` : 'Choose pokemon'}
        </p>
      </div>

      {pokemon && (
        <img alt='Pokemon sprite' src={pokemon.sprites.front_default} />
      )}
      {pokemon?.sprites?.front_female && (
        <img alt='Pokemon sprite' src={pokemon.sprites.front_female} />
      )}

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

      <p>{isResultReady && `Result is ${result}`}</p>
    </div>
  );
};

export default ContainerInfo;
