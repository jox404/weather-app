import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { WeatherContext } from "../../providers/WeatherContext";
import { configStyle } from "./style";
import ButtonCustom from "../ButtonCustom";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Config() {
  const styles = configStyle;
  const { dateNow, setTokenStatus } = React.useContext(WeatherContext);
  const logout = async () => {
    await AsyncStorage.clear();
    setTokenStatus(false);
  };
  return (
    <View
      style={styles.container}
      /* colors={dateNow <= 17 ? ["#00A4FF", "#b8e4fc"] : ["#303030", "#202020"]}
      start={{ x: 0.4, y: 0.4 }} */
    >
      <View>
        <Text style={styles.title}>SETTINGS</Text>
      </View>
      <View>
        <SettingOption
          bgDay={"rgba(255, 255, 255, 0.2)"}
          bgNight={"rgba(60, 60, 60, 0.5)"}
          label="Change Password"
        />
        <SettingOption
          bgDay={"rgba(255, 255, 255, 0.2)"}
          bgNight={"rgba(60, 60, 60, 0.5)"}
          label="Name"
        />
        <SettingOption
          bgDay={"rgba(255, 255, 255, 0.2)"}
          bgNight={"rgba(60, 60, 60, 0.5)"}
          label="Logout"
          style={styles.logoutBtn}
          onPress={logout}
        />
      </View>
    </View>
  );
}

function SettingOption(props) {
  const styles = configStyle;
  const { dateNow } = React.useContext(WeatherContext);
  return (
    <View>
      <TouchableOpacity onPress={() => props.onPress()}>
        <View
          style={[
            styles.settingOption,
            dateNow <= 17
              ? { backgroundColor: props.bgDay }
              : { backgroundColor: props.bgNight },
            props.style,
          ]}
        >
          <Text style={styles.settingOptionTxt}>{props.label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
