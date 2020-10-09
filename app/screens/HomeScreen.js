import { Container } from "native-base";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import FooterTabsBadgeExample from "../components/BottomTab";

import colors from "../config/colors";
function HomeScreen({ navigation }) {
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/chair.jpg")}
        />
      </View>
      {/* <FooterTabsBadgeExample navigation={navigation} /> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 10,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 10,
    right: 30,
  },
});
export default HomeScreen;
