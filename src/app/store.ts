import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import usersDataReducer from '../features/users/usersDataSlice';
import usersLoadingStatusReducer from '../features/users/usersLoadingStatusSlice';

export const store = configureStore({
  reducer: {
    users: combineReducers({
      data: usersDataReducer,
      loadingStatus: usersLoadingStatusReducer
    }),
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
