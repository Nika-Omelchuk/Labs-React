import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, TouchableHighlight, Pressable, StyleSheet } from 'react-native';

export default function TouchFeedbackScreen({ navigation }) {
  const [pressableText, setPressableText] = useState('Default Text');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('TouchableOpacity Pressed')}
      >
        <Text style={styles.buttonText}>Opacity</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={styles.button}
        underlayColor="#c59eff"
        onPress={() => Alert.alert('TouchableHighlight Pressed')}
      >
        <Text style={styles.buttonText}>Highlight</Text>
      </TouchableHighlight>

      <Pressable
        style={styles.button}
        onPressIn={() => setPressableText('Pressed')}
        onLongPress={() => setPressableText('Long Pressed')}
        onPressOut={() => setPressableText('Default Text')}
        onPress={() => Alert.alert('Pressable Pressed')}
      >
        <Text style={styles.buttonText}>{pressableText}</Text>
      </Pressable>

      <TouchableOpacity
        style={[styles.button, styles.navButton]}
        onPress={() => navigation.navigate('ScrollExample')}
      >
        <Text style={styles.buttonText}>Go to Scroll View</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.navButton]}
        onPress={() => navigation.navigate('SwipeList')}
      >
        <Text style={styles.buttonText}>Go to Swipe List</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    gap: 20,
    backgroundColor: '#fff5ff',
  },
  button: {
    backgroundColor: '#b38aff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  navButton: {
    backgroundColor: '#a166ff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});