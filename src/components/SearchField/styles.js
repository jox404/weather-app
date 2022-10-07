import { StyleSheet } from "react-native";

export const stylesSearchField = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  field: {
    flex: 1,
    height: 40,
    fontSize: 18,
  },
  searchIcon: {
    marginLeft: 10,
  },
});
