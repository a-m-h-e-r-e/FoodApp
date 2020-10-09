import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableNativeFeedback,
  Alert,
  Platform,
  StatusBar as Stat,
  Dimensions,
} from "react-native";

import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.push("Home")} />
    </View>
  );
}
const Stack = createStackNavigator();

export default function App({ navigation }) {
  let x = 1;
  console.log(require("./assets/icon.png"));
  const { landscape } = useDeviceOrientation();
  console.log(landscape);
  return (
    <NavigationContainer initialRouteName="Home">
      {/* Rest of your app code */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Overview" }}
        />
        {/* <Button title="go back" onPress={() => navigation.goBack()} /> */}
      </Stack.Navigator>
      {/* <View
        style={{
          backgroundColor: "white",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          // alignSelf,
          // flexWrap: "wrap-reverse",
        }}
      >
        <View
          style={{
            backgroundColor: "dodgerblue",
            width: 100,
            height: 300,
            // alignSelf: "flex-start"
          }}
        ></View>
        <View
          style={{
            backgroundColor: "gold",
            // flex: 1,
            width: 100,
            height: 100,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "tomato",
            // flex: 1,
            width: 100,
            height: 100,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "lightgreen",
            // flex: 1,
            width: 100,
            height: 100,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "pink",
            // flex: 1,
            width: 100,
            height: 100,
          }}
        ></View>
      </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    // alignItems: "center",
    // paddingTop: Platform.OS === "android" ? Stat.currentHeight : 0,
    // justifyContent: "center",
  },
});
