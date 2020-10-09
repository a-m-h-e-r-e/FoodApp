import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./app/RootNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./app/screens/DetailScreen";
import { AppLoading } from "expo";
import { Container, Button, Text, Icon } from "native-base";
import * as Font from "expo-font";

import { Ionicons } from "@expo/vector-icons";
import FooterTabsBadgeExample from "./app/components/BottomTab";
import HomeScreen from "./app/screens/HomeScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <NavigationContainer initialRouteName="Details" ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Order" component={DetailScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
        <StatusBar hidden />
        <FooterTabsBadgeExample />
      </NavigationContainer>
    );
  }
}
