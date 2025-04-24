import React, { useState } from 'react';
import { ScrollView, RefreshControl, Text, View, StyleSheet } from 'react-native';

export default function ScrollExampleScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {Array.from({ length: 15 }).map((_, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.itemText}>Item {index + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fdf9ff',
  },
  item: {
    height: 300,
    backgroundColor: '#d4b0ff',
    marginBottom: 15,
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  itemText: {
    color: '#3c0066',
    fontSize: 18,
  },
});