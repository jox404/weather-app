import React, { useContext, useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import { stylesAstro } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
/* import { SvgUri } from "react-native-svg"; */
import LineCurved from "../../assets/lineCurved.svg";
import { MoonIcon, SunIcon } from "../Icons";
import { WeatherContext } from "../../providers/WeatherContext";

export default function Astro(props) {
  const { dateNow } = useContext(WeatherContext);
  const styles = stylesAstro;
  const [sunAndMoon, setSunAndMoon] = useState({});

  console.log(props.astro.sunRise);

  useEffect(() => {
    if (dateNow < 17) {
      setSunAndMoon({
        rise: props.astro.sunRise,
        set: props.astro.sunSet,
      });
    } else {
      setSunAndMoon({
        rise: props.astro.moonRise,
        set: props.astro.moonSet,
      });
    }
  }, [dateNow]);

  return (
    <>
      <View style={{ marginTop: 30, marginBottom: 20 }}>
        <View style={styles.line}>
          <LineCurved width={"100%"} height={80} fill="none" sty />
        </View>
        <View style={styles.container}>
          <View>
            <Text>{sunAndMoon.rise}</Text>
            {dateNow < 17 ? (
              <SunIcon width={"100%"} height={25} />
            ) : (
              <MoonIcon width={"100%"} height={20} />
            )}
          </View>
          <View>
            <Text>{sunAndMoon.set}</Text>
            {dateNow < 17 ? (
              <SunIcon width={"100%"} height={25} />
            ) : (
              <MoonIcon width={"100%"} height={20} />
            )}
          </View>
        </View>
      </View>
    </>
  );
}
