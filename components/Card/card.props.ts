import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CardSolutionType } from '../../types/types';

export interface CardPropsType
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'BIG' | 'SMALL';
  card: CardSolutionType;
}
