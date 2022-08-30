import React from "react";
import { View, Image, Text } from "react-native";
import { stylesSunrise } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
/* import { SvgUri } from "react-native-svg"; */
import LineCurved from "../../assets/lineCurved.svg";
import { MoonIcon, SunIcon } from "../Icons";

export default function Sunrise() {
  const styles = stylesSunrise;
  const uri = "";
  return (
    <>
      <View style={{ marginTop: 30, marginBottom: 20 }}>
        <View style={styles.line}>
          <LineCurved width={"100%"} height={80} fill="none" sty />
        </View>
        <View style={styles.container}>
          <View>
            <Text>10:00</Text>
            <SunIcon width={"100%"} height={25} />
          </View>
          <View>
            <Text>10:00</Text>
            <MoonIcon width={"100%"} height={20} />
          </View>
        </View>
      </View>
    </>
  );
}
