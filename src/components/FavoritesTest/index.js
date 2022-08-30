import react from "react";
import { Text, View, FlatList } from "react-native";
import CityCard from "../CityCard";
import { stylesFavoritesTeste } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { WeatherContext } from "../../providers/auth";

export default function FavoritesTest({ route, navigation }) {
  const styles = stylesFavoritesTeste;

  const { dateNow, favorites } = react.useContext(WeatherContext);
  console.log("teste Favorites", favorites);

  return (
    <View style={styles.container}>
      <View style={styles.favoritesListContainer}>
        <Text style={styles.title}>FAVORITES</Text>
        <FlatList
          columnWrapperStyle={styles.favoritesList}
          showsVerticalScrollIndicator={false}
          data={favorites}
          keyExtractor={(item) => item.name}
          numColumns={2}
          renderItem={({ item, index }) => {
            return (
              <CityCard
                index={index}
                temp={item.temp}
                city={item.name}
                country={item.country}
                weather={item.description}
              />
            );
          }}
        />
      </View>
    </View>
  );
}
