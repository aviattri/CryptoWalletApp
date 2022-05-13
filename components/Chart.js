import React from "react";
import { Text, View } from "react-native";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartXLabel,
  ChartYLabel,
  monotoneCubicInterpolation,
} from "@rainbow-me/animated-charts";
import moment from "moment";
import { COLORS, FONTS, SIZES } from "../constants";

export default Chart = ({ chartPrices, containerStyle }) => {
  //Points
  let startUnixTimestamp = moment().subtract(7, "day").unix();

  let data = chartPrices.map((item, index) => {
    return {
      x: startUnixTimestamp + (index + 1) * 3600,
      y: item,
    };
  });

  const points = monotoneCubicInterpolation({ data, range: 40 });

  const formatUSD = (value) => {
    "worklet";
    if (value === "") {
      return "";
    } else {
      return `$${Number(value).toFixed(2)}`;
    }
  };

  const formatDateTime = (value) => {
    "worklet";
    if (value === "") {
      return "";
    }

    var selectedDate = new Date(value * 1000);

    let date = `0${selectedDate.getDate()}`.slice(-2);
    let month = `0${selectedDate.getMonth() + 1}`.slice(-2);

    return `${date}/${month}`;
  };

  const formatNumber = (value, roundingPoint) => {
    // value less than 1 bil
    if (value > 1e9) {
      return `${(value / 1e9).toFixed(roundingPoint)}B`;
    }
    //value greater than 1mil
    if (value > 1e6) {
      return `${(value / 1e6).toFixed(roundingPoint)}M`;
    }

    //value greater than 1 thousand
    if (value > 1e3) {
      return `${(value / 1e3).toFixed(roundingPoint)}K`;
    }

    return value.toFixed(roundingPoint);
  };

  const getYAxisLabelValues = () => {
    if (chartPrices != undefined) {
      let minValue = Math.min(...chartPrices);
      let maxValue = Math.max(...chartPrices);

      let midValue = (minValue + maxValue) / 2;

      let higherMidValue = (maxValue + midValue) / 2;
      let lowerMidValue = (minValue + midValue) / 2;

      let roundingPoint = 2;

      return [
        formatNumber(maxValue, roundingPoint),
        formatNumber(minValue, roundingPoint),
        formatNumber(midValue, roundingPoint),
        formatNumber(higherMidValue, roundingPoint),
        formatNumber(lowerMidValue, roundingPoint),
      ];
    }
    return [];
  };

  return (
    <View
      style={{
        ...containerStyle,
        marginTop: SIZES.padding,
        paddingLeft: SIZES.padding,
      }}
    >
      {/* Y Axis Label */}
      <View
        style={{
          marginTop: SIZES.radius,
          position: "absolute",
          left: SIZES.padding,
          top: 0,
          bottom: 0,
          justifyContent: "space-between",
          zIndex: 1,
        }}
      >
        {/* get Y Axis Label Value */}
        {getYAxisLabelValues().map((item, index) => {
          return (
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body4,
                fontWeight: "500",
              }}
              key={index}
            >
              {item}
            </Text>
          );
        })}
      </View>

      <ChartPathProvider data={{ points, smoothingStrategy: "bezier" }}>
        <ChartPath
          height={SIZES.width / 2}
          stroke={COLORS.lightGreen}
          width={SIZES.width}
        />
        <ChartDot>
          <View
            style={{
              position: "absolute",
              left: -35,
              width: 80,
              alignItems: "center",
              backgroundColor: COLORS.transparentBlack1,
            }}
          >
            {/* Dot */}
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 25,
                height: 25,
                borderRadius: 15,
                backgroundColor: COLORS.white,
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 10,
                  backgroundColor: COLORS.lightGreen,
                }}
              />
            </View>

            {/* Y-Label */}
            <ChartYLabel
              format={formatUSD}
              style={{
                color: COLORS.white,
                ...FONTS.body5,
              }}
            />
            {/* X-Label */}
            <ChartXLabel
              format={formatDateTime}
              style={{
                marginTop: 3,
                color: COLORS.lightGray3,
                ...FONTS.body5,
                lineHeight: 15,
              }}
            />
          </View>
        </ChartDot>
      </ChartPathProvider>
    </View>
  );
};
