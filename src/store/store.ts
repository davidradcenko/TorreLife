import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from '../slices/locationsSlice';
import postsSlice from '../slices/postsSlice';

export const store = configureStore({
  reducer: {
    locations: locationsReducer,
    posts:postsSlice
  }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store=store