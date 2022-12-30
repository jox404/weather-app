const [token, setToken] = useState(false);
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    if (value !== null && value !== undefined) {
      setToken(value);
    } else {
      value;
    }
  } catch (error) {
    console.log(error);
  }
};
const authValidator = (tokenStatus) => {
  if (tokenStatus) {
    return true;
  } else {
    return false;
  }
};

export default authValidator();
