import { useEffect, useState } from "react";
import { WeatherDataResult } from "../types/weatherApi";

export function useCityList(data: WeatherDataResult | null) {
  const [cityLocationList, setCityLocationList] = useState<WeatherDataResult[]>(
    []
  );

  const [isAddListBtnDisabled, setIsAddListBtnDisabled] = useState(false);

  useEffect(() => {
    handleIsAddListBtnDisabled(data, cityLocationList);
  }, [data, cityLocationList]);

  const handleIsAddListBtnDisabled = (
    currentCity: WeatherDataResult | null,
    cityList: WeatherDataResult[]
  ) => {
    let isDisabled = !currentCity;

    if (currentCity) {
      isDisabled =
        currentCity && cityList.some((item) => item.id === currentCity.id);
    }
    setIsAddListBtnDisabled(isDisabled);
  };

  const handleAddCityLocationList = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    data && setCityLocationList([...cityLocationList, data]);
  };

  const handleRemoveCityFromList = (cityId: number) => {
    const newList = cityLocationList.filter(
      (item: WeatherDataResult) => item.id !== cityId
    );
    setCityLocationList(newList);
  };
  return {
    cityLocationList,
    handleRemoveCityFromList,
    handleAddCityLocationList,
    isAddListBtnDisabled,
  };
}
