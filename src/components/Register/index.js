import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Input from "../Input";
import { registerStyle } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import ButtonCustom from "../ButtonCustom";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { LogoIcon } from "../Icons";

export default function Register() {
  const styles = registerStyle;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e, setState) => {
    setState(e);
    console.log(e);
  };

  const handleSignIn = async (name, email) => {
    const data = {
      name: "joao",
      email: "joaovitorribeiroc10@gmail.com",
    };
    await fetch("http://192.168.0.103:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer my-token",
        "My-Custom-Header": "foobar",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      },
      body: JSON.stringify({
        name: "joao",
        email: "joaovitorribeiroc35@gmail.com",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <LinearGradient colors={["#FF9900", "#31155F"]}>
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
          <Text style={styles.title}>Sign In {(email, password)}</Text>
          <View
            style={{
              marginTop: 50,
              justifyContent: "space-between",
              height: 110,
            }}
          >
            <Input
              value={name}
              handleChange={(e) => handleChange(e, setName)}
              placeholder={"Name"}
              icon={<FontAwesome name="user" size={24} color="#606060" />}
              colorInput={"rgba(255,255,255,0.2)"}
              autoComplete={"name"}
            />
            <Input
              value={email}
              handleChange={(e) => handleChange(e, setEmail)}
              placeholder={"Email Address"}
              icon={<MaterialIcons name="email" size={24} color="#606060" />}
              colorInput={"rgba(255,255,255,0.2)"}
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
            style={{ marginTop: 40, marginHorizontal: 70, marginBottom: 20 }}
          >
            <ButtonCustom
              name={"REGISTER"}
              color={"#31155F"}
              colorText={"#fff"}
              onClick={() =>
                handleSignIn("joaovitorribeiroc14@gmail.com", "102030")
              }
            />
          </View>
          <View style={styles.txtSignUpContainer}>
            <Text style={[styles.txtSignUp, styles.link]}>
              Already have an account?
            </Text>
            <Text style={[styles.txtSignUp, styles.link]}>Sign In</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
