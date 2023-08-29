import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';
import { ButtonType } from './types';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: ButtonType;
  onClick: () => void;
}

export const Button: React.FC<IButton> = ({ children, ...props }) => (
  <S.Button {...props}>{children}</S.Button>
);
