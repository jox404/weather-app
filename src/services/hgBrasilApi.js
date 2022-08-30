export const weatherCity = async () => {
  await fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=18626aa6a74de898fc6f22f9e3568cb4",
    {
      method: "get",
    }
  ).then((res) => {
    return res.json();
  });
  /*  */
};
