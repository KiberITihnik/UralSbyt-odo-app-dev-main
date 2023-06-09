import { ButtonHTMLAttributes } from "react";

export interface ButtonPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  fill?: boolean;
  big?: boolean;
  invert?: boolean;
}
