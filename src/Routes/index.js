import React, { useContext } from "react";
import BottomTabs from "./BottomTabs";
import Auth from "./Auth";
import { WeatherProvider } from "../providers/WeatherContext";
import { AuthContext } from "../providers/AuthContext";

export default function Routes() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Auth />;
  }

  return (
    <WeatherProvider>
      <BottomTabs />
    </WeatherProvider>
  );
}
