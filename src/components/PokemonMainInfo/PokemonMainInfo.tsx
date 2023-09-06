import React, { useContext, useState } from 'react';
// components
import { Input } from '../Input';
import { Button } from '../Button';
// styles
import * as S from './styled';
// other
import { IPokemon } from '../../types';
import { ButtonType } from '../Button/types';
import { LocalizationContext } from '../../constants';

interface IPokemonMainInfo {
  getPokemon: (num: number) => void;
  pokemon: IPokemon;
}

export const PokemonMainInfo: React.FC<IPokemonMainInfo> = ({ getPokemon, pokemon }) => {
  const loc = useContext(LocalizationContext);

  const [pokeNumberForSearch, setPokeNumberForSearch] = useState<number>(pokemon?.id || 1);
  const pokemonName = pokemon?.forms[0].name;

  const onChangePokeNumber = (e: any) => {
    const num = (e.target.value > 1008 && 1008) || (e.target.value < 0 && 0) || Number(e.target.value);

    setPokeNumberForSearch(num);
  };

  return (
    <S.Container>
      <S.ControleContainer>
        <S.ControlInfo>{loc.SELECT_NUMBER_OF_POKEMON}</S.ControlInfo>
        <S.ControleElements>
          <Input
            name='pokeNumber'
            type='number'
            value={parseInt(pokeNumberForSearch.toString(), 10).toString()}
            onChange={onChangePokeNumber}
            onKeyDown={e => e.key === 'Enter' && getPokemon(pokeNumberForSearch)}
            min={0}
            max={1008}
            step={1}
          />
          <Button onClick={() => getPokemon(pokeNumberForSearch)} type={ButtonType.Submit}>
            {loc.LOAD_POKEMON}
          </Button>
        </S.ControleElements>
      </S.ControleContainer>

      <S.PokemonContainer>
        <S.PokemonName>
          {pokemonName && `${loc.POKEMON_NUM + pokemon.id} ${loc.IS} ${pokemonName}`}
        </S.PokemonName>

        <S.PokemonImgContainer>
          {pokemon && (
            <S.PokemonImg>
              <p>{pokemon?.sprites?.front_female ? '♂' : '♂/♀'}</p>
              <img alt='Pokemon sprite' src={pokemon.sprites.front_default} />
            </S.PokemonImg>
          )}
          {pokemon?.sprites?.front_female && (
            <S.PokemonImg>
              <p>♀</p>
              <img alt='Pokemon sprite female' src={pokemon.sprites.front_female} />
            </S.PokemonImg>
          )}
        </S.PokemonImgContainer>
      </S.PokemonContainer>
    </S.Container>
  );
};
