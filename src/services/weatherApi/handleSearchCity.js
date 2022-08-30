const handleSearchCity = async (cityName) => {
  /* var cityData = {
    location: {
      name: "London",
      region: "City of London, Greater London",
      country: "United Kingdom",
      lat: 51.52,
      lon: -0.11,
      tz_id: "Europe/London",
      localtime_epoch: 1658159965,
      localtime: "2022-07-18 16:59",
    },
    current: {
      last_updated_epoch: 1658159100,
      last_updated: "2022-07-18 16:45",
      temp_c: 35.0,
      temp_f: 95.0,
      is_day: 1,
      condition: {
        text: "Sunny",
        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        code: 1000,
      },
      wind_mph: 13.6,
      wind_kph: 22.0,
      wind_degree: 210,
      wind_dir: "SSW",
      pressure_mb: 1018.0,
      pressure_in: 30.06,
      precip_mm: 0.0,
      precip_in: 0.0,
      humidity: 16,
      cloud: 0,
      feelslike_c: 33.2,
      feelslike_f: 91.7,
      vis_km: 10.0,
      vis_miles: 6.0,
      uv: 10.0,
      gust_mph: 7.2,
      gust_kph: 11.5,
    },
  }; */
  var cityData = "";
  if (cityName === "" || cityName === undefined) {
    return (cityData = "input empty");
  } else {
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
  }
  return cityData;
};

export { handleSearchCity };
