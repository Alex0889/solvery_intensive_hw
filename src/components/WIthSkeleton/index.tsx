import React from "react";

export type WithSkeletonProps = {
  readonly isLoading: boolean;
  readonly isEmpty: boolean;
  readonly error: string | undefined;

  readonly skeletonSlot?: React.ReactNode;
  readonly emptySpaceSlot?: React.ReactNode;
  readonly errorSlot?: React.ReactNode;
};

export const WithSkeleton: React.FC<WithSkeletonProps> = (
  {
    isLoading,
    isEmpty,
    error,

    skeletonSlot,
    emptySpaceSlot,
    errorSlot,
    children,
  }) => {
  if (!isEmpty && !isLoading && !error) {
    return <>{children}</>;
  }

  if (isLoading) {
    return <>{skeletonSlot || "loading..."}</>;
  }

  if (!isLoading && isEmpty && !error) {
    return <>{emptySpaceSlot || "no data provided"}</>;
  }

  if (error) {
    return <>{errorSlot || "Something went wrong"}</>;
  }

  return <>{error}</>;
};
