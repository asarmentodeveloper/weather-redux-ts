import { WeatherDataResult } from "../../types/weatherApi";
import {
  WeatherPanelDetails,
  WeatherPanelImage,
  WeatherPanelImageWrapper,
  WeatherPanelSecondaryTitle,
  WeatherPanelWrapper,
} from "./WeatherPanelStyled";

interface WeatherPanelProps {
  data: WeatherDataResult;
}

export const WeatherPanel = ({ data }: WeatherPanelProps) => {
  return (
    <WeatherPanelWrapper>
      <h1>{data.name}</h1>

      <WeatherPanelDetails>
        <WeatherPanelImageWrapper>
          <WeatherPanelImage
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="icon"
          />
        </WeatherPanelImageWrapper>
        <WeatherPanelSecondaryTitle>
          {data.main.temp}&deg;
        </WeatherPanelSecondaryTitle>
      </WeatherPanelDetails>

      <h4 className="description">{data.weather[0].description}</h4>
    </WeatherPanelWrapper>
  );
};
