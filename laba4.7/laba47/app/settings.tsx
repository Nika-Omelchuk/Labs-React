import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';

export default function SettingsScreen() {
  const { user } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      {user ? (
        <Text style={styles.subtitle}>User: {user}</Text>
      ) : (
        <Text style={styles.subtitle}>User not specified</Text>
      )}
      <Link href="/" style={styles.link}>
        Back to Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: 'center',
    backgroundColor: '#f1e6ff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
  },
  link: {
    fontSize: 18,
    color: '#6d1eff',
    textDecorationLine: 'underline',
  },
});