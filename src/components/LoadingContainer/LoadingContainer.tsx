import React, { FunctionComponent, ReactChildren, ReactChild } from "react";
import { LinearProgress } from "@material-ui/core";

type LoadingContainerProps = {
  isLoading: boolean;
  children: ReactChildren | ReactChild;
};

const LoadingContainer: FunctionComponent<LoadingContainerProps> = ({
  isLoading,
  children,
}) => (isLoading ? <LinearProgress /> : <>{children}</>);

export default LoadingContainer;
