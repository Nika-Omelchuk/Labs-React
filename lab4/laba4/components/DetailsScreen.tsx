import React, {useEffect} from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";
import { useRoute} from "@react-navigation/native";

export default function DetailsScreen({ navigation }) {
  const route = useRoute();
const { itemId, title } = route.params as { itemId: number; title: string } || { itemId: "N/A", title: "No Title" };

useEffect(() => {
  navigation.setOptions({ title });
}, [navigation, title]);
  
return (
    <SafeAreaView style={styles.container}>
    <View style={{ alignItems: "center" }}>
      <Text style={styles.text}>Details Screen</Text>
      <Text style={styles.text}>Item ID: {itemId}</Text>
      <Text style={styles.text}>Title: {title}</Text>
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