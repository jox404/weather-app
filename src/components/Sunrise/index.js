import React from "react";
import { View, Image, Text } from "react-native";
import { stylesSunrise } from "./styles";
import lineBg from "../../assets/line.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SvgTeste from "../../assets/teste.svg";
import { SvgCssUri } from "react-native-svg";

export default function Sunrise() {
  const styles = stylesSunrise;
  return (
    <View style={styles.container}>
      <SvgTeste />
      <View>
        <Text>10:00</Text>
        <MaterialCommunityIcons
          name="white-balance-sunny"
          size={24}
          color="#FEF9A7"
        />
      </View>
      <Image source={lineBg} style={styles.lineBg} />
      <View>
        <Text>10:00</Text>
        <MaterialCommunityIcons name="moon-full" size={24} color="#6E85B7" />
      </View>
    </View>
  );
}
