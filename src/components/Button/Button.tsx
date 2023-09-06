import React, { ButtonHTMLAttributes } from 'react';
// styles
import * as S from './styled';
// other
import { ButtonType } from './types';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: ButtonType;
}

export const Button: React.FC<IButton> = ({ children, ...props }) => (
  <S.Button {...props}>{children}</S.Button>
);
