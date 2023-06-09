import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export interface TypoPropsType
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  txtStyle: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
}
