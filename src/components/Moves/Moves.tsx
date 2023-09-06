import React, { useContext } from 'react';
// components
// styles
// other
import { IPokemon } from 'types';
import { LocalizationContext } from '../../constants';

interface IMoves {
  pokemon: IPokemon;
}

export const Moves: React.FC<IMoves> = ({ pokemon }) => {
  const loc = useContext(LocalizationContext);

  return (
    <p>
      {loc.TEMP_INFO} {pokemon?.name}
    </p>
  );
};
