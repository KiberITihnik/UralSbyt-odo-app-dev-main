import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';

//props for Solutions, Analysis, Paper, Enroll, Reviews,Services, Team
export interface PageComponentPropsType
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  bgColor?: string;
}

// props for Broker
export interface BrokerPropsType
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  bgColor?: string;
  active?: boolean;
  setActive?: Dispatch<SetStateAction<boolean>>;
}
