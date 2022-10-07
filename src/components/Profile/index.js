import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WeatherContext } from "../../providers/auth";
import { LinearGradient } from "expo-linear-gradient";
import { profileStyle } from "./style";
import { FontAwesome } from "react-native-vector-icons";
import Config from "../Config";
import Favorites from "../Favorites";

export default function Profile() {
  const { setTokenStatus, dateNow } = React.useContext(WeatherContext);
  const styles = profileStyle;
  const [settings, setSettings] = useState(false);
  const handlehideSettings = () => {
    if (settings) {
      setSettings(false);
    } else {
      setSettings(true);
    }
  };

  return (
    <LinearGradient
      colors={dateNow <= 17 ? ["#00A4FF", "#14FFC7"] : ["#000", "#4d4d4d"]}
    >
      <View style={styles.container}>
        <LinearGradient
          colors={
            dateNow <= 17 ? ["#00A4FF", "#b8e4fc"] : ["#303030", "#202020"]
          }
          style={{ borderRadius: 10 }}
          end={{ x: 1, y: 1.5 }}
        >
          <View style={styles.profileContainer}>
            <View style={styles.avatarContainer}>
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
                style={styles.avatar}
              />
            </View>
            <View style={styles.userNameContainer}>
              <View>
                <Text style={styles.userName}>Saki Nobunaga</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => handlehideSettings()}>
                  <View style={styles.btnconfigContainer}>
                    {!settings ? (
                      <FontAwesome
                        name="gear"
                        size={25}
                        color={"#303030"}
                        style={styles.gear}
                      />
                    ) : (
                      <FontAwesome
                        name="heart"
                        size={20}
                        color={"#303030"}
                        style={styles.heart}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </LinearGradient>
        {settings ? <Config /> : <Favorites />}
      </View>
    </LinearGradient>
  );
}
