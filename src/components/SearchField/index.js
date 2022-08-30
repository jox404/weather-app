import react, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { stylesSearchField } from "./styles";
import { WeatherContext } from "../../providers/auth";
import {
  SearchDayIcon,
  SearchNightIcon,
  SendArrowDayIcon,
  SendArrowNightIcon,
} from "../Icons";
import { TouchableHighlight } from "react-native-web";

export default function SearchField(props) {
  const styles = stylesSearchField;
  const { dateNow } = react.useContext(WeatherContext);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: dateNow < 17 ? "#61c4fa" : "#303030" },
      ]}
    >
      {dateNow < 17 ? (
        <SearchDayIcon width={25} height={25} style={styles.searchIcon} />
      ) : (
        <SearchNightIcon width={25} height={25} style={styles.searchIcon} />
      )}
      <TextInput
        style={[styles.field, { color: dateNow < 17 ? "#000" : "#fff" }]}
        value={props.value}
        onChange={props.onChange}
      />
      <View>
        <TouchableOpacity onPress={props.onSubmit}>
          {dateNow < 17 ? (
            <SendArrowDayIcon width={40} height={20} style={{ margin: 10 }} />
          ) : (
            <SendArrowNightIcon width={40} height={20} style={{ margin: 10 }} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
