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
      console.log(res.forecast.forecastday[0].astro);
      data = {
        current: {
          name: res.location.name,
          region: res.location.region,
          country: res.location.country,
          temp: res.current.temp_c,
          conditionCode: res.current.condition.code,
          wind: res.current.wind_kph,
          humidity: res.current.humidity,
          maxTemp: res.forecast.forecastday[0].day.maxtemp_c,
          minTemp: res.forecast.forecastday[0].day.mintemp_c,
          astro: {
            sunRise: res.forecast.forecastday[0].astro.sunrise,
            sunSet: res.forecast.forecastday[0].astro.sunset,
            moonRise: res.forecast.forecastday[0].astro.moonrise,
            moonSet: res.forecast.forecastday[0].astro.moonset,
          },
        },
        forecast: res.forecast.forecastday,
      };
    });

  return data;
};

export { searchMainCity };
