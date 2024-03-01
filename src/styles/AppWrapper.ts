import { styled } from "styled-components";
import mediaQuery from "./CustomMediaQuery";

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 992px;
  ${mediaQuery.tablet} {
  }

  ${mediaQuery.phone} {
  }
`;
