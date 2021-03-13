import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersFailure, fetchUsersSuccess } from "../users/commonActions";

enum SnackbarSeverity {
  SUCCESS = "success",
  ERROR = "error",
}

type NotificationState = {
  open: boolean;
  message: string;
  severity?: SnackbarSeverity;
};

const initialState: NotificationState = {
  open: false,
  message: "",
  severity: undefined,
};

// naive implementation - can show only one notification
const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    closeNotification: (state) => {
      state.open = false;
      state.message = "";
      state.severity = undefined;
    },
  },
  extraReducers: {
    [fetchUsersFailure.toString()]: (state) => {
      state.open = true;
      state.message = "Failed to load users.";
      state.severity = SnackbarSeverity.ERROR;
    },
    [fetchUsersSuccess.toString()]: (state) => {
      state.open = true;
      state.message = "Users loaded successfully.";
      state.severity = SnackbarSeverity.SUCCESS;
    },
  },
});

export default notificationSlice.reducer;

export const { closeNotification } = notificationSlice.actions;
