"use strict";
import { Dimensions } from "react-native";
import React from "react";
import {
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/Home";

import RelatableScreen from "./screens/Relatable";
import FunnyScreen from "./screens/Funny";
import RandomScreen from "./screens/Random";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <View style={styles.homeHeader}>
                <Image
                  style={styles.logo}
                  source={require("./assets/Img/logo.png")}
                />
              </View>
            ),
            headerStyle: {
              backgroundColor: "#c31432",
            },
          }}
        />
        <Stack.Screen
          name="Relatable"
          component={RelatableScreen}
          options={{
            headerTitle: () => (
              <View style={styles.homeHeader}>
                <Image
                  style={styles.logo}
                  source={require("./assets/Img/logo.png")}
                />
              </View>
            ),
            headerStyle: {
              backgroundColor: "#11998e",
            },
          }}
        />
        <Stack.Screen
          name="Funny"
          component={FunnyScreen}
          options={{
            headerTitle: () => (
              <View style={styles.homeHeader}>
                <Image
                  style={styles.logo}
                  source={require("./assets/Img/logo.png")}
                />
              </View>
            ),
            headerStyle: {
              backgroundColor: "#11998e",
            },
          }}
        />
        <Stack.Screen
          name="Random"
          component={RandomScreen}
          options={{
            headerTitle: () => (
              <View style={styles.homeHeader}>
                <Image
                  style={styles.logo}
                  source={require("./assets/Img/logo.png")}
                />
              </View>
            ),
            headerStyle: {
              backgroundColor: "#11998e",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeHeader: {
    height: 50,
  },
  logo: {
    width: 257.714285714,
    height: 60.5714285714,
    resizeMode: "contain",
  },
  screenButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  titleText: {
    fontFamily: "PatrickHand",
    fontSize: 22,
    fontWeight: "regular",
    top: 3,
    left: 11,
  },
});

/*




//length-412
//

import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      PatrickHand: require("./assets/fonts/patrickhand-regular.ttf"),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("./assets/logo.png")} />
        <Text style={styles.titleText}>Your Daily Memes-</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    alignSelf: "center",
    marginTop: 5,
    width: 230,
    height: 41,
  },
  titleText: {
    fontFamily: "PatrickHand",
    fontSize: 22,
    fontWeight: "regular",
    top: 3,
    left: 11,
  },
});

//{require("./assets/fonts/patrickhand-regular.ttf")}

*/
