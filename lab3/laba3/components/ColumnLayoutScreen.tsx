import React from "react";
import { View, StyleSheet } from "react-native";

const ColumnLayoutScreen = () => {
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
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "#e8c7fc",
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

export default ColumnLayoutScreen;
