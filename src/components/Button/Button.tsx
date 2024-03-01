import { ButtonStyled } from "./ButtonStyled";
export type ButtonVariant = "green" | "default";

export interface ButtonProps
  extends Omit<React.ComponentPropsWithoutRef<"button">, "type"> {
  type: "submit" | "button";
  variant?: ButtonVariant;
}

export const Button = (props: ButtonProps) => {
  return <ButtonStyled {...props} />;
};
