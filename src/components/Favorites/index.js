import react from "react";
import { Text, View, Button, StyleSheet, FlatList } from "react-native";
import CityCard from "../CityCard";
import SearchField from "../SearchField";
import { stylesFavorites } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { WeatherContext } from "../../providers/auth";

export default function Favorites({ route, navigation }) {
  const styles = stylesFavorites;
  const { dateNow } = react.useContext(WeatherContext);
  const data = [
    {
      id: 1,
      desc: {
        temp: 19,
        city: "São Paulo",
        country: "BRL",
        description: 1000,
      },
    },
    {
      id: 2,
      desc: {
        temp: 22,
        city: "Belo Horizonte",
        country: "BRL",
        description: 1066,
      },
    },
    {
      id: 3,
      desc: {
        temp: 23,
        city: "Rio de Janeiro",
        country: "BRL",
        description: 1066,
      },
    },
    {
      id: 4,
      desc: {
        temp: 8,
        city: "Kyoto",
        country: "JPA",
        description: 1180,
      },
    },
    {
      id: 5,
      desc: {
        temp: 19,
        city: "São Paulo",
        country: "BRL",
        description: 1114,
      },
    },
    {
      id: 6,
      desc: {
        temp: 22,
        city: "Belo Horizonte",
        country: "BRL",
        description: 1000,
      },
    },
    {
      id: 7,
      desc: {
        temp: 23,
        city: "Rio de Janeiro",
        country: "BRL",
        description: 1186,
      },
    },
    {
      id: 8,
      desc: {
        temp: 8,
        city: "Kyoto",
        country: "JPA",
        description: 1000,
      },
    },
  ];
  return (
    <LinearGradient
      colors={dateNow <= 17 ? ["#00A4FF", "#14FFC7"] : ["#000", "#4d4d4d"]}
    >
      <View style={styles.searchField}>
        <SearchField />
      </View>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <CityCard
                temp={item.desc.temp}
                city={item.desc.city}
                country={item.desc.country}
                weather={item.desc.description}
              />
            );
          }}
        />
      </View>
    </LinearGradient>
  );
}
