import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";

export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{ cardStyle: { backgroundColor: "#fff" } }}
      >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Orders" component={Orders}></Stack.Screen>
        <Stack.Screen name="OrderDetails" component={OrderDetails}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
