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

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_LENGTH = Dimensions.get("window").length;

export default class RelatableScreen extends Component {
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
            <Text style={styles.pageTitle}>Relatable Memes</Text>
          </View>
          <Text style={styles.titleText}>Your Daily Memes-</Text>
          <AutoHeightImage
            width={SCREEN_WIDTH - 20}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/newmeme-1d3a6.appspot.com/o/relatable1.png?alt=media&token=e2dbeca6-ddd5-42ed-a0a4-6596e9b0158b",
            }}
            resizeMode="contain"
            marginLeft={10}
            borderRadius={5}
            borderWidth={2}
            borderColor={"#000000"}
          />

          <AutoHeightImage
            marginTop={15}
            width={SCREEN_WIDTH - 20}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/newmeme-1d3a6.appspot.com/o/relatable2.png?alt=media&token=19ad1624-26c7-4a07-be11-0d1462006ad3",
            }}
            resizeMode="contain"
            marginLeft={10}
            borderRadius={5}
            borderWidth={2}
            borderColor={"#000000"}
          />
          <AutoHeightImage
            marginTop={15}
            width={SCREEN_WIDTH - 20}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/newmeme-1d3a6.appspot.com/o/relatable3.png?alt=media&token=25aed5b0-30eb-40c3-b448-f326844e42ec",
            }}
            resizeMode="contain"
            marginLeft={10}
            borderRadius={5}
            borderWidth={2}
            borderColor={"#000000"}
          />
          <AutoHeightImage
            marginTop={15}
            width={SCREEN_WIDTH - 20}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/newmeme-1d3a6.appspot.com/o/relatable4.png?alt=media&token=aff78689-80fd-49cd-9d54-1988b5c962be",
            }}
            resizeMode="contain"
            marginLeft={10}
            borderRadius={5}
            borderWidth={2}
            borderColor={"#000000"}
          />
          <AutoHeightImage
            marginTop={15}
            width={SCREEN_WIDTH - 20}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/newmeme-1d3a6.appspot.com/o/relatable5.png?alt=media&token=f08e9b59-ae98-44be-9435-78c22893454d",
            }}
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
