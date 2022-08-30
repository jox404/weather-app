import react from "react";
import { WeatherContext } from "../../providers/auth";
import { stylesSunAndMoon } from "./styles";
import {
  clearCodeList,
  cloudyCodeList,
  rainyCodeList,
  snowCodeList,
} from "../../services/weatherApi/conditionCodes";
import { comparatorCodeList } from "../../tools/comparatorCodeList";
import {
  CloudyDayLargeIcon,
  CloudyNightLagerIcon,
  MoonEllipseIcon,
  RainyDayIcon,
  RainyNightIcon,
  SunEllipseIcon,
} from "../Icons";

export default function SunAndMoon() {
  const styles = stylesSunAndMoon;
  let { dateNow, conditionCode } = react.useContext(WeatherContext);

  const clearCode = clearCodeList;
  const cloudyCode = cloudyCodeList;
  const rainyCode = rainyCodeList;
  const snowCode = snowCodeList;

  const handleWeatherAndTime = () => {
    switch (true) {
      case comparatorCodeList(clearCode, conditionCode):
        return dateNow <= 17 ? (
          <SunEllipseIcon
            width={270}
            height={270}
            style={[styles.weatherIcon, styles.cloudySky, styles.day]}
          />
        ) : (
          <MoonEllipseIcon
            width={270}
            height={270}
            style={[styles.weatherIcon, styles.cloudySky, styles.night]}
          />
        );
        break;
      case comparatorCodeList(cloudyCode, conditionCode):
        return dateNow <= 17 ? (
          <CloudyDayLargeIcon
            width={315}
            height={315}
            style={[styles.weatherIcon, styles.cloudySky, styles.day]}
          />
        ) : (
          <CloudyNightLagerIcon
            width={315}
            height={315}
            style={[styles.weatherIcon, styles.cloudySky, styles.night]}
          />
        );
        break;
      case comparatorCodeList(rainyCode, conditionCode):
        return dateNow <= 17 ? (
          <RainyDayIcon
            width={315}
            height={315}
            style={[styles.weatherIcon, styles.cloudySky, styles.day]}
          />
        ) : (
          <RainyNightIcon
            width={315}
            height={315}
            style={[styles.weatherIcon, styles.cloudySky, styles.night]}
          />
        );
        break;
      /* SNOW */
      case comparatorCodeList(snowCode, conditionCode):
        return dateNow <= 17 ? (
          <RainyDayIcon
            width={315}
            height={315}
            style={[styles.weatherIcon, styles.cloudySky, styles.day]}
          />
        ) : (
          <RainyNightIcon
            width={315}
            height={315}
            style={[styles.weatherIcon, styles.cloudySky, styles.night]}
          />
        );
        break;
    }
  };
  return <>{handleWeatherAndTime()}</>;
}
