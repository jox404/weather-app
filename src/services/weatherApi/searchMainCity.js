const searchMainCity = async (cityName) => {
  let data = {};
  await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=c89b25544b004dbe9c3152640221407&q=${cityName}&days=3&aqi=no&alerts=no`,
    {
      method: "get",
    }
  )
    .then((res) => res.json())
    .then((res) => {
      data = {
        current: {
          name: res.location.name,
          region: res.location.region,
          country: res.location.country,
          temp: res.current.temp_c,
          conditionCode: res.current.condition.code,
          wind: res.current.wind_kph,
          humidity: res.current.humidity,
        },
        forecast: res.forecast.forecastday,
      };
    });

  return data;
};

export { searchMainCity };
