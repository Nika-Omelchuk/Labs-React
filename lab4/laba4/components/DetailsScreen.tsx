import React from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";

export default function DetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.cont}>
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
    </View>
      <View style={styles.button}>
      <Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  cont: {
    flex: 1,
    justifyContent: "space-around",
  },
  text: {
    fontSize: 20,
    justifyContent: "space-around",
    fontWeight: "bold",
  },
  button:{
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
});