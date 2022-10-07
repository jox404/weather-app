export const forecast = async () => {
  var data = "";
  await fetch(
    "https://api.openweathermap.org/data/2.5/forecast?lat=51.5156177&lon=-0.0919983&units=metric&appid=18626aa6a74de898fc6f22f9e3568cb4",
    {
      method: "get",
    }
  )
    .then((res) => res.json())
    .then((res) => {
      data = res;
      return data;
    });
  return data;
};
