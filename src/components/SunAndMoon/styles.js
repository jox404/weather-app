import react from "react";
import { StyleSheet } from "react-native";
import { AuthContext } from "../../providers/auth";

export const stylesSunAndMoon = StyleSheet.create({
  weatherIcon: {
    flex: 1,
    marginRight: -100,
    shadowRadius: 60,
    shadowOpacity: 0.5,
  },
  cloudySky: {
    marginRight: -100,
    marginTop: -40,
  },
  clearSky: {
    marginRight: -100,
    marginTop: -20,
  },
  day: { shadowColor: "#FAFF00" },
  night: { shadowColor: "#0085FF" },
});
