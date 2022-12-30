import React from "react";
import { Text, View } from "react-native";
import { WeatherContext } from "../../providers/WeatherContext";
import {
  DropDayIcon,
  DropNightIcon,
  WindDayIcon,
  WindNightIcon,
} from "../Icons";

import { stylesConditionBar } from "./styles";

export default function ConditionBar(props) {
  const { dateNow } = React.useContext(WeatherContext);
  const styles = stylesConditionBar;
  return (
    <>
      <View style={styles.subInfoContainer}>
        <View style={styles.windInfoContainer}>
          {dateNow <= 17 ? (
            <WindDayIcon width={20} height={20} />
          ) : (
            <WindNightIcon width={20} height={20} />
          )}
          <Text style={styles.windInfo}>{props.windSpeed} km/h</Text>
        </View>
        <View style={styles.windInfoContainer}>
          {dateNow <= 17 ? (
            <DropDayIcon width={20} height={20} />
          ) : (
            <DropNightIcon width={20} height={20} />
          )}
          <Text style={styles.windInfo}>Humidity {props.humidity}</Text>
        </View>
        <View
          style={[
            styles.maxAndMinContainer,
            {
              display:
                props.max === false
                  ? "none"
                  : props.min === false
                  ? "none"
                  : "flex",
            },
          ]}
        >
          <Text style={styles.max}>{props.max}°</Text>
          <Text style={styles.min}>{props.min}°</Text>
        </View>
      </View>
    </>
  );
}
