import React, { useContext, useState } from 'react';
import { LocalizationContext } from '../../constants';
import { IPokemon } from '../../types';
import { Button} from '../Button';
import { ButtonType } from '../Button/types';

interface IPokemonMainInfo {
  getPokemon: (num: number) => void;
  pokemon: IPokemon;
}

export const PokemonMainInfo: React.FC<IPokemonMainInfo> = ({ getPokemon, pokemon }) => {
  const loc = useContext(LocalizationContext);

  const [pokeNumberForSearch, setPokeNumberForSearch] = useState<number>(1);
  const pokemonName = pokemon?.forms[0].name;

  const onChangePokeNumber = (e: any) => {
    const num = (e.target.value > 1008 && 1008) || (e.target.value < 0 && 0) || e.target.value;

    setPokeNumberForSearch(num);
  };

  return (
    <div style={{ display: 'flex', height: '150px' }}>
      <div>
        <p>{loc.SELECT_NUMBER_OF_POKEMON}</p>
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
          <input
            name='pokeNumber'
            type='number'
            value={pokeNumberForSearch}
            onChange={onChangePokeNumber}
            min={0}
            max={1008}
            step={1}
          />
          <Button onClick={() => getPokemon(pokeNumberForSearch)} type={ButtonType.Submit}>
            {loc.LOAD_POKEMON}
          </Button>
        </div>
      </div>

      <div style={{ marginLeft: '30px' }}>
        <p>{pokemonName ? `Pokemon #${pokemon.id} is ${pokemonName}` : 'Choose pokemon'}</p>

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
  );
};
