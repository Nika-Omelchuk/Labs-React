import React, { useState } from "react";
import { SafeAreaView, Button, View, Text, StyleSheet } from "react-native";
import RowLayoutScreen from "./components/RowLayoutScreen.tsx";
import ColumnLayoutScreen from "./components/ColumnLayoutScreen.tsx";
import GridLayoutScreen from "./components/GridLayoutScreen.tsx";

export default function App() {
  const [layout, setLayout] = useState("row");

  return (
    <SafeAreaView style={{ flex: 1 }}>
       <View style={styles.labelContainer}>
        <Text style={styles.label}>Current layout: {layout.toUpperCase()}</Text>
      </View>
      {layout === "row" && <RowLayoutScreen />}
      {layout === "column" && <ColumnLayoutScreen />}
      {layout === "grid" && <GridLayoutScreen />}
       <View style={styles.buttonContainer}>
        <Button title="Row" onPress={() => setLayout("row")} />
        <Button title="Column" onPress={() => setLayout("column")} />
        <Button title="Grid" onPress={() => setLayout("grid")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    backgroundColor: "#9f89d9",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
});