import logo from "../../assets/logo.svg";
import { LogoStyled } from "./LogoStyled";

interface LogoProps {
  size?: "medium" | "large";
}

export const Logo = ({ size = "medium" }: LogoProps) => {
  return <LogoStyled src={logo} alt="AS Logo" $size={size} />;
};
