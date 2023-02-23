"use strict";
import { Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  view,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Font from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
const SCREEN_WIDTH = Dimensions.get("window").width;

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      PatrickHand: require("../assets/fonts/patrickhand-regular.ttf"),
      LucidaConsole: require("../assets/fonts/lucida_console-regular.ttf"),
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
        colors={["#C02425", "#F0CB35"]}
        start={{ x: 0, y: 0.8 }}
        end={{ x: 2, y: 1 }}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.screenButton}
            onPress={() => this.props.navigation.navigate("Relatable")}
          >
            <Text style={styles.appButtonText}>Relatable Memes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.screenButton}
            onPress={() => this.props.navigation.navigate("Funny")}
          >
            <Text style={styles.appButtonText}>Funny Memes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.screenButton}
            onPress={() => this.props.navigation.navigate("Random")}
          >
            <Text style={styles.appButtonText}>Random Memes</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>Your Daily Memes-</Text>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>Please Choose A Category!!!</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  homeHeader: {
    height: 50,
  },
  logo: {
    alignSelf: "center",
    marginTop: 5,
    width: 207,
    height: 36.9,
  },
  loginButton: {
    elevation: 8,
    backgroundColor: "#FFCA4B",
    borderRadius: 5,
    paddingVertical: 10,
    borderColor: "#000",
    borderWidth: 1.5,
  },
  screenButton: {
    flex: 1,
    elevation: 8,
    backgroundColor: "#FF4742",
    borderRadius: 10,
    paddingVertical: 10,
  },
  appButtonText: {
    fontSize: 16,
    color: "#37393e",
    fontWeight: "bold",
    alignSelf: "center",
  },
  titleText: {
    fontFamily: "PatrickHand",
    fontSize: 22,
    fontWeight: "regular",
    top: 3,
    left: 11,
    color: "#fff",
  },
  categoryContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  category: {
    fontFamily: "LucidaConsole",
    fontSize: 20,
    fontWeight: "regular",
    marginTop: SCREEN_WIDTH / 2,
    textAlign: "center",
    color: "#fff",
  },
});

/*

*/
