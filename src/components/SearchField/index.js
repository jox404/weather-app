import React from "react";
import { TextInput, View } from "react-native";
import { stylesSearchField } from "./styles";

export default function SearchField() {
  const styles = stylesSearchField;
  return (
    <View style={styles.container}>
      <TextInput style={styles.field} />
    </View>
  );
}
