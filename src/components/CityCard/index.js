import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Button, Text, View, TouchableHighlight } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { stylesCityCard } from "./styles";
import react from "react";
import { WeatherContext } from "../../providers/auth";
import {
  CaudyDayIcon,
  CaudyNightIcon,
  DropDayIcon,
  DropNightIcon,
  MoonIcon,
  SunIcon,
  WindDayIcon,
  WindNightIcon,
} from "../Icons";
import { handleIconWeather } from "../IconWeather";
import { removeFavorite } from "../../services/back-end/removeFavorite";

export default function CityCard(props) {
  const styles = stylesCityCard;
  const { dateNow, getData } = react.useContext(WeatherContext);

  return (
    <View>
      <LinearGradient
        colors={dateNow <= 17 ? ["#00A4FF", "#fff"] : ["#303030", "#202020"]}
        style={styles.container}
        end={{ x: 1, y: 1.5 }}
      >
        <View style={styles.containerBtnRemove}>
          <View
            style={[
              styles.btnRemove,
              { display: !props.btnRemove ? "none" : "flex" },
            ]}
          >
            <IconButtonRemove indexItem={props.index} />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.temp}>{props.temp}°</Text>
            <Text style={styles.city}>{props.city}</Text>
            <Text style={styles.country}>{props.country}</Text>
          </View>
          <View style={styles.iconWeather}>
            {handleIconWeather(props.codeCondition, 70, 70)}
          </View>
        </View>
        <View style={styles.infoBottomContainer}>
          <Text style={styles.windy}>
            {dateNow <= 17 ? (
              <DropDayIcon width={15} height={15} />
            ) : (
              <DropNightIcon width={15} height={15} />
            )}
            78
          </Text>
          <Text style={styles.windy}>
            {dateNow <= 17 ? (
              <WindDayIcon width={15} height={15} />
            ) : (
              <WindNightIcon width={15} height={15} />
            )}
            11km/h
          </Text>
        </View>
        <View></View>
      </LinearGradient>
    </View>
  );
}

const IconButtonRemove = (props) => {
  const { getData } = react.useContext(WeatherContext);
  return (
    <View>
      <TouchableHighlight
        onPress={async () => {
          removeFavorite(props.indexItem).then(() => {
            console.log("chamou");
            getData();
          });
        }}
      >
        <Text>
          <AntDesign
            name="closecircle"
            size={25}
            color="#909090"
            style={{ textAlign: "right" }}
          />
        </Text>
      </TouchableHighlight>
    </View>
  );
};
