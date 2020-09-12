import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Coffee from "../screens/Coffee";
import End from "../screens/End";


const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Detail" component={Detail} />
    <Stack.Screen name="Coffee" component={Coffee} />
    <Stack.Screen name="End" component={End} />
  </Stack.Navigator>
);