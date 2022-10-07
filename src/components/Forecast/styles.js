import { StyleSheet } from "react-native";

export const stylesWeatherByTime = StyleSheet.create({
  container: {
    width: 35,
    height: 80,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
    marginHorizontal: 25,
  },
  day: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
  },
  time: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  weatherIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  temp: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
});
