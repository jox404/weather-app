import { getData } from "../storageLocal";

const getFavorites = async () => {
  const token = await getData("token");
  var favoritesAndLastUpdate = undefined;
  await fetch(`http://192.168.0.103:8080/favorites`, {
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
      console.log(res);
      return (favoritesAndLastUpdate = res);
    });
  return favoritesAndLastUpdate;
};

export { getFavorites };
