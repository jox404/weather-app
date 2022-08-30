import { StyleSheet } from "react-native";

export const profileStyle = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 60,
    paddingHorizontal: 10,
  },
  profileContainer: {
    height: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 0,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userNameContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "space-around",
  },
  userName: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "Roboto_100Thin",
  },
  btnconfigContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 50,
    flexDirection: "row",
    marginLeft: "auto",
    justifyContent: "center",
    flexDirection: "column",
    padding: 0,
  },
  gear: {
    textAlign: "center",
    marginHorizontal: 8,
    marginVertical: 6,
  },
  heart: {
    textAlign: "center",
    marginHorizontal: 8,
    marginVertical: 8,
  },
});
