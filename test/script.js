const fetchTest = async () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=51.5156177&lon=-0.0919983&appid=18626aa6a74de898fc6f22f9e3568cb4",
    {
      method: "get",
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => console.log(res));
};

fetchTest();
