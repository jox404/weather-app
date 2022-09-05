const handleSearchCity = async (cityName) => {
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
