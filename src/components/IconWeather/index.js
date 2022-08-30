import React from "react";
import { WeatherContext } from "../../providers/auth";
import {
  CaudyDayIcon,
  CaudyNightIcon,
  CloudyNightLagerIcon,
  DropDayIcon,
  DropNightIcon,
  MoonIcon,
  RainyDayIcon,
  RainyNightIcon,
  SnowDayIcon,
  SnowNightIcon,
  SunIcon,
  WindDayIcon,
  WindNightIcon,
} from "../Icons";

import {
  clearCodeList,
  rainyCodeList,
  cloudyCodeList,
  snowCodeList,
} from "../../services/weatherApi/conditionCodes";
import { comparatorCodeList } from "../../tools/comparatorCodeList";

const handleIconWeather = (weather, widht, height) => {
  const { dateNow } = React.useContext(WeatherContext);

  switch (true) {
    case comparatorCodeList(clearCodeList, weather):
      return dateNow <= 17 ? (
        <SunIcon width={widht} height={height} />
      ) : (
        <MoonIcon width={widht} height={height} />
      );
      break;
    case comparatorCodeList(rainyCodeList, weather):
      return dateNow <= 17 ? (
        <RainyDayIcon width={widht} height={height} />
      ) : (
        <RainyNightIcon width={widht} height={height} />
      );
      break;
    case comparatorCodeList(cloudyCodeList, weather):
      return dateNow <= 17 ? (
        <CaudyDayIcon width={widht} height={height} />
      ) : (
        <CloudyNightLagerIcon width={widht} height={height} />
      );
      break;
    case comparatorCodeList(snowCodeList, weather):
      return dateNow <= 17 ? (
        <SnowDayIcon width={widht} height={height} />
      ) : (
        <SnowNightIcon width={widht} height={height} />
      );
      break;
  }
};

export { handleIconWeather };
