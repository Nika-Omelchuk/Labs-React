import React from "react";
import { View, StyleSheet } from "react-native";

const RowLayoutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square} />
      <View style={[styles.square, styles.green]} />
      <View style={[styles.square, styles.blue]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#daabf7",
  },
  square: {
    width: 80,
    height: 80,
    backgroundColor: "red",
  },
  green: {
    backgroundColor: "green",
  },
  blue: {
    backgroundColor: "blue",
  },
});

export default RowLayoutScreen;