import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { WeatherContext } from "../../providers/auth";
import { setData } from "../storageLocal";

const addToFavorites = async (name, temp, country, codeCondition) => {
  var data = {
    favorites: {
      name: name,
      temp: temp,
      country: country,
      codeCondition: codeCondition,
    },
  };
  data = JSON.stringify(data);
  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
        return token;
      } else {
        console.log("token don't exists");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const token = await getToken();
  var alreadyFavorited = undefined;
  try {
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
        /* console.log(res.menssage); */
        const favorites = JSON.stringify(res.favorites);
        if (favorites) {
          setData("favorites", favorites);
        } else {
          return (alreadyFavorited = JSON.stringify(res.alreadyFavorited));
        }
      });
  } catch (error) {
    console.log(error);
  }
  return alreadyFavorited;
};

export { addToFavorites };
