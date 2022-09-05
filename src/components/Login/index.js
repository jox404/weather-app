import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Input from "../Input";
import { loginStyle } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import ButtonCustom from "../ButtonCustom";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { LogoIcon } from "../Icons";
import { WeatherContext } from "../../providers/auth";
import { setData } from "../../services/storageLocal";

export default function Login() {
  const { setTokenStatus, dateNow, getData } = React.useContext(WeatherContext);
  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  };

  const [alert, setAlert] = useState({
    active: false,
    alertMensage: "",
    bgColor: "194, 16, 16",
  });
  const handleAlert = (menssage, type) => {
    console.log(type, menssage);
    var bgColor = "";
    if (type === "error") {
      bgColor = "194, 16, 16";
    } else if (type === "warning") {
      bgColor = "254, 219, 57";
    } else if (type === "successfull") {
      bgColor = "125, 206, 19";
    } else {
      bgColor = "254, 219, 57";
    }
    setAlert({
      active: true,
      alertMensage: menssage,
      bgColor: bgColor,
    });
  };

  const styles = loginStyle;
  const [name, setName] = useState("j");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("j");
  const handleChange = (e, setState) => {
    setState(e);
  };

  const handleSignIn = async (email, password) => {
    const data = {
      email: email,
      password: password,
    };
    await fetch("http://192.168.0.103:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer my-token",
        "My-Custom-Header": "foobar",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then(async (res) => {
        if (res.token) {
          await setData("token", res.token); /* ta errado esse token */
          const favorites = JSON.stringify(res.favorites);
          getData();
          /*  await setData("favorites", favorites); */
          await setTokenStatus(true); /* nada a ver foda-se */
        } else {
          console.log(res);
          handleAlert(res.error, "warning");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignUp = async (name, email, password) => {
    if (name === null || name === undefined || name === "") {
      handleAlert("can't have empty field", "error");
    } else if (email === null || email === undefined || email === "") {
      handleAlert("can't have empty field", "error");
    } else if (password === null || password === undefined || password === "") {
      handleAlert("can't have empty field", "error");
    } else {
      const data = {
        name: name,
        email: email,
        password: password,
      };

      await fetch("http://192.168.0.103:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer my-token",
          "My-Custom-Header": "foobar",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else if (res.status === 500) {
            return handleAlert("Internal Server Error", "error");
          }
        })
        .then((res) => {
          handleAlert(res.menssage, "successfull");
          setName("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => console.log(error));
    }
  };

  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(true);

  return (
    <LinearGradient
      colors={dateNow <= 17 ? ["#00A4FF", "#fff"] : ["#112B3C", "#31155F"]}
    >
      <View style={styles.container}>
        <View style={[{ marginTop: 70 }]}>
          <LogoIcon widht={200} height={200} />
        </View>
        <View
          style={{
            backgroundColor: "rgba(255,255,255,1)",
            elevation: 1,
            marginHorizontal: 20,
            borderRadius: 10,
            paddingTop: 20,
            paddingBottom: 20,
            paddingHorizontal: 10,
          }}
        >
          <View style={styles.signInSignUpContainer}>
            <View style={styles.signInContainer}>
              <ButtonCustom
                name={"Sign In"}
                color={signIn ? "#0096FF" : "#000"}
                colorText={"#fff"}
                onClick={() => {
                  setSignIn(true);
                  if (signUp) {
                    setSignUp(false);
                  }
                }}
              />
            </View>
            <View style={styles.SignUpContainer}>
              <ButtonCustom
                name={"Sign Up"}
                color={signUp ? "#0096FF" : "#000"}
                colorText={"#fff"}
                onClick={() => {
                  setSignUp(true);
                  if (signIn) {
                    setSignIn(false);
                  }
                }}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 50,
              justifyContent: "space-between",
            }}
          >
            <Input
              value={name}
              handleChange={(e) => handleChange(e, setName)}
              placeholder={"Name"}
              icon={<FontAwesome name="user" size={24} color="#606060" />}
              autoComplete={"name"}
              display={signUp ? "flex" : "none"}
            />
            <Input
              value={email}
              handleChange={(e) => handleChange(e, setEmail)}
              placeholder={"Email Address"}
              icon={<MaterialIcons name="email" size={24} color="#606060" />}
              autoComplete={"email"}
            />
            <Input
              value={password}
              handleChange={(e) => handleChange(e, setPassword)}
              placeholder={"Password"}
              icon={<MaterialIcons name="lock" size={24} color="#606060" />}
              password={true}
              autoComplete={"password-new"}
            />
          </View>
          <View
            style={{
              marginTop: 40,
              marginHorizontal: 70,
              marginBottom: 20,
              position: "relative",
            }}
          >
            <ButtonCustom
              name={"LOGIN"}
              color={"#0096FF"}
              colorText={"#fff"}
              onClick={() => handleSignIn(email, password)}
              display={signIn ? "flex" : "none"}
            />
            <ButtonCustom
              name={"SIGN UP"}
              color={"#0096FF"}
              colorText={"#fff"}
              onClick={() => handleSignUp(name, email, password)}
              display={signUp ? "flex" : "none"}
            />
          </View>
        </View>
        <View
          style={[
            styles.alert,
            {
              display: alert.active ? "flex" : "none",
              backgroundColor: `rgba(${alert.bgColor}, 0.5)`,
            },
          ]}
        >
          <Text style={styles.txtError}>{alert.alertMensage}</Text>
        </View>
      </View>
    </LinearGradient>
  );
}
