import { getData } from "../storageLocal";
const updateWeather = async (oldListValue) => {
  const token = await getData("token");

  const getNewValue = async (cityName) => {
    var cityData = [];
    await fetch(
      `http://api.weatherapi.com/v1/current.json?key=c89b25544b004dbe9c3152640221407&q=${cityName}&aqi=no
`,
      {
        method: "get",
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return false;
        }
      })
      .then((res) => {
        return (cityData = res);
      });
    return cityData;
  };

  const update = async () => {
    const updateList = [];
    for (let i = 0; oldListValue.length > i; i++) {
      const cityUpdate = await getNewValue(oldListValue[i].name);
      const data = {
        name: "cityUpdate.location.name",
        country: "cityUpdate.location.country",
        temp: "cityUpdate.current.temp_c",
        weather: "cityUpdate.current.condition.text",
        codeCondition: "cityUpdate.current.condition.code",
      };
      updateList.push(data);
    }
    var favorites = {
      favorites: updateList,
    };
    favorites = JSON.stringify(favorites);

    await fetch(`http://192.168.0.103:8080/updateFavorites`, {
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
      body: favorites,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => console.log(res, "return"));
  };
  await update();
};

export { updateWeather };
