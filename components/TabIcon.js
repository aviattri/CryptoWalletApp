import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";

const TabIcon = ({ focused, icon, label, isTrade, iconStyle }) => {
  console.log(label);
  if (isTrade) {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 30,
          height: 60,
          width: 60,
          backgroundColor: COLORS.black,
        }}
      >
        <Image
          resizeMode="contain"
          source={icon}
          style={{
            height: 25,
            width: 25,
            tintColor: focused ? COLORS.white : COLORS.secondary,
            ...iconStyle,
          }}
        />
        <Text style={{ color: COLORS.white }}>Trade</Text>
      </View>
    );
  } else {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          resizeMode="contain"
          source={icon}
          style={{
            height: 25,
            width: 25,
            tintColor: focused ? COLORS.white : COLORS.secondary,
            ...iconStyle,
          }}
        />
        <Text
          style={{
            color: focused ? COLORS.white : COLORS.secondary,
            ...FONTS.h4,
          }}
        >
          {label}
        </Text>
      </View>
    );
  }
};

export default TabIcon;
