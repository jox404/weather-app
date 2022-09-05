import react, { useState } from "react";
import { Text, View, FlatList, Button } from "react-native";
import CityCard from "../CityCard";
import { stylesFavorites } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { WeatherContext } from "../../providers/auth";

export default function Favorites({ route, navigation }) {
  const styles = stylesFavorites;
  const { dateNow, favorites } = react.useContext(WeatherContext);
  const [removeCity, setRemoveCity] = useState(true);

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
                codeCondition={item.codeCondition}
                remove={removeCity}
              />
            );
          }}
        />
      </View>
      <Button
        title="remove"
        onPress={() => {
          if (removeCity) {
            setRemoveCity(false);
          } else {
            setRemoveCity(true);
          }
        }}
      />
    </View>
  );
}
