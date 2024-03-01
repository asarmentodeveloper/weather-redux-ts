import { styled } from "styled-components";
import * as styles from "../../styles/variables";

export const WeatherListWrapper = styled.div`
  padding: 0;
  border-radius: ${styles.BORDER_RADIUS_SIZE};
  width: 100%;
`;

export const WeatherListItem = styled.li`
  display: inline-block;
  margin-left: 0;
  border-bottom: ${styles.BORDER_SIZE_SMALL} solid ${styles.PRIMARY_COLOR};
  padding: ${styles.SPACING_XSMALL} 0;
  &:hover {
    background-color: ${styles.COLOR_INFO_XXLIGHT};
  }
  width: 100%;
`;
export const WeatherListItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${styles.SPACING_XSMALL};
`;

export const WeatherListItemDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${styles.SPACING_XXSMALL} 0;
`;
