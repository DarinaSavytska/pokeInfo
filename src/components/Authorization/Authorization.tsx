import React, { useState, useContext } from 'react';
// components
import { Button } from '../Button';
import { Input } from '../Input';
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
    setShowError(false);
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    setAuthorization(password === 'smart');
    setShowError(password !== 'smart');
  };

  return (
    <S.AuthorizationContainer>
      <S.Title>{loc.ENTER_PASSWORD}</S.Title>
      <S.PasswordField>
        {showError && <S.Error onClick={e => e.stopPropagation()}>{loc.INCORRECT_PASSWORD}</S.Error>}
        <form>
          <Input
            name='password'
            type='password'
            autoComplete='off'
            value={password}
            onChange={onChangePassword}
            onKeyDown={e => e.key === 'Enter' && onSubmit()}
          />
        </form>
      </S.PasswordField>
      <Button onClick={onSubmit} type={ButtonType.Submit}>
        {loc.ENTER}
      </Button>
    </S.AuthorizationContainer>
  );
};
