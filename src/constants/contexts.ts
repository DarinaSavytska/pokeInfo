import { createContext } from 'react';
import { ILoc } from 'loc/types/ILoc';
import { engLoc } from 'loc/en_us';

export const LocalizationContext = createContext<ILoc>(engLoc);
