import { SphereSpinner } from "react-spinners-kit";
import * as styles from "../../styles/variables/colors";
import { SpinnerWrapper } from "./SpinnerStyled";

interface SpinnerProps {
  isLoading: boolean;
  size?: number;
}

export const Spinner = ({ isLoading, size }: SpinnerProps) => (
  <SpinnerWrapper>
    <SphereSpinner
      loadings={isLoading}
      color={styles.PRIMARY_COLOR_LIGHT}
      size={size ? size : 50}
    />
  </SpinnerWrapper>
);
