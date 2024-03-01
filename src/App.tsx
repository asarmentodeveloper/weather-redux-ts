import { useFetchWeatherQuery } from "./features/weather/weather-slice";

import { AppWrapper } from "./styles/AppWrapper";
import { Header } from "./components/Header/Header";
import { Col, Grid, Row } from "./styles/Grid";
import { InputSearch } from "./components/InputSearch/InputSearch";
import { Button } from "./components/Button/Button";
import { Spinner } from "./components/Spinner/Spinner";
import { Message } from "./components/Message/Message";
import { WeatherPanel } from "./components/WeatherPanel/WeatherPanel";
import { WeatherList } from "./components/WeatherList/WeatherList";
import { useCurrentCity } from "./hooks/useCurrentCity";
import { useCityList } from "./hooks/useCityList";

function App() {
  //const [unitTemperature, setUnitTemperature] = useState("metric"); // TODO: metric = C and imperial = F

  const { cityLocation, setCityLocation, debouncedCityLocation } =
    useCurrentCity();

  const {
    data = null,
    isFetching,
    isLoading,
    isError,
  } = useFetchWeatherQuery({
    cityLocation: debouncedCityLocation,
  });

  const {
    handleAddCityLocationList,
    isAddListBtnDisabled,
    cityLocationList,
    handleRemoveCityFromList,
  } = useCityList(data);

  return (
    <>
      <Header>
        <form
          autoComplete="off"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
            handleAddCityLocationList(e)
          }
        >
          <Grid>
            <Row>
              <Col $size={7} $contentposition="end">
                <InputSearch
                  value={cityLocation}
                  isFetching={isFetching}
                  onChange={(e) => setCityLocation(e.target.value)}
                  placeholder="Enter City"
                />
              </Col>
              <Col $size={5} $contentposition="end">
                <Button type="submit" disabled={isAddListBtnDisabled}>
                  Add City to List
                </Button>
              </Col>
            </Row>
          </Grid>
        </form>
      </Header>
      <AppWrapper>
        <Grid>
          <Row>
            {isLoading ? (
              <Col $size={12}>
                <Spinner isLoading={isLoading} />
              </Col>
            ) : (
              <>
                <Col $size={6} $mobilefullSize={true}>
                  {isError || !data ? (
                    <div>
                      <Message
                        type={"info"}
                      >{`No city data to display`}</Message>
                    </div>
                  ) : (
                    <WeatherPanel data={data} />
                  )}
                </Col>
                <Col $size={6} $mobilefullSize={true}>
                  <WeatherList
                    cityLocationList={cityLocationList}
                    addToView={setCityLocation}
                    removeFromList={handleRemoveCityFromList}
                    currentCityName={data && data.name}
                  />
                </Col>
              </>
            )}
          </Row>
        </Grid>
      </AppWrapper>
    </>
  );
}

export default App;
