import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export interface FooterContactProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, any> {
  label: string;
  link: string;
}
