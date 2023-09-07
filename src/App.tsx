import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// components
import { ContainerInfo, Authorization, Moves } from './components';
// styles
import * as S from './styled';
// other
import { ILoc, engLoc, uaLoc } from './loc';
import { LocalizationContext } from './constants';
import { UAflagSVG, UKflagSVG } from './assets';
import { IPokemon } from './types';
import { getPokemonByNumber } from './api';


export const App: React.FC = () => {
  const [loc, setLoc] = useState<ILoc>(engLoc);
  const [authorization, setAuthorization] = useState(false);
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);

  const getPokemon = async (number: number) => {
    const pokemonFromAPI = await getPokemonByNumber(number);

    setPokemon(pokemonFromAPI);
  };

  // подключить Private Routes

  return (
    <LocalizationContext.Provider value={loc}>
      <S.Container>
        <Router>
          {authorization ? (
            <S.NavigationContainer>
              <S.Navigation>
                <S.StyledLink to='pokeInfo/'>{loc.MAIN_PAGE}</S.StyledLink>
                <S.StyledLink to='pokeInfo/moves'>{loc.MOVES}</S.StyledLink>
              </S.Navigation>
              <Routes>
                <Route
                  path='pokeInfo/'
                  element={<ContainerInfo pokemon={pokemon as IPokemon} getPokemon={getPokemon} />}
                />
                <Route path='pokeInfo/moves' element={<Moves pokemon={pokemon as IPokemon} />} />
              </Routes>
            </S.NavigationContainer>
          ) : (
            <Authorization setAuthorization={setAuthorization} />
          )}
          <S.FlagContainer>
            <S.Flag onClick={() => setLoc(engLoc)}>
              <UKflagSVG />
            </S.Flag>
            <S.Flag onClick={() => setLoc(uaLoc)}>
              <UAflagSVG />
            </S.Flag>
          </S.FlagContainer>
        </Router>
      </S.Container>
    </LocalizationContext.Provider>
  );
};
