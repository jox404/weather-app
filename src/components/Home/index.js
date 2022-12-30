import react from "react";
import { WeatherContext } from "../../providers/WeatherContext";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { stylesHome } from "./styles";
import CalendarWeather from "../CalendarWeather";
import ConditionBar from "../ConditionBar";
import { IconWeather } from "../IconWeather";
import Astro from "../Astro";

export default function Home() {
  const styles = stylesHome;
  const { dateNow, mainCity } = react.useContext(WeatherContext);

  console.log(mainCity);
  return (
    <LinearGradient
      colors={dateNow <= 17 ? ["#00A4FF", "#14FFC7"] : ["#000", "#4d4d4d"]}
    >
      <View style={styles.container}>
        <View style={styles.weatherIconContainer}>
          <View style={styles.iconWeather}>
            <IconWeather codeCondition={1168} width={300} height={300} />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.cityName}>{mainCity.name}</Text>
          <Text style={styles.temperature}>{mainCity.temp}°</Text>
          <Text style={styles.weather}>{mainCity.weather}</Text>
        </View>
        <ConditionBar
          humidity={mainCity.humidity}
          windSpeed={mainCity.wind}
          min={mainCity.minTemp}
          max={mainCity.maxTemp}
        />
        <Astro astro={mainCity.astro} />
        <CalendarWeather
          forecastDay={mainCity.forecastDay}
          forecastWeek={mainCity.forecastWeek}
        />
      </View>
    </LinearGradient>
  );
}
