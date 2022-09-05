import { handleSearchCity } from "../weatherApi/handleSearchCity";
const updateWeather = (oldListValue) => {
  var newListValues = [];
  oldListValue.map((res) => {
    const city2 = handleSearchCity(res.name).then((res) => {
      return res;
    });
    const city = handleSearchCity(res.name).then((res) => {
      /* var data = {
        name: res.location.name,
        country: res.location.country,
        temp: res.current.temp_c,
        weather: res.current.condition.text,
        codeCondition: res.current.condition.code,
      }; */
      return res;
    });
    console.log(city2, "city2");

    /* newListValues.push(city); */
  });
  /*  console.log(newListValues, "new List"); */
};

export { updateWeather };
