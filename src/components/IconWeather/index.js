import React, { useEffect } from "react";
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
import { Text, View } from "react-native";

const IconWeather = (props) => {
  const { dateNow } = React.useContext(WeatherContext);
  let iconWeather;
  return (
    <>
      {(() => {
        switch (true) {
          case comparatorCodeList(clearCodeList, props.codeCondition):
            console.log("lalala");
            return dateNow <= 17 ? (
              <SunIcon width={props.width} height={props.height} />
            ) : (
              <MoonIcon width={props.width} height={props.height} />
            );
            break;
          case comparatorCodeList(rainyCodeList, props.codeCondition):
            return dateNow <= 17 ? (
              <RainyDayIcon width={props.width} height={props.height} />
            ) : (
              <RainyNightIcon width={props.width} height={props.height} />
            );
            break;
          case comparatorCodeList(cloudyCodeList, props.codeCondition):
            return dateNow <= 17 ? (
              <CaudyDayIcon width={props.width} height={props.height} />
            ) : (
              <CloudyNightLagerIcon width={props.width} height={props.height} />
            );
            break;
          case comparatorCodeList(snowCodeList, props.codeCondition):
            return dateNow <= 17 ? (
              <SnowDayIcon width={props.width} height={props.height} />
            ) : (
              <SnowNightIcon width={props.width} height={props.height} />
            );
            break;
        }
      })()}
    </>
  );
};

export { IconWeather };
