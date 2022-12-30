import { StyleSheet } from "react-native";

export const stylesCalendarWeather = StyleSheet.create({
  container: {
    width: "100%",
    height: 260,
    marginTop: 30,
  },
  title: {
    color: "#EAF6F6",
    fontSize: 17,
    marginLeft: 25,
    marginBottom: 10,
  },
  forecastDayContainer: {
    marginBottom: 10,
  },
  dayInfoContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    marginBottom: 10,
  },
  dayContainer: {
    width: 100,
  },
  day: {
    fontSize: 18,
    color: "#fff",
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
    color: "#909090",
  },
  maxTemp: {
    fontSize: 18,
    color: "#fff",
  },
  forecastWeak: {
    marginHorizontal: 25,
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 60,
  },
});
