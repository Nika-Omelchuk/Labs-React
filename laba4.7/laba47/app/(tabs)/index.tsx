import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home page</Text>
      <View style={styles.links}>
      <Link href="/settings" style={styles.link}>Go to Settings</Link>
      <Link href="/settings?user=Nika" style={styles.link}>Go to Settings as Nika</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-around",
    backgroundColor: '#ebdaf7',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 18,
    color: '#6d1eff',
    textDecorationLine: 'underline',
    marginBottom: 30,
  },
  links: {
    fontSize: 18,
    alignItems: 'center',
    justifyContent: "center",
  },
});