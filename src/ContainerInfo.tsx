import React, { useState } from 'react';
// import { getPokemonByNumber } from './api/api';

async function getPokemonByNumber(id: number) {
  const pokeAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
    res => res.json()
  );

  return pokeAPI;
}

export const ContainerInfo: React.FC = () => {
  const [hpState, setHpState] = useState<number>(0);
  const [attackState, setAttackState] = useState<number>(0);
  const [result, setResult] = useState<number>();
  // const result: number = Number(hpState + atacState);
  const [isResultReady, setIsResultReady] = useState<boolean>(false);

  const [pokeNumber, setPokeNumber] = useState<number>(1);

  const [pokeName, setPokeName] = useState<string>();
  const [pokeNum, setPokeNum] = useState<number>();

  const getPokemon = async (number: number) => {
    const pokemon = await getPokemonByNumber(number);

    setPokeName(pokemon.forms[0].name);
    setPokeNum(pokemon.id);

    console.log(pokemon);
  };

  const onChangeHP = e => {
    setHpState(e.target.value);
  };

  const onChangeAttack = e => {
    setAttackState(e.target.value);
  };

  const onChangePkeNumber = e => {
    setPokeNumber(e.target.value);
  };

  // console.log('pokeName', pokeName);

  // const api = `https://pokeapi.co/api/v2/pokemon/${pokeNumber}`;

  // console.log(api);

  return (
    <div>
      <p>Test info. Don't work with neofits</p>
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
