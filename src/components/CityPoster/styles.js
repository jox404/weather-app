import { StyleSheet } from "react-native";

const stylesCityPoster = StyleSheet.create({
  region: {
    color: "#E7F6F2",
    fontSize: 16,
    textAlign: "center",
  },
  city: {
    color: "#F6F6F6",
    fontSize: 40,
    textAlign: "center",
  },
  country: {
    color: "#909090",
    fontSize: 18,
    textAlign: "center",
  },
  sunAndMoon: {
    marginTop: 20,
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    shadowColor: "#231955",
    shadowRadius: 20,
    shadowOpacity: 0.5,
  },
  temp: {
    color: "#fff",
    fontSize: 80,
    textAlign: "center",
  },
  btnContainer: {
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 40,
  },
});

export { stylesCityPoster };
