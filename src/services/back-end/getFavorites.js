import AsyncStorage from "@react-native-async-storage/async-storage";

const getFavorites = async () => {
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
  var favoritesAndLastUpdate = undefined;
  await fetch(`http://192.168.0.103:3000/favorites`, {
    method: "GET",
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
      return (favoritesAndLastUpdate = res);
    });
  return favoritesAndLastUpdate;
};

export { getFavorites };
