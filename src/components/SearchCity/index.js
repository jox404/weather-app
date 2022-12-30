import React, { useEffect, useState, useContext } from "react";
import { View } from "react-native";
import SearchField from "../SearchField";
import { LinearGradient } from "expo-linear-gradient";
import { stylesSearchCity } from "./styles";
import { handleSearchCity } from "../../services/weatherApi/handleSearchCity";
import { WeatherContext } from "../../providers/WeatherContext";
import CityPoster from "../CityPoster";

export default function SearchCity() {
  const { dateNow } = useContext(WeatherContext);
  const styles = stylesSearchCity;
  const [data, setData] = useState(null);
  const [city, setCity] = useState(null);
  const [region, setRegion] = useState(null);
  const [country, setCountry] = useState(null);
  const [temp, setTemp] = useState(null);
  const [wind, setWind] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [renderPoster, setRenderPoster] = useState(false);
  const [codeCondition, setCodeCondition] = useState(undefined);
  const handleSubmit = async () => {
    const dataCity = await handleSearchCity(inputValue);
    if (dataCity == "input empty") {
      console.log("input empty");
    } else {
      setData(dataCity);
      setRenderPoster(true);
      setInputValue("");
    }
  };

  useEffect(() => {
    if (data != null) {
      setCity(data.location.name);
      setCountry(data.location.country);
      setRegion(data.location.region);
      setWind(data.current.wind_kph);
      setHumidity(data.current.humidity);
      setTemp(data.current.temp_c);
      setCodeCondition(data.current.condition.code);
    }
  }, [data, city]);

  return (
    <LinearGradient
      colors={dateNow <= 17 ? ["#00A4FF", "#14FFC7"] : ["#000", "#4d4d4d"]}
    >
      <View style={styles.container}>
        <View style={styles.searchFieldContainer}>
          <SearchField
            onChange={(text) => {
              setInputValue(text.nativeEvent.text);
            }}
            value={inputValue}
            onSubmit={async () => {
              handleSubmit();
            }}
          />
        </View>
        <CityPoster
          render={renderPoster}
          region={region}
          city={city}
          country={country}
          temp={temp}
          wind={wind}
          humidity={humidity}
          codeCondition={codeCondition}
        />
      </View>
    </LinearGradient>
  );
}
