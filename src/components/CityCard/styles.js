import react from "react";
import { StyleSheet } from "react-native";

export const stylesCityCard = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  temp: {
    fontSize: 35,
    color: "#fff",
    marginBottom: 10,
  },
  city: {
    fontSize: 12,
    color: "#fff",
    marginBottom: 5,
  },
  country: {
    fontSize: 12,
    color: "#F5EDDC",
    marginBottom: 20,
  },
  iconWeather: {
    position: "absolute",
    marginLeft: "69%",
  },
  infoBottomContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  windy: {
    color: "#fff",
    fontSize: 15,
  },
});
