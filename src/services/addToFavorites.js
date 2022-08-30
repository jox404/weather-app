import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { WeatherContext } from "../providers/auth";
import { setData } from "../services/storageLocal";

const addToFavorites = async (name, temp, country, weather) => {
  var data = {
    favorites: {
      name: name,
      temp: temp,
      country: country,
      weather: weather,
    },
  };
  data = JSON.stringify(data);
  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
        console.log(token);
        return token;
      } else {
        console.log("token don't exists");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const token = await getToken();
  await fetch(`http://192.168.0.103:3000/addFavorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer my-token",
      "My-Custom-Header": "foobar",
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
      "x-access-token": token,
    },
    body: data,
  })
    .then((res) => res.json())
    .then((res) => {
      const favorites = JSON.stringify(res.favorites);
      setData("favorites", favorites);
    });
};

export { addToFavorites };
