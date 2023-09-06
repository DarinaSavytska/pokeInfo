import React, { useState } from 'react';
// components
import ContainerInfo from './components/ContainerInfo';
// styles
import * as S from './styled';
// other
import { ILoc, engLoc, uaLoc } from './loc';
import { LocalizationContext } from './constants';
import { UAflagSVG, UKflagSVG } from './assets';

export const App: React.FC = () => {
  const [loc, setLoc] = useState<ILoc>(engLoc);

  return (
    <LocalizationContext.Provider value={loc}>
      <S.Container>
        <ContainerInfo />
        <div>
          <S.Flag onClick={() => setLoc(engLoc)}>
            <UKflagSVG />
          </S.Flag>
          <S.Flag onClick={() => setLoc(uaLoc)}>
            <UAflagSVG />
          </S.Flag>
        </div>
      </S.Container>
    </LocalizationContext.Provider>
  );
};
