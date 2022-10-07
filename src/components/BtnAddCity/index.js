import React, { useEffect, useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { HeartBrokenIcon, HeartIcon } from "../Icons";
import { stylesBtnAddCity } from "./styles";
import { addToFavorites } from "../../services/back-end/addToFavorites";
import { removeFavorite } from "../../services/back-end/removeFavorite";
import { WeatherContext } from "../../providers/auth";

export default BtnAddCity = (props) => {
  const styles = stylesBtnAddCity;
  const { getData, favorites } = React.useContext(WeatherContext);
  const [alreadyFavorited, setAlreadyFavorited] = useState(undefined);

  const handleAlreadyFavorited = async (array, cityName) => {
    const city = await array.find((element) => element.name == cityName);
    if (city) {
      setAlreadyFavorited(true);
    } else {
      setAlreadyFavorited(false);
    }
  };
  useEffect(() => {
    handleAlreadyFavorited(favorites, props.name);
  }, [props.name, alreadyFavorited, favorites]);
  return (
    <TouchableHighlight
      onPress={async () => {
        if (alreadyFavorited) {
          console.log(props.name);
          const cityIndex = favorites.findIndex((element, index) => {
            console.log(element.name, props.name);
            return element.name == props.name;
          });
          console.log(cityIndex);
          await removeFavorite(cityIndex)
            .then(async () => {
              await getData();
            })
            .then(() => {
              setAlreadyFavorited(false);
            });
        } else {
          addToFavorites(
            props.name,
            props.temp,
            props.country,
            props.codeCondition
          )
            .then(async (res) => {
              await getData();
            })
            .then(async () => {
              setAlreadyFavorited(true);
            });
        }
      }}
      underlayColor="rgba(189, 255, 243, 0.5)"
    >
      <View style={styles.btn}>
        {alreadyFavorited ? (
          <>
            <Text style={styles.btnTxt}>REMOVE</Text>
            <HeartBrokenIcon
              width={30}
              height={30}
              style={{ marginVertical: 5 }}
            />
          </>
        ) : (
          <>
            <Text style={styles.btnTxt}>ADD CITY</Text>
            <HeartIcon width={30} height={30} style={{ marginVertical: 5 }} />
          </>
        )}
      </View>
    </TouchableHighlight>
  );
};
