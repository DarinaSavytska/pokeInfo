import React, { InputHTMLAttributes } from 'react';
// styles
import * as S from './styled';

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = props => <S.Input {...props} />;
