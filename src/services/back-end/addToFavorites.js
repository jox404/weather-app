import { setData, getData } from "../storageLocal";

const addToFavorites = async (name, temp, country, codeCondition) => {
  var dataFavoriteModel = {
    favorite: {
      name: name,
      temp: temp,
      country: country,
      codeCondition: codeCondition,
    },
  };
  dataFavoriteModel = JSON.stringify(dataFavoriteModel);
  const token = await getData("token");
  var alreadyFavorited = undefined;
  try {
    await fetch(`http://192.168.0.103:8080/addFavorites`, {
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
      body: dataFavoriteModel,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
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
