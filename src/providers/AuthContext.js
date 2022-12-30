import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(undefined);

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null && value !== undefined) {
        setToken(value);
      } else {
        setToken(undefined);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => {
      await getToken();
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};
