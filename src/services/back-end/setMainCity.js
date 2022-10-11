import { setData, getData } from "../storageLocal";
import { searchMainCity } from "../weatherApi/searchMainCity";

const setMainCity = async (cityName) => {
  const data = await searchMainCity(cityName);

  let forecastDay = [];
  data.forecast[0].hour.map((hour) => {
    let data = {
      temp: hour.temp_c,
      hour: hour.time,
      codeCondition: hour.condition.code,
    };
    return forecastDay.push(data);
  });
  let forecastWeek = [];
  data.forecast.map((day) => {
    let data = {
      day: day.date,
      codeCondition: day.day.condition.code,
      maxTemp: day.day.maxtemp_c,
      minTemp: day.day.mintemp_c,
    };
    forecastWeek.push(data);
  });

  var mainCityModel = {
    mainCity: {
      name: data.current.name,
      codeCondition: data.current.codeCondition,
      country: data.current.country,
      humidity: data.current.humidity,
      region: data.current.region,
      temp: data.current.temp,
      wind: data.current.wind,
      forecastDay: forecastDay,
      forecastWeek: forecastWeek,
    },
  };
  const token = await getData("token");
  try {
    await fetch(`http://192.168.0.103:8080/setMainCity/1`, {
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
      body: JSON.stringify(mainCityModel),
    })
      .then((res) => res.json())
      .then((res) => {
        /*  console.log(res); */
      });
  } catch (error) {
    console.log(error);
  }
};

export { setMainCity };
