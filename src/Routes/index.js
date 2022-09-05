import React, { useEffect } from "react";
import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabs from "./BottomTabs";
import Auth from "./Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WeatherContext } from "../providers/auth";

export default function Routes() {
  const [token, setToken] = useState(undefined);
  const [auth, setAuth] = useState(false);
  const { tokenStatus, setTokenStatus } = React.useContext(WeatherContext);
  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
        setToken(token);
        console.log(token); /* remover depois que o projeto acabar */
      } else {
        console.log("token don't exists");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const apiResponse = async () => {
    fetch("http://192.168.0.103:3000/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer my-token",
        "My-Custom-Header": "foobar",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "x-access-token": token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.status === "ok") {
          setTokenStatus(true);
        } else {
          setTokenStatus(false);
        }
      });
  };

  const authValidator = (auth) => {
    if (auth) {
      return <BottomTabs />;
    } else {
      return <Auth />;
    }
  };
  useEffect(() => {
    getData();
    apiResponse();
  }, [token]);

  return <>{authValidator(tokenStatus)}</>;
}
