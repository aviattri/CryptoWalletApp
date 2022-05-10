import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { setTradeModalVisibility } from "../store/tabs/tabActions";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, icons } from "../../constants";
import { Home, Profile, Portfolio, Market, Trade } from "../screens";
import { TabIcon } from "../../components";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const Tabs = ({ setTradeModalVisibility, isTradeModalVisible }) => {
  function tradeTabButtonOnClickHandler() {
    setTradeModalVisibility(!isTradeModalVisible);
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 140,
          backgroundColor: COLORS.primary,
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon focused={focused} icon={icons.home} label={"Home"} />
              );
            }
          },
          headerShown: false,
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ focused }) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.briefcase}
                  label={"Portfolio"}
                />
              );
            }
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Trade}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.trade}
                label={"Trade"}
                isTrade={true}
              />
            );
          },
          tabBarButton: (props) => {
            return (
              <TabBarCustomButton
                {...props}
                onPress={() => tradeTabButtonOnClickHandler()}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({ focused }) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.market}
                  label={"Market"}
                />
              );
            }
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.profile}
                  label="Profile"
                />
              );
            }
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

function mapStateToProps(state) {
  return {
    isTradeModalVisible: state.tabReducer.isTradeModalVisible,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTradeModalVisibility: (isVisible) => {
      return dispatch(setTradeModalVisibility(isVisible));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
