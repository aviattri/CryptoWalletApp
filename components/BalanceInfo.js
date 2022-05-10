import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const BalanceInfo = ({ title, displayAmount, changePct, containerStyle }) => {
  return (
    <View style={{ ...containerStyle, paddingTop: SIZES.radius * 4 }}>
      {/* title */}
      <Text style={{ ...FONTS.h3, color: COLORS.lightGray3 }}>{title}</Text>
      {/* Figure */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <Text style={{ ...FONTS.h3, color: COLORS.lightGray3 }}>$</Text>
        <Text
          style={{ ...FONTS.h2, marginLeft: SIZES.base, color: COLORS.white }}
        >
          {displayAmount.toLocaleString()}
        </Text>
        <Text
          style={{
            ...FONTS.h3,
            marginLeft: SIZES.base,
            color: COLORS.lightGray3,
          }}
        >
          {`USD`}
        </Text>
      </View>

      {/* Change Pct */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        {changePct != 0 && (
          <Image
            source={icons.upArrow}
            style={{
              width: 10,
              height: 10,
              alignSelf: "center",
              tintColor: changePct > 0 ? COLORS.lightGreen : COLORS.red,
              transform:
                changePct > 0 ? [{ rotate: "45deg" }] : [{ rotate: "125deg" }],
            }}
          />
        )}
        <Text
          style={{
            ...FONTS.h4,
            color:
              changePct == 0
                ? COLORS.lightGray3
                : changePct > 0
                ? COLORS.lightGreen
                : COLORS.red,
            marginLeft: SIZES.base,
            alignSelf: "flex-end",
          }}
        >
          {`${changePct.toFixed(2)} %`}
        </Text>
        <Text
          style={{
            marginLeft: SIZES.radius,
            alignSelf: "flex-end",
            color: COLORS.lightGray3,
            ...FONTS.h5,
          }}
        >{` 7d Change`}</Text>
      </View>
    </View>
  );
};

export default BalanceInfo;
