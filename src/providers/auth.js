import React, { useEffect, useState } from "react";
import weather from "../../test/weather.json";
import { getFavorites } from "../services/back-end/getFavorites";
import { getMainCity } from "../services/back-end/getMainCity";
import { updateWeather } from "../services/back-end/updateWeather";
import { timerOfUpdate } from "../tools/timerOfUpdate";

export const WeatherContext = React.createContext({});
export const WeatherProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [mainCity, setMainCity] = useState({});
  var updateble = false;
  const getData = async () => {
    await getFavorites().then(async (res) => {
      await setFavorites(res.favorites);
      /*  updateble = await timerOfUpdate(res.lastUpdateWeather); */
      console.log(typeof res.favorites, "res.lastUpdateWeather");
    });
    await getMainCity().then((res) => {
      if (typeof res == "object") {
        setMainCity(res.mainCity);
      }
    });
    /*  if (updateble) {
      await updateWeather(favorites);
    } */
  };
  const [tokenStatus, setTokenStatus] = useState(false);
  const weatherApi = weather;
  const dateNow = new Date().getHours();
  const forecastDay = weatherApi.forecast.forecastday[0].hour;
  const forecastWeak = weatherApi.forecast.forecastday;
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <WeatherContext.Provider
        value={{
          dateNow,
          forecastDay,
          forecastWeak,
          tokenStatus,
          setTokenStatus,
          favorites,
          setFavorites,
          mainCity,
          setMainCity,
          getData,
        }}
      >
        {props.children}
      </WeatherContext.Provider>
    </>
  );
};
