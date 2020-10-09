import React, { useState } from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Badge,
  //   View,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import * as RootNavigation from "../RootNavigation";

const tabMenu = [
  { name: "Home", title: "Home", icon: "home", badge: "" },
  { name: "Order", title: "Order", icon: "camera", badge: "" },
  { name: "Menu", title: "Order", icon: "warning", badge: "" },
  { name: "Contact", title: "Contact", icon: "phone", badge: "12" },
];

function FooterTabsBadgeExample() {
  //   const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Home");

  const handlePress = (prop) => {
    RootNavigation.navigate(prop);
    setActiveTab(prop);
  };
  return (
    <Footer>
      <FooterTab
        style={{
          backgroundColor: "#fff",
          borderTopColor: "orange",
          borderTopWidth: 1,
        }}
      >
        {tabMenu.map((item, index) => {
          return (
            // <View key={item.name}>
            activeTab === item.name ? (
              <Button
                key={item.name}
                active
                //  rounded
                style={{
                  alignContent: "center",
                  height: 50,
                  width: 10,
                  borderRadius: 100,
                  top: -20,
                }}
                badge
                vertical
                warning
                //  transparent
                onPress={() => handlePress(item.name)}
              >
                {item.badge === "" ? null : (
                  <Badge style={{ top: -10 }}>
                    <Text>{item.badge}</Text>
                  </Badge>
                )}

                <Icon name={item.icon} style={{ bottom: -10 }} />
                <Text style={{ bottom: -10 }}>{item.title}</Text>
              </Button>
            ) : (
              <Button
                badge={item.badge === "" ? false : true}
                vertical
                onPress={() => handlePress(item.name)}
              >
                {item.badge === "" ? null : (
                  <Badge style={{ top: -10 }}>
                    <Text>{item.badge}</Text>
                  </Badge>
                )}
                <Icon name={item.icon} />
                <Text>{item.title}</Text>
              </Button>
            )
          );
          // </View>
        })}
        {/* <Button vertical onPress={() => RootNavigation.navigate("Home")}>
          <Icon name="camera" />
          <Text>Home</Text>
        </Button>
        <Button
          active
          badge
          vertical
          warning
          transparent
          onPress={() => RootNavigation.navigate("Details")}
        >
          <Badge>
            <Text>51</Text>
          </Badge>
          <Icon active name="navigate" />
          <Text>Your Order</Text>
        </Button>
        <Button vertical>
          <Icon name="person" />
          <Text>Contact</Text>
        </Button> */}
      </FooterTab>
    </Footer>
  );
}

export default FooterTabsBadgeExample;
