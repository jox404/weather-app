import React from "react";
import { Text, TextInput, View } from "react-native";
import { styleInput } from "./styles";

export default function Input(props) {
  const styles = styleInput;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            props.colorInput == undefined ? "#fff" : props.colorInput,
          display: props.display,
        },
      ]}
    >
      <View style={styles.icon}>{props.icon}</View>
      <TextInput
        style={styles.textField}
        placeholder={props.placeholder}
        secureTextEntry={props.password}
        autoComplete={props.autoComplete}
        value={props.value}
        onChangeText={props.handleChange}
      />
    </View>
  );
}
