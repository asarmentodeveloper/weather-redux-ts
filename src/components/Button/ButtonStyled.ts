import { styled } from "styled-components";
import { ButtonVariant } from "./Button";
import * as styles from "../../styles/variables";

const variantStyles = (variant: ButtonVariant) => {
  if (variant === "green") {
    return `background: ${styles.TERTIARY_COLOR}; 
    &:hover {
        background: ${styles.TERTIARY_COLOR_DARK};
      } &:active {
        background: ${styles.TERTIARY_COLOR_XDARK};
      }`;
  }
};

export const ButtonStyled = styled.button<{ variant?: ButtonVariant }>`
  ${(props) => props.variant === "green" && variantStyles("green")};
`;
