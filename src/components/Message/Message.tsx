import { ReactNode } from "react";
import Icon from "react-icons-kit";
import { x } from "react-icons-kit/iconic/x";
import { alertTriangle } from "react-icons-kit/feather/alertTriangle";
import { IconContainer, MessageStyled } from "./MessageStyled";

export type MessageType = "info" | "error";

interface MessageProps {
  type: MessageType;
  children: ReactNode;
}
export const Message = ({ type, children }: MessageProps) => {
  const iconSymbol = type === "info" ? alertTriangle : x;

  return (
    <MessageStyled $type={type}>
      <IconContainer>
        <Icon icon={iconSymbol} size={20} />
      </IconContainer>
      {children}
    </MessageStyled>
  );
};
