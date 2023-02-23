"use strict";
import AutoHeightImage from "react-native-auto-height-image";
import { Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  view,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  Platform,
} from "react-native";
import * as Font from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

//IMAGES
import random1 from "../assets/Img/Day/Day1/random1.png";
import random2 from "../assets/Img/Day/Day1/random2.png";
import random3 from "../assets/Img/Day/Day1/random3.png";
import random4 from "../assets/Img/Day/Day1/random4.png";
import random5 from "../assets/Img/Day/Day1/random5.png";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_LENGTH = Dimensions.get("window").length;

export default class RandomScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Guerrilla: require("../assets/fonts/guerrilla.ttf"),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    return (
      <LinearGradient
        style={styles.container}
        colors={["#348F50", "#56B4D3"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <ScrollView>
          <View style={styles.categoryContainer}>
            <Text style={styles.pageTitle}>Randomized Memes</Text>
          </View>
          <Text style={styles.titleText}>Your Daily Memes-</Text>
          <AutoHeightImage
            width={SCREEN_WIDTH - 20}
            source={random1}
            resizeMode="contain"
            marginLeft={10}
            borderRadius={5}
            borderWidth={2}
            borderColor={"#000000"}
          />
          <AutoHeightImage
            marginTop={15}
            width={SCREEN_WIDTH - 20}
            source={random2}
            resizeMode="contain"
            marginLeft={10}
            borderRadius={5}
            borderWidth={2}
            borderColor={"#000000"}
          />
          <AutoHeightImage
            marginTop={15}
            width={SCREEN_WIDTH - 20}
            source={random3}
            resizeMode="contain"
            marginLeft={10}
            borderRadius={5}
            borderWidth={2}
            borderColor={"#000000"}
          />
          <AutoHeightImage
            marginTop={15}
            width={SCREEN_WIDTH - 20}
            source={random4}
            resizeMode="contain"
            marginLeft={10}
            borderRadius={5}
            borderWidth={2}
            borderColor={"#000000"}
          />
          <AutoHeightImage
            marginTop={15}
            width={SCREEN_WIDTH - 20}
            source={random5}
            resizeMode="contain"
            marginLeft={10}
            borderRadius={5}
            borderWidth={2}
            borderColor={"#000000"}
          />
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  homeHeader: {
    height: 50,
  },
  pageTitle: {
    fontFamily: "Guerrilla",
    fontSize: 22,
    fontWeight: "regular",
    color: "#fff",
    textShadowColor: "#585858",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
  titleText: {
    fontFamily: "PatrickHand",
    fontSize: 22,
    fontWeight: "regular",
    left: 11,
    bottom: 10,
    color: "#fff",
  },
  memeImg: {
    width: SCREEN_WIDTH - 15,
    //height: relatable1,
    resizeMode: "contain",
    marginLeft: 7.5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000000",
  },
});

/*

*/
