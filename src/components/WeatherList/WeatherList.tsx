import Icon from "react-icons-kit";
import { WeatherDataResult } from "../../types/weatherApi";
import { Button } from "../Button/Button";
import { arrowUp } from "react-icons-kit/feather/arrowUp";
import { arrowDown } from "react-icons-kit/feather/arrowDown";
import { wind } from "react-icons-kit/feather/wind";
import { Message } from "../Message/Message";
import {
  WeatherListItem,
  WeatherListItemDetails,
  WeatherListItemHeader,
  WeatherListWrapper,
} from "./WeatherListStyled";

interface WeatherListProps {
  cityLocationList: WeatherDataResult[];
  addToView: (cityName: string) => void;
  removeFromList: (cityId: number) => void;
  currentCityName: string | null;
}

export const WeatherList = ({
  cityLocationList,
  addToView,
  removeFromList,
  currentCityName,
}: WeatherListProps) => {
  return (
    <WeatherListWrapper>
      {cityLocationList.length > 0 ? (
        <ul>
          {cityLocationList.map((item: WeatherDataResult) => (
            <WeatherListItem key={item.id}>
              <WeatherListItemHeader>
                <p>{item.name}</p>
                <div>
                  <Button
                    type={"button"}
                    variant="green"
                    disabled={currentCityName === item.name}
                    onClick={() => addToView(item.name)}
                  >
                    view
                  </Button>
                  <Button
                    variant="green"
                    type={"button"}
                    onClick={() => removeFromList(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </WeatherListItemHeader>
              <WeatherListItemDetails>
                <div className="key">
                  <Icon icon={arrowUp} size={20} />
                  <span className="value">
                    {item.main.temp_max}
                    &deg;C
                  </span>
                </div>
                <div className="key">
                  <Icon icon={arrowDown} size={20} />
                  <span className="value">
                    {item.main.temp_min}
                    &deg;C
                  </span>
                </div>
                <div className="key">
                  <Icon icon={wind} size={20} className="icon" />
                  <span>Wind</span>
                </div>
                <div className="value">
                  <span>{item.wind.speed}kph</span>
                </div>
              </WeatherListItemDetails>
            </WeatherListItem>
          ))}
        </ul>
      ) : (
        <div>
          <Message type={"info"}>{`No city listed`}</Message>
        </div>
      )}
    </WeatherListWrapper>
  );
};
