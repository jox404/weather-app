import { StyleSheet } from "react-native";

export const stylesConditionBar = StyleSheet.create({
  subInfoContainer: {
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
  },
  windInfoContainer: {
    flexDirection: "row",
  },
  windInfo: {
    color: "#EAF6F6",
    fontSize: 16,
    marginLeft: 2,
  },
  maxAndMinContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    /* width: 60, */
  },
  max: { color: "#EAF6F6", fontSize: 18 },
  min: { color: "#D8D9CF", fontSize: 18 },
});
