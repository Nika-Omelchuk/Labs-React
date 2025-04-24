import { View, Text, StyleSheet } from 'react-native';
import { ItemList } from './ItemList';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>List of Smartphones</Text>
      <ItemList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});