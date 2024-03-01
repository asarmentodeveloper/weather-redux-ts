import { styled } from "styled-components";
import * as styles from "./variables/spacing";
import mediaQuery from "./CustomMediaQuery";

interface colProps {
  $size: number;
  $contentposition?: "end" | "start" | "center";
  $mobilefullSize?: boolean;
}

const gutter = styles.SPACING_SMEDIUM;
const gutter_small = styles.SPACING_XSMALL;

const colWidth = (size: number) => {
  switch (size) {
    case 12:
      return 100;
    case 11:
      return 91.66666667;
    case 10:
      return 83.33333333;
    case 9:
      return 75;
    case 8:
      return 66.66666667;
    case 7:
      return 58.33333333;
    case 6:
      return 50;
    case 5:
      return 41.66666667;
    case 4:
      return 33.33333333;
    case 3:
      return 25;
    case 2:
      return 16.66666667;
    case 1:
      return 8.33333333;
    default:
      return 0;
  }
};

export const Grid = styled.div`
  display: flex;
  padding-right: ${styles.SPACING_XSMALL};
  padding-left: ${styles.SPACING_XSMALL};
`;

export const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-right: calc(-${gutter} / 2);
  margin-left: calc(-${gutter} / 2);
  ${mediaQuery.tablet} {
    margin-right: calc(-${gutter_small} / 2);
    margin-left: calc(-${gutter_small} / 2);
  }
  ${mediaQuery.phone} {
    flex-wrap: wrap;
  }
`;

export const Col = styled.div<colProps>`
  box-sizing: border-box;
  flex: 0 0 auto;
  flex-grow: 1;
  flex-basis: ${(props) => colWidth(props.$size) + "%"};
  max-width: ${(props) => colWidth(props.$size) + "%"};
  margin-right: calc(${gutter} / 2);
  margin-left: calc(${gutter} / 2);
  display: flex;
  justify-content: ${(props) =>
    props.$contentposition ? props.$contentposition : "flex-start"};
  text-align: ${(props) =>
    props.$contentposition ? props.$contentposition : "start"};
  ${mediaQuery.tablet} {
    margin-right: calc(${gutter_small} / 2);
    margin-left: calc(${gutter_small} / 2);
  }
  
  ${mediaQuery.phone} {
    flex-basis: 100%;
    max-width:100%;
`;
