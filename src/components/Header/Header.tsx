import { ReactNode } from "react";
import { Logo } from "../Logo/Logo";
import {
  HeaderContainer,
  LogoContainer,
  HeaderContentWrapper,
} from "./HeaderStyled";

interface HeaderProps {
  children: ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <HeaderContentWrapper>{children}</HeaderContentWrapper>
    </HeaderContainer>
  );
};
