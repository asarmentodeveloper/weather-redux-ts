import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter-slice';
import {apiWeatherSlice} from '../features/weather/weather-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiWeatherSlice.reducerPath]: apiWeatherSlice.reducer,
  },
    middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiWeatherSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;