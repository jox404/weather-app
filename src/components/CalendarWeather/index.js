import React from "react";
import { View, Text, ScrollView } from "react-native";
import { stylesCalendarWeather } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";

export default function CalendarWeather() {
  const styles = stylesCalendarWeather;

  const handleInconCondition = (condition) => {
    var conditionIcon = "";
    switch (condition) {
      case "cloudly_day":
        conditionIcon = "cloud-sun";
        break;
      case "cloudy-night":
        conditionIcon = "cloud-moon";
        break;
      case "clear_day":
        conditionIcon = "sun";
        break;
      case "clear-night":
        conditionIcon = "moon";
        break;
      case "cloud":
        conditionIcon = "cloud";
        break;
    }
    return (
      <>
        <FontAwesome5 name={conditionIcon} style={styles.conditionIcon} />
      </>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today</Text>
      <View>
        <ScrollView>
          {date.map((day, index) => {
            return (
              <View style={styles.dayInfoContainer} key={index}>
                <View style={styles.dayContainer}>
                  <Text style={styles.day}>{day.weekday}</Text>
                </View>
                <View style={styles.conditionContainer}>
                  {/* <Text style={styles.conditionIcon}>{day.condition}</Text> */}
                  {/* <Ionicons name={} style={styles.conditionIcon} /> */}
                  {handleInconCondition(day.condition)}
                </View>
                <View style={styles.maxMinTemp}>
                  <Text style={styles.maxTemp}>{day.max}°</Text>
                  <Text style={styles.minTemp}>{day.min}°</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const date = [
  {
    date: "05/07",
    weekday: "Ter",
    max: 25,
    min: 14,
    description: "Tempo limpo",
    condition: "clear_day",
  },
  {
    date: "06/07",
    weekday: "Qua",
    max: 26,
    min: 15,
    description: "Tempo nublado",
    condition: "cloudly_day",
  },
  {
    date: "07/07",
    weekday: "Qui",
    max: 26,
    min: 16,
    description: "Tempo nublado",
    condition: "cloudly_day",
  },
  {
    date: "08/07",
    weekday: "Sex",
    max: 26,
    min: 16,
    description: "Tempo limpo",
    condition: "clear_day",
  },
  {
    date: "09/07",
    weekday: "Sáb",
    max: 27,
    min: 15,
    description: "Tempo nublado",
    condition: "cloudly_day",
  },
  {
    date: "10/07",
    weekday: "Dom",
    max: 28,
    min: 16,
    description: "Tempo limpo",
    condition: "clear_day",
  },
  {
    date: "11/07",
    weekday: "Seg",
    max: 27,
    min: 16,
    description: "Parcialmente nublado",
    condition: "cloud",
  },
  {
    date: "12/07",
    weekday: "Ter",
    max: 29,
    min: 16,
    description: "Parcialmente nublado",
    condition: "cloud",
  },
  {
    date: "13/07",
    weekday: "Qua",
    max: 25,
    min: 16,
    description: "Tempo nublado",
    condition: "cloudly_day",
  },
  {
    date: "14/07",
    weekday: "Qui",
    max: 24,
    min: 15,
    description: "Parcialmente nublado",
    condition: "cloudly_day",
  },
];
