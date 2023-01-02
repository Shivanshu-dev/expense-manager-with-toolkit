import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import expenseReducer from './slices/expenseSlice';


export const store = configureStore({
    reducer: {
        userData:userReducer,
        expenseData: expenseReducer
    },
  })


export const RootState = store.getState;

export const AppDispatch = store.dispatch;