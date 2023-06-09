import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface BadgesPropsType
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
