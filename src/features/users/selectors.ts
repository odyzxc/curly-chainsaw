import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { AsyncStates } from "../../constants/AsyncStates";
import { User } from "./types";

const getUsersState = (state: RootState) => state.users;

const getUsersDataState = createSelector(getUsersState, (state) => state.data);
const getUsersLoadingStatusState = createSelector(
  getUsersState,
  (state) => state.loadingStatus
);

export const isUsersDataLoading = createSelector(
  getUsersLoadingStatusState,
  (state) =>
    state.status === AsyncStates.Pending || state.status === AsyncStates.Idle
);
export const isUsersDataLoaded = createSelector(
  getUsersLoadingStatusState,
  (state) => state.status === AsyncStates.Resolved
);

const getUsersData = createSelector(getUsersDataState, (state) => state.users);

export const getFilteredUsersData = (searchTerm: string) =>
  createSelector(getUsersData, (state) =>
    state.filter(
      (user) => user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    )
  );
