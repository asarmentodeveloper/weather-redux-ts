import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HOST_NAME, APP_ID } from "../../config/config";
import { WeatherDataResult, WeatherDataRequest } from "../../types/weatherApi";

export const apiWeatherSlice = createApi({
  reducerPath: "weather",
  baseQuery: fetchBaseQuery({
    baseUrl: `${HOST_NAME}/data/2.5`,
  }),
  endpoints(builder) {
    return {
      fetchWeather: builder.query<WeatherDataResult, WeatherDataRequest>({
        query(obj) {
          return `/weather?q=${obj.cityLocation}&units=metric&APPID=${APP_ID}`;
        },
      }),
    };
  },
});

export const { useFetchWeatherQuery } = apiWeatherSlice;
