import AsyncStorage from "@react-native-async-storage/async-storage";
import { getData, setData } from "./storageLocal";

const removeFavorite = async (index) => {
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
  try {
    await fetch(`http://192.168.0.103:3000/removeFavorite/${index}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer my-token",
        "My-Custom-Header": "foobar",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "x-access-token": token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const newFavorites = JSON.stringify(res);
        setData("favorites", newFavorites);
      });
  } catch (error) {
    console.log(error);
  }
};

export { removeFavorite };
