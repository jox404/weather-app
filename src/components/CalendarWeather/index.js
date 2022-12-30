import React from "react";
import { View, Text, FlatList } from "react-native";
import { stylesCalendarWeather } from "./styles";
import Forecast from "../Forecast";
import { TouchableWithoutFeedback } from "react-native";
import getWeekDay from "../../tools/getWeekDay";
import { IconWeather } from "../IconWeather";

export default function CalendarWeather(props) {
  const styles = stylesCalendarWeather;
  console.log(props.forecastWeek);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today</Text>
      <View style={styles.forecastDayContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={props.forecastDay}
          key={props.forecastDay.map((tem, index) => {
            return index;
          })}
          renderItem={({ item }) => {
            return (
              <>
                <Forecast temp={item.temp} hour={item.hour} />
              </>
            );
          }}
        />
      </View>
      <View>
        <FlatList
          contentContainerStyle={styles.forecastWeak}
          showsVerticalScrollIndicator={false}
          data={props.forecastWeek}
          renderItem={({ item }) => {
            return (
              <>
                <TouchableWithoutFeedback>
                  <View style={styles.dayInfoContainer}>
                    <View style={styles.dayContainer}>
                      <Text style={styles.day}>{getWeekDay(item.day)}</Text>
                    </View>
                    <View style={styles.conditionContainer}>
                      <Text style={styles.conditionIcon}>
                        <IconWeather
                          width={35}
                          height={35}
                          codeCondition={1000}
                        />
                      </Text>
                    </View>
                    <View style={styles.maxMinTemp}>
                      <Text style={styles.maxTemp}>
                        {item.maxTemp.toFixed(0)}°
                      </Text>
                      <Text style={styles.minTemp}>
                        {item.minTemp.toFixed(0)}°
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
