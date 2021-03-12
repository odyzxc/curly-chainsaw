import { createSlice } from "@reduxjs/toolkit";

import { AsyncStates } from "../../constants/AsyncStates";
import { fetchUsersSuccess, fetchUsersFailure } from './commonActions';

const initialState = {
  status: AsyncStates.Idle,
};

const usersLoadingStatusSlice = createSlice({
  name: "users/lodaingStatus",
  initialState,
  reducers: {
    fetchUsersRequested: (state) => {
      state.status = AsyncStates.Pending;
    },
  },
  extraReducers: {
    [fetchUsersSuccess.toString()]: (state) => {
      state.status = AsyncStates.Resolved;
    },
    [fetchUsersFailure.toString()]: (state) => {
      state.status = AsyncStates.Rejected;
    },
  },
});

export default usersLoadingStatusSlice.reducer;

export const { fetchUsersRequested } = usersLoadingStatusSlice.actions;
