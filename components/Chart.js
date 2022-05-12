import React from "react";
import { View } from "react-native";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  monotoneCubicInterpolation,
} from "@rainbow-me/animated-charts";
import moment from "moment";
import { COLORS, SIZES } from "../constants";

export default Chart = ({ chartPrices }) => {
  //Points
  let startUnixTimestamp = moment().subtract(7, "day").unix();

  let data = chartPrices.map((item, index) => {
    return {
      x: startUnixTimestamp + (index + 1) * 3600,
      y: item,
    };
  });

  const points = monotoneCubicInterpolation({ data, range: 40 });

  return (
    <View style={{ backgroundColor: "black" }}>
      <ChartPathProvider data={{ points, smoothingStrategy: "bezier" }}>
        <ChartPath
          height={SIZES.width / 2}
          stroke={COLORS.lightGreen}
          width={SIZES.width}
        />
        <ChartDot style={{ backgroundColor: "blue" }} />
      </ChartPathProvider>
    </View>
  );
};
