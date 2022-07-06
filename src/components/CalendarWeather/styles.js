import { StyleSheet } from "react-native";

export const stylesCalendarWeather = StyleSheet.create({
  container: {
    width: "100%",
    height: 260,
  },
  title: {
    color: "#606060",
    fontSize: 17,
    marginLeft: 25,
  },
  dayInfoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    height: 40,
  },
  dayContainer: {
    width: 100,
  },
  day: {
    fontSize: 18,
    color: "#a8a8a8",
  },
  conditionContainer: {
    width: 48,
  },
  conditionIcon: {
    fontSize: 20,
    color: "#a8a8a8",
  },
  maxMinTemp: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 70,
  },
  minTemp: {
    fontSize: 18,
    color: "#606060",
  },
  maxTemp: {
    fontSize: 18,
    color: "#a8a8a8",
  },
});
