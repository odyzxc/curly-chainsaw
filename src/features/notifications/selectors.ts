import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

const getNotificationsState = (state: RootState) => state.notifications;

export const isOpen = createSelector(
  getNotificationsState,
  (state) => state.open
);
export const getMessage = createSelector(
  getNotificationsState,
  (state) => state.message
);
export const getSeverity = createSelector(
  getNotificationsState,
  (state) => state.severity
);
