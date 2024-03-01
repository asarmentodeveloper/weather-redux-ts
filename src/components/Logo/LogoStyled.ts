import { styled } from "styled-components";

export const mediumLogoSize = "10rem";
export const largeLogoSize = "12rem";

export const LogoStyled = styled.img<{ $size?: "medium" | "large" }>`
  max-width: ${(props) =>
    props.$size === "medium" ? mediumLogoSize : largeLogoSize};
  width: 100%;
`;
