import { styled } from "styled-components";
import * as styles from "../../styles/variables";

export const WeatherPanelWrapper = styled.div`
  border: ${styles.BORDER_SIZE_SMALL} solid ${styles.PRIMARY_COLOR};
  padding: ${styles.SPACING_SMALL};
  border-radius: ${styles.BORDER_RADIUS_SIZE};
  width: 100%;
  margin: ${styles.SPACING_XSMALL} 0;
`;

export const WeatherPanelDetails = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const WeatherPanelImageWrapper = styled.div`
  width: 50%;
  padding: ${styles.SPACING_XSMALL};
`;

export const WeatherPanelImage = styled.img`
  min-height: 12rem;
`;

export const WeatherPanelSecondaryTitle = styled.h2`
  margin-top: ${styles.SPACING_SMEDIUM};
`;
