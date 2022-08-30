import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
import { styleButtonCustom } from "./styles";

export default function ButtonCustom(props) {
  const styles = styleButtonCustom;
  return (
    <TouchableHighlight onPress={props.onClick}>
      <View
        style={{
          height: 60,
          backgroundColor: props.color,
          justifyContent: "space-around",
          borderRadius: 5,
          display: props.display,
        }}
      >
        <Text style={[styles.btnTxt, { color: props.colorText }]}>
          {props.name}
        </Text>
      </View>
    </TouchableHighlight>
  );
}
