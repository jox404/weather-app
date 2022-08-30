import { StyleSheet } from "react-native";

const styleInput = StyleSheet.create({
  container: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: "#ECECEC",
    margin: 2,
  },
  textField: {
    flex: 1,
    fontSize: 22,
  },
  icon: {
    justifyContent: "space-around",
  },
});

export { styleInput };
