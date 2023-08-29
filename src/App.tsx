import React, { useState } from 'react';
import ContainerInfo from './components/ContainerInfo';
import { ILoc } from 'loc/types/ILoc';
import { engLoc } from 'loc/en_us';
import { uaLoc } from 'loc/uk_ua';
import { LocalizationContext } from 'constants/contexts';
import { Button } from 'components/Button/Button';
import { ButtonType } from 'components/Button/types/enums/ButtonType';

const App: React.FC = () => {
  const [loc, setLoc] = useState<ILoc>(engLoc);

  return (
    <LocalizationContext.Provider value={loc}>
      <Button type={ButtonType.Button} onClick={() => setLoc(engLoc)}>
        eng
      </Button>
      <Button type={ButtonType.Button} onClick={() => setLoc(uaLoc)}>
        ua
      </Button>
      <ContainerInfo />
    </LocalizationContext.Provider>
  );
};

export default App;
