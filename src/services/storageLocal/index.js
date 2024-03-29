import AsyncStorage from "@react-native-async-storage/async-storage";

const setData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};
const getData = async (key) => {
  try {
    var value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (erro) {
    console.log(erro);
  }
};

export { setData, getData };
