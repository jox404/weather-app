import { StyleSheet } from "react-native";

export const stylesFavorites = StyleSheet.create({
  container: {
    width: "100%",
    height: 500,
    paddingTop: 5,
    marginTop: 2,
  },
  title: {
    fontSize: 20,
    marginBottom: 2,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Roboto_300Light",
  },
  favoritesListContainer: {
    borderColor: "#fff",
  },
  favoritesList: {
    justifyContent: "space-around",
  },
});
