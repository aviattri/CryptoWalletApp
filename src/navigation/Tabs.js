import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

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

const Tabs = () => {
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
            return (
              <TabIcon focused={focused} icon={icons.home} label={"Home"} />
            );
          },
          tabBarButton: (props) => {
           return <TabBarCustomButton
              {...props}
              onPress={() => console.log("Home")}
            />;
          },
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.briefcase}
                label={"Portfolio"}
              />
            );
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
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focused={focused} icon={icons.market} label={"Market"} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focused={focused} icon={icons.profile} label="Profile" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
