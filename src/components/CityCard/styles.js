import react from "react";
import { StyleSheet } from "react-native";

export const stylesCityCard = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    zIndex: 0,
  },
  containerBtnRemove: {
    position: "absolute",
    width: 160,
    paddingRight: 20,
    paddingTop: 5,
    zIndex: 2,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  btnRemove: {
    width: 25,
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
    justifyContent: "flex-end",
    flexDirection: "row",
    width: 130,
    /*  backgroundColor: "#fff", */
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
