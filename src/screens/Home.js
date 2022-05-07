import { View, Text } from "react-native";
import React from "react";
import MainLayout from "./MainLayout";
import { connect } from "react-redux";
import { getHoldings } from "../store/market/marketActions";
import { useFocusEffect } from "@react-navigation/native";
import { dummyData } from "../../constants";

const Home = ({ getHoldings, myHoldings }) => {
  useFocusEffect(
    React.useCallback(() => {
      getHoldings(dummyData.holdings);
    }, [])
  );
  return (
    <MainLayout>
      <Text>Home</Text>
    </MainLayout>
  );
};

function mapStateToProps(state) {
  return {
    myHoldings: state.marketReducer.myHoldings,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHoldings: (
      holdings,
      currency,
      coinList,
      orderBy,
      sparkLine,
      priceChangePerc,
      perPage,
      page
    ) => {
      return dispatch(
        getHoldings(
          holdings,
          currency,
          coinList,
          orderBy,
          sparkLine,
          priceChangePerc,
          perPage,
          page
        )
      );
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
