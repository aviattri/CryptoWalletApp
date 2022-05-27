import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";

const HeaderBar = ({ title }) => {
  return (
    <View
      style={{
        height: 100,
        marginTop: 50,
        paddingHorizontal: SIZES.radius,
        justifyContent: "center",
        marginBottom: -20,
      }}
    >
      <Text style={{ color: COLORS.white, ...FONTS.largeTitle }}>{title}</Text>
    </View>
  );
};

export default HeaderBar;
