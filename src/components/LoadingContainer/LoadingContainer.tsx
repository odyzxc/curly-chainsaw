import React, { FunctionComponent, ReactChildren, ReactChild } from "react";
import { CircularProgress } from "@material-ui/core";
import { CenteredContainer } from "./styled";

type LoadingContainerProps = {
  isLoading: boolean;
  children: ReactChildren | ReactChild | Element[];
  size?: number;
};

const LoadingContainer: FunctionComponent<LoadingContainerProps> = ({
  isLoading,
  children,
  size = 200,
}) =>
  isLoading ? (
    <CenteredContainer>
      <CircularProgress size={size} />
    </CenteredContainer>
  ) : (
    <>{children}</>
  );

export default LoadingContainer;
