import React, { useEffect, useState } from "react";
import weather from "../../test/weather.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFavorites } from "../services/getFavorites";

export const WeatherContext = React.createContext({});
export const WeatherProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const getData = async () => {
    getFavorites().then((res) => {
      setFavorites(res);
    });
  };
  const [tokenStatus, setTokenStatus] = useState(false);
  const weatherApi = weather;
  const dateNow = 18; /* new Date().getHours(); */
  const temp = weatherApi.current.temp_c.toFixed(0);
  const description = weatherApi.current.condition.text;
  const conditionCode = weatherApi.current.condition.code;
  const cityName = weatherApi.location.name;
  const max = weatherApi.forecast.forecastday[0].day.maxtemp_c.toFixed(0);
  const min = weatherApi.forecast.forecastday[0].day.mintemp_c.toFixed(0);
  const humidity = weatherApi.current.humidity.toFixed(0);
  const windSpeed = weatherApi.current.wind_kph.toFixed(0);
  const sunRise = "07:00 AM";
  const forecastDay = weatherApi.forecast.forecastday[0].hour;
  const forecastWeak = weatherApi.forecast.forecastday;
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <WeatherContext.Provider
        value={{
          description,
          conditionCode,
          dateNow,
          cityName,
          max,
          min,
          temp,
          humidity,
          windSpeed,
          sunRise,
          forecastDay,
          forecastWeak,
          tokenStatus,
          setTokenStatus,
          favorites,
          setFavorites,
          getData,
        }}
      >
        {props.children}
      </WeatherContext.Provider>
    </>
  );
};
