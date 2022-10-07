import React, { useEffect, useState } from "react";
import weather from "../../test/weather.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFavorites } from "../services/back-end/getFavorites";
import { updateWeather } from "../services/back-end/updateWeather";
import { timerOfUpdate } from "../tools/timerOfUpdate";

export const WeatherContext = React.createContext({});
export const WeatherProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  var updateble = false;
  const getData = async () => {
    await getFavorites().then(async (res) => {
      await setFavorites(res.favorites);
      /*  updateble = await timerOfUpdate(res.lastUpdateWeather); */
      console.log(typeof res.favorites, "res.lastUpdateWeather");
    });
    /*  if (updateble) {
      await updateWeather(favorites);
    } */
  };
  const [tokenStatus, setTokenStatus] = useState(false);
  const weatherApi = weather;
  const dateNow = new Date().getHours();
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
