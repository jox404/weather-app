import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Button,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import bg from "../../assets/moon.png";
import CalendarWeather from "../CalendarWeather";
import SearchField from "../SearchField";
import Sunrise from "../Sunrise";
export default function Home({ navigation }) {
  return (
    <LinearGradient colors={["#000", "#4d4d4d"]}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.cityName}>São Paulo</Text>
          <Text style={styles.temperature}>18°</Text>
          <Text style={styles.weather}>Nublado</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image source={bg} style={styles.imageMoon} />
        </View>
        <View style={styles.subInfoContainer}>
          <Text style={styles.subInfo}>
            <MaterialCommunityIcons
              name="weather-windy"
              size={18}
              color="grey"
            />
            0.51 km/h
          </Text>
          <Text style={styles.subInfo}>
            <Entypo name="drop" size={18} color={"grey"} />
            Umidade 78
          </Text>
          <Text style={styles.subInfo}>
            <Entypo name="moon" size={18} color={"grey"} />
            Noite Limpa
          </Text>
        </View>
        {/* <SearchField /> */}
        <Sunrise />
        <CalendarWeather />
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  /* backgroundImage: {
    width: 100,
    height: 100,
  }, */
  container: {
    marginTop: 100,
    width: "100%",
    height: "100%",
  },
  cityName: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "Roboto_300Light",
    textAlign: "left",
  },
  temperature: {
    color: "#fff",
    fontSize: 80,
    fontFamily: "Roboto_300Light",
    textAlign: "left",
  },
  weather: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Roboto_100Thin",
    textAlign: "left",
  },
  infoContainer: {
    marginLeft: 35,
  },
  imgContainer: {
    position: "absolute",
    width: "100%",
    marginRight: 100,
    paddingHorizontal: 25,
    marginTop: -50,
  },
  imageMoon: {
    width: 180,
    height: 180,
    display: "flex",
    alignSelf: "flex-end",
  },
  subInfoContainer: {
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  subInfo: {
    color: "#fff",
  },
});
