import React from "react";
import { View, Text, FlatList } from "react-native";
import { stylesCalendarWeather } from "./styles";
import Forecast from "../Forecast";
import react from "react";
import { WeatherContext } from "../../providers/auth";
import { TouchableWithoutFeedback } from "react-native-web";
import getWeekDay from "../../tools/getWeekDay";
import { SunIcon, MoonIcon } from "../Icons/index";
import { comparatorCodeList } from "../../tools/comparatorCodeList";
import {
  clearCodeList,
  cloudyCodeList,
  rainyCodeList,
  snowCodeList,
} from "../../services/weatherApi/conditionCodes";

export default function CalendarWeather() {
  const styles = stylesCalendarWeather;

  const { dateNow, forecastDay, forecastWeak } =
    react.useContext(WeatherContext);

  const handleInconCondition = (condition) => {
    switch (true) {
      case comparatorCodeList(clearCodeList, 1000):
        return (
          <>
            {dateNow <= 17 ? (
              <SunIcon width={30} height={30} />
            ) : (
              <MoonIcon width={30} height={30} />
            )}
          </>
        );
        break;
      case comparatorCodeList(cloudyCodeList, condition):
        return (
          <>
            {dateNow <= 17 ? (
              <SunIcon width={30} height={30} />
            ) : (
              <MoonIcon width={30} height={30} />
            )}
          </>
        );
        break;
      case comparatorCodeList(rainyCodeList, condition):
        return (
          <>
            {dateNow <= 17 ? (
              <SunIcon width={30} height={30} />
            ) : (
              <MoonIcon width={30} height={30} />
            )}
          </>
        );
        break;
      case comparatorCodeList(snowCodeList, condition):
        return (
          <>
            {dateNow <= 17 ? (
              <SunIcon width={40} height={40} />
            ) : (
              <MoonIcon width={40} height={40} />
            )}
          </>
        );
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today</Text>
      <View style={styles.forecastDayContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={forecastDay}
          key={forecastDay.map((tem, index) => {
            return index;
          })}
          renderItem={({ item }) => {
            return (
              <>
                <Forecast temp={item.temp_c} data={item.time} />
              </>
            );
          }}
        />
      </View>
      <View>
        <FlatList
          contentContainerStyle={styles.forecastWeak}
          showsVerticalScrollIndicator={false}
          data={forecastWeak}
          renderItem={({ item }) => {
            return (
              <>
                <TouchableWithoutFeedback>
                  <View style={styles.dayInfoContainer}>
                    <View style={styles.dayContainer}>
                      <Text style={styles.day}>{getWeekDay(item.date)}</Text>
                    </View>
                    <View style={styles.conditionContainer}>
                      <Text style={styles.conditionIcon}>
                        {handleInconCondition(item.day.condition.code)}
                      </Text>
                    </View>
                    <View style={styles.maxMinTemp}>
                      <Text style={styles.maxTemp}>
                        {item.day.maxtemp_c.toFixed(0)}°
                      </Text>
                      <Text style={styles.minTemp}>
                        {item.day.mintemp_c.toFixed(0)}°
                      </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </>
            );
          }}
        />
      </View>
    </View>
  );
}
