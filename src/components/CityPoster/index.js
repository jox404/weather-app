import React, { useState } from "react";
import { Text, View } from "react-native";
import { IconWeather } from "../IconWeather";
import ConditionBar from "../ConditionBar";
import BtnAddCity from "../BtnAddCity";
import { stylesCityPoster } from "./styles";
import { WeatherContext } from "../../providers/WeatherContext";
import { Button } from "react-native";
import { setMainCity } from "../../services/back-end/setMainCity";

export default function CityPoster(props) {
  const { dateNow } = React.useContext(WeatherContext);

  const styles = stylesCityPoster;
  return (
    <View>
      {props.render != true ? (
        <View></View>
      ) : (
        <View>
          <View>
            <Text style={styles.country}>{props.country}</Text>
            <Text style={styles.city}>{props.city}</Text>
            <Text style={styles.region}>{props.region}</Text>
          </View>
          <View style={styles.sunAndMoon}>
            <IconWeather
              codeCondition={props.codeCondition}
              width={217}
              height={217}
            />
          </View>
          <View>
            <Text style={styles.temp}>{props.temp}°</Text>
          </View>
          <View style={styles.conditionBar}>
            <ConditionBar
              humidity={props.humidity}
              windSpeed={props.wind}
              min={false}
              max={false}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button title="Main City" onPress={() => setMainCity(props.city)} />
          </View>
          <View style={styles.btnContainer}>
            <BtnAddCity
              country={props.country}
              name={props.city}
              temp={props.temp}
              codeCondition={props.codeCondition}
            />
          </View>
        </View>
      )}
    </View>
  );
}
