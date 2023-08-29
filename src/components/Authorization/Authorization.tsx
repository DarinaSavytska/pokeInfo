import React, { useState, useContext } from 'react';
// components
import { Button } from '../Button';
// styles
import * as S from './styled';
// other
import { LocalizationContext } from '../../constants';
import { ButtonType } from '../Button/types';

interface IAuthorization {
  setAuthorization: (confirm: boolean) => void;
}

export const Authorization: React.FC<IAuthorization> = ({ setAuthorization }) => {
  const loc = useContext(LocalizationContext);

  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <S.AuthorizationContainer>
      <S.Title>{loc.ENTER_PASSWORD}</S.Title>
      <S.PasswordField>
        {showError && <S.Error>{loc.INCORRECT_PASSWORD}</S.Error>}
        <input
          name='password'
          type='password'
          value={password}
          onChange={onChangePassword}
          onClick={() => setShowError(false)}
        />
      </S.PasswordField>
      <Button
        onClick={() => {
          setAuthorization(password === 'smart');
          setShowError(password !== 'smart');
        }}
        type={ButtonType.Submit}
      >
        {loc.ENTER}
      </Button>
    </S.AuthorizationContainer>
  );
};
