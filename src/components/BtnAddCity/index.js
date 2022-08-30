import React, { useEffect } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { PlusDayIcon } from "../Icons";
import { stylesBtnAddCity } from "./styles";
import { addToFavorites } from "../../services/addToFavorites";
import { WeatherContext } from "../../providers/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default BtnAddCity = (props) => {
  const { getData } = React.useContext(WeatherContext);
  const styles = stylesBtnAddCity;
  return (
    <TouchableHighlight
      onPress={async () => {
        addToFavorites(
          props.name,
          props.temp,
          props.country,
          props.weather
        ).then((res) => {
          getData();
        });
      }}
      underlayColor="rgba(189, 255, 243, 0.5)"
    >
      <View style={styles.btn}>
        <Text style={styles.btnTxt}>ADD CITY</Text>
        <PlusDayIcon width={30} height={30} style={{ marginVertical: 5 }} />
      </View>
    </TouchableHighlight>
  );
};
