import { styled } from "styled-components";
import * as styles from "../../styles/variables";
import { MessageType } from "./Message";

export const MessageStyled = styled.div<{ $type: MessageType }>`
  position: relative;
  display: flex;
  border: ${styles.BORDER_SIZE_SMALL} solid
    ${(props) =>
      props.$type === "info"
        ? styles.PRIMARY_COLOR
        : styles.COLOR_DANGEROUS_DARK};
  margin: ${styles.SPACING_XSMALL} 0;
  padding: ${styles.SPACING_XSMALL} ${styles.SPACING_XSMALL}
    ${styles.SPACING_XSMALL} 4rem;
  border-radius: ${styles.BORDER_RADIUS_SIZE};
  background: ${(props) =>
    props.$type === "info"
      ? styles.PRIMARY_COLOR_XLIGHT
      : styles.COLOR_DANGEROUS_LIGHT};
  width: 100%;
`;

export const IconContainer = styled.div`
  position: absolute;
  left: ${styles.SPACING_XSMALL};
  top: 0.8rem;
`;
