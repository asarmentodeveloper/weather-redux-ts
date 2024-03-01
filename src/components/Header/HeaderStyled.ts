import { styled } from "styled-components";
import * as styles from "../../styles/variables";
import { mediumLogoSize } from "../Logo/LogoStyled";
import mediaQuery from "../../styles/CustomMediaQuery";

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  padding: ${styles.SPACING_SMEDIUM} ${styles.SPACING_XSMALL}
    ${styles.SPACING_XSMALL};
  display: flex;
  margin-bottom: ${styles.SPACING_LMEDIUM};
  background: ${styles.COLOR_WHITE};
  border-bottom: ${styles.BORDER_SIZE_SMALL} solid ${styles.PRIMARY_COLOR_DARK}; /* 3 */
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: ${styles.SPACING_XSMALL};
  padding: 0 ${styles.SPACING_XXSMALL};
  background: ${styles.COLOR_WHITE};
`;

export const HeaderContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${styles.MEDIA_QUERY_DESKTOP}px;
  ${mediaQuery.ldesktop} {
    padding-left: calc(${mediumLogoSize} + ${styles.SPACING_XSMALL});
  }
`;
