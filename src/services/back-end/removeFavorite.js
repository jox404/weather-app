import { getData, setData } from "../storageLocal";

const removeFavorite = async (index) => {
  const token = await getData("token");
  try {
    console.log(index, "index");
    await fetch(`http://192.168.0.103:8080/removeFavorite/${index}/1`, {
      method: "delete",
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
        console.log(res, "res remove favorites");
        const newFavorites = JSON.stringify(res);
        setData("favorites", newFavorites);
      });
  } catch (error) {
    console.log(error);
  }
};

export { removeFavorite };
