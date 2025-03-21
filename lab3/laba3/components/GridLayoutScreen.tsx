import React from "react";
import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");
const squareSize = width * 0.15; 

const GridLayoutScreen = () => {
  return (
    <View style={styles.container}>
      {Array.from({ length: 8 }).map((_, index) => (
        <View key={index} style={[styles.square, { backgroundColor: colors[index] }]}>
          <Text style={styles.text}>{index + 1}</Text>
        </View>
      ))}
    </View>
  );
};

const colors = ["red", "green", "blue", "orange", "purple", "pink", "cyan", "#9756bf"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ca79fc",
  },
  square: {
    width: squareSize,
    height: squareSize,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderWidth: 2,
    ...Platform.select({
        ios: {
          margin: 10,
          borderColor: "#d5c9f5",
        },
        android: {
          margin: 5,
          borderStyle: "dashed",
          borderColor: "#5f24f2",
        },
      }),
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default GridLayoutScreen;