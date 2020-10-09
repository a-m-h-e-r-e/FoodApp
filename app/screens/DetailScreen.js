import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import StarRating from "react-native-star-rating";
import {
  Button,
  Text,
  Icon,
  Header,
  Container,
  Toast,
  Left,
  Right,
  Body,
} from "native-base";

import colors from "../config/colors";
import FooterTabsBadgeExample from "../components/BottomTab";
function DetailScreen({ navigation }) {
  const [showToast, setShowToast] = useState(false);
  return (
    <Container style={styles.container}>
      {/* <Header transparent style={{ zIndex: - }}>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>

        <Right>
          <Button transparent>
            <Text>Cancel</Text>
          </Button>
        </Right>
      </Header> */}
      <Image style={styles.foodImage} source={require("../assets/pizza.jpg")} />
      <View style={styles.detailInfo}>
        <Text style={{ color: "grey" }}>
          <Icon name="hat" style={{ fontSize: 14, color: "green" }} /> Yestom
        </Text>
        {/* <br /> */}
        <Text style={styles.foodTitle}>Double Humburger</Text>
        <View
          style={{
            right: 30,
            top: 0,
            backgroundColor: "orange",
            width: 60,
            height: 45,
            position: "absolute",
          }}
        >
          <Text style={styles.price}>130</Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 14,
              textAlign: "center",
              color: "white",
              zIndex: 1,
              top: -5,
            }}
          >
            ETB
          </Text>
        </View>
        <View style={styles.triangle}></View>
        <View style={{ width: 90, marginBottom: 10 }}>
          <StarRating
            style={styles.rating}
            disabled={false}
            starSize={15}
            maxStars={5}
            rating={3}
            //  starStyle={rating}
            //  selectedStar={(rating) => this.onStarRatingPress(rating)}
          />
        </View>
        <Text style={styles.specificDetails}>
          Avengers assemble azibenya katatamo a ama football it can be a beast
          you yesterday headline you have your day looser is not a term to be
          taken lightly pick your self up there is no glory on defeat only
          lessons learn the use them to lead to your team to victory
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            warning
            rounded
            bordered
            iconLeft
            // style={styles.orderButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Icon name="archive" />
            <Text>Add to order</Text>
          </Button>
        </View>
      </View>
      {/* <FooterTabsBadgeExample navigation={navigation}    /> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  foodImage: {
    //  flex: 1,
    zIndex: -1,
    height: "45%",
    width: "100%",
  },
  detailInfo: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
    backgroundColor: colors.white,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    top: -25,
    shadowColor: colors.secondary,
    shadowOffset: { width: 2, height: 160 },
    shadowOpacity: 100.0,
    justifyContent: "flex-start",
    flexDirection: "column",
    //  alignItems: "stretch",
    //  flexDirection: "row",
  },
  price: {
    color: colors.white,
    textAlign: "center",
    marginTop: 1,
    //  fontWeight: "bold",
    fontSize: 25,
  },
  foodTitle: {
    fontWeight: "100",
    letterSpacing: 0,
    fontSize: 25,
    color: "#004",
    marginTop: 5,
    marginBottom: 5,
  },
  rating: {
    //  fontSize: 10,
    width: 10,
  },

  specificDetails: {
    textAlign: "justify",
    color: "grey",
    fontSize: 14,
  },
  buttonContainer: {
    alignSelf: "center",
    position: "absolute",
    bottom: 40,
  },
  orderButton: {
    height: 50,
    //  width: 170,
    textAlign: "center",
    backgroundColor: "orange",
    color: "white",
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderTopWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "orange",
    right: 30,
    top: 45,
    //  backgroundColor: "orange",
    width: 60,
    //  height: 45,
    position: "absolute",
    zIndex: -1,
  },
});
export default DetailScreen;
