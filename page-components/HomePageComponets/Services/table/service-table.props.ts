import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ServiceTablePropsType
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  activeService: string;
}
