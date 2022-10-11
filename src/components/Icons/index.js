import react from "react";
import { View } from "react-native";
import Logo from "../../assets/logo.svg";
import Sun from "../../assets/sun.svg";
import Moon from "../../assets/moon.svg";
import DropNight from "../../assets/dropNight.svg";
import DropDay from "../../assets/dropDay.svg";
import WindNight from "../../assets/windNight.svg";
import WindDay from "../../assets/windDay.svg";
import CaudyDay from "../../assets/cloudyDay.svg";
import CaudyNight from "../../assets/cloudyNight.svg";
import SearchIconDay from "../../assets/searchIconDay.svg";
import SearchIconNight from "../../assets/searchIconNight.svg";
import SunEllipse from "../../assets/sunEllipse.svg";
import CloudyDayLarge from "../../assets/cloudyDayLarge.svg";
import CloudyNightLager from "../../assets/cloudyNightLarge.svg";
import RainyDay from "../../assets/rainyDay.svg";
import MoonEllipse from "../../assets/moonEllipse.svg";
import RainyNight from "../../assets/rainyNight.svg";
import Heart from "../../assets/heart.svg";
import HeartBroken from "../../assets/heartBroken.svg";
import SendArrowDay from "../../assets/sendArrowDay.svg";
import SendArrowNight from "../../assets/sendArrowNight.svg";
import SnowDay from "../../assets/snowDay.svg";
import SnowNight from "../../assets/snowNight.svg";
const LogoIcon = (props) => {
  return <Logo width={props.width} height={props.height} />;
};

const SunIcon = (props) => {
  return <Sun width={props.width} height={props.height} style={props.style} />;
};

const MoonIcon = (props) => {
  return <Moon width={props.width} height={props.height} style={props.style} />;
};

const DropNightIcon = (props) => {
  return (
    <DropNight width={props.width} height={props.height} style={props.style} />
  );
};
const DropDayIcon = (props) => {
  return (
    <DropDay width={props.width} height={props.height} style={props.style} />
  );
};
const WindNightIcon = (props) => {
  return (
    <WindNight width={props.width} height={props.height} style={props.style} />
  );
};
const WindDayIcon = (props) => {
  return (
    <WindDay width={props.width} height={props.height} style={props.style} />
  );
};
const CaudyDayIcon = (props) => {
  return (
    <CaudyDay width={props.width} height={props.height} style={props.style} />
  );
};
const CaudyNightIcon = (props) => {
  return (
    <CaudyNight width={props.width} height={props.height} style={props.style} />
  );
};
const SearchDayIcon = (props) => {
  return (
    <SearchIconDay
      width={props.width}
      height={props.width}
      style={props.style}
    />
  );
};
const SearchNightIcon = (props) => {
  return (
    <SearchIconNight
      width={props.width}
      height={props.width}
      style={props.style}
    />
  );
};

const SunEllipseIcon = (props) => {
  return (
    <SunEllipse width={props.width} height={props.width} style={props.style} />
  );
};
const CloudyDayLargeIcon = (props) => {
  return (
    <CloudyDayLarge
      width={props.width}
      height={props.width}
      style={props.style}
    />
  );
};
const CloudyNightLagerIcon = (props) => {
  return (
    <CloudyNightLager
      width={props.width}
      height={props.width}
      style={props.style}
    />
  );
};
const RainyDayIcon = (props) => {
  return (
    <RainyDay width={props.width} height={props.width} style={props.style} />
  );
};
const MoonEllipseIcon = (props) => {
  return (
    <MoonEllipse width={props.width} height={props.width} style={props.style} />
  );
};
const RainyNightIcon = (props) => {
  return (
    <RainyNight width={props.width} height={props.width} style={props.style} />
  );
};

const HeartIcon = (props) => {
  return <Heart width={props.width} height={props.width} style={props.style} />;
};

const HeartBrokenIcon = (props) => {
  return (
    <HeartBroken width={props.width} height={props.width} style={props.style} />
  );
};

const SendArrowDayIcon = (props) => {
  return (
    <SendArrowDay
      width={props.width}
      height={props.width}
      style={props.style}
    />
  );
};
const SendArrowNightIcon = (props) => {
  return (
    <SendArrowNight
      width={props.width}
      height={props.width}
      style={props.style}
    />
  );
};

const SnowDayIcon = (props) => {
  return (
    <SnowDay width={props.width} height={props.width} style={props.style} />
  );
};

const SnowNightIcon = (props) => {
  return <SnowNight width={props.width} height={props.width} />;
};
export {
  LogoIcon,
  SunIcon,
  MoonIcon,
  DropNightIcon,
  DropDayIcon,
  WindNightIcon,
  WindDayIcon,
  CaudyDayIcon,
  CaudyNightIcon,
  SearchDayIcon,
  SearchNightIcon,
  SunEllipseIcon,
  CloudyDayLargeIcon,
  CloudyNightLagerIcon,
  RainyDayIcon,
  MoonEllipseIcon,
  RainyNightIcon,
  HeartIcon,
  HeartBrokenIcon,
  SendArrowDayIcon,
  SendArrowNightIcon,
  SnowDayIcon,
  SnowNightIcon,
};
