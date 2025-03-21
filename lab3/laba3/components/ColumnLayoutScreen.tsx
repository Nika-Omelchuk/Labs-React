import React from "react";
import { View, StyleSheet, Dimensions, Platform} from "react-native";

const { width } = Dimensions.get("window");
const squareSize = width * 0.2; 
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
      width: squareSize,
      height: squareSize,
      backgroundColor: "red",borderWidth: 2,
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
    green: {
      backgroundColor: "green",
    },
    blue: {
      backgroundColor: "blue",
    },
  });

export default ColumnLayoutScreen;
