export interface WeatherDataRequest {
  cityLocation: string;
  // unitTemperature: string;
}

export interface WeatherData {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherDataResult {
  base: string;
  clouds: {
    all: number;
  };
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    surise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: WeatherData[];
  wind: {
    speed: number;
    deg: number;
  };
}
