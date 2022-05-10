import { View, Text } from "react-native";
import React from "react";
import MainLayout from "./MainLayout";
import { connect } from "react-redux";
import { getHoldings } from "../store/market/marketActions";
import { useFocusEffect } from "@react-navigation/native";
import { COLORS, dummyData, icons, SIZES } from "../../constants";
import { BalanceInfo, IconTextButton } from "../../components";

const Home = ({ getHoldings, myHoldings }) => {
  useFocusEffect(
    React.useCallback(() => {
      getHoldings(dummyData.holdings);
    }, [])
  );

  let totalWallet = myHoldings.reduce((a, b) => a + (b.total || 0), 0);
  let valueChange = myHoldings.reduce(
    (a, b) => a + (b.holding_value_change_7d || 0),
    0
  );
  let percChange = (valueChange / (totalWallet - valueChange)) * 100;
  function renderWalletInfoSection() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          backgroundColor: COLORS.gray,
        }}
      >
        {/* Balance Info */}
        <BalanceInfo
          title="Your Wallet"
          displayAmount={totalWallet}
          changePct={percChange}
          containerStyle={{ maringTop: 20 }}
        />

        {/* Buttons */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            marginBottom: -15,
            paddingHorizontal: SIZES.radius,
          }}
        >
          <IconTextButton
            label="Transfer"
            icon={icons.send}
            containerStyle={{ flex: 1, height: 40, marginRight: SIZES.radius }}
            onPress={() => console.log("transfer")}
          />
          <IconTextButton
            label="Withdraw"
            icon={icons.withdraw}
            containerStyle={{ flex: 1, height: 40 }}
            onPress={() => console.log("Withdraw")}
          />
        </View>
      </View>
    );
  }
  return (
    <MainLayout>
      <View style={{ flex: 1, backgroundColor: COLORS.black }}>
        {/* wallet info section */}
        {renderWalletInfoSection()}
      </View>
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
