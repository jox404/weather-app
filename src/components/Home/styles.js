import { StyleSheet } from "react-native";

export const stylesHome = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  weatherIconContainer: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  iconWeather: {
    marginRight: -80,
    marginTop: -50,
  },
  cityName: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "Roboto_300Light",
    textAlign: "left",
  },
  temperature: {
    color: "#fff",
    fontSize: 80,
    fontFamily: "Roboto_300Light",
    textAlign: "left",
  },
  weather: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Roboto_100Thin",
    textAlign: "left",
  },
  infoContainer: {
    marginLeft: 35,
    marginTop: 80,
  },
});
