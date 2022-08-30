import { StyleSheet } from "react-native";

export const configStyle = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingTop: 30,
    flex: 1,
    borderRadius: 10,
    marginBottom: 100,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Roboto_300Light",
  },
  settingOption: {
    backgroundColor: "rgba(60, 60, 60, 0.5)",
    flexDirection: "column",
    justifyContent: "space-around",
    height: 50,
    borderRadius: 5,
    margin: 5,
  },
  settingOptionTxt: {
    fontFamily: "Roboto_100Thin",
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
    paddingTop: "auto",
  },
  logoutBtn: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    fontFamily: "Roboto_300Light",
  },
});
