import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import usersDataReducer from "../features/users/usersDataSlice";
import usersLoadingStatusReducer from "../features/users/usersLoadingStatusSlice";
import notificationsReducer from '../features/notifications/notificationsSlice';

export const store = configureStore({
  reducer: {
    users: combineReducers({
      data: usersDataReducer,
      loadingStatus: usersLoadingStatusReducer,
    }),
    notifications: notificationsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;
