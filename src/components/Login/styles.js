import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  appTxt: {
    fontSize: 50,
    textAlign: "center",
  },
  signInSignUpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 25,
  },
  signInContainer: {
    flex: 1,
  },
  SignUpContainer: {
    flex: 1,
  },
  txtSignUp: {
    fontSize: 15,
    color: "#202020",
    fontFamily: "Roboto_300Light",
  },
  link: {
    color: "#0096FF",
  },
  alert: {
    margin: 20,
    borderRadius: 4,
  },
  txtError: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 10,
    fontFamily: "Roboto_300Light",
  },
});
