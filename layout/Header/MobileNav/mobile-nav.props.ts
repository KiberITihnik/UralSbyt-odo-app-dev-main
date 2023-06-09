import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MenuMobileProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  active: boolean;
  setActive: any;
}
