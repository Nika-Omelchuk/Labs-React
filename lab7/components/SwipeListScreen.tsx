import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Animated } from 'react-native';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width;

function SwipeableItem({ text, onSwipe }) {
  const translateX = new Animated.Value(0);

  const handleGesture = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  const handleEnd = ({ nativeEvent }) => {
    if (nativeEvent.translationX < -SCREEN_WIDTH / 2) {
      Animated.timing(translateX, {
        toValue: -SCREEN_WIDTH,
        duration: 200,
        useNativeDriver: true,
      }).start(() => onSwipe());
    } else {
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <PanGestureHandler onGestureEvent={handleGesture} onEnded={handleEnd}>
      <Animated.View style={[styles.swipeItem, { transform: [{ translateX }] }]}>
        <Text style={styles.swipeText}>{text}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
}

export default function SwipeListScreen() {
  const [items, setItems] = useState(Array.from({ length: 8 }, (_, i) => `Swipe Me ${i + 1}`));

  const handleSwipe = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {items.map((item, index) => (
          <SwipeableItem
            key={index}
            text={item}
            onSwipe={() => handleSwipe(index)}
          />
        ))}
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0ff',
  },
  swipeItem: {
    backgroundColor: '#cdaaff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
  },
  swipeText: {
    color: '#36006b',
    fontSize: 16,
  },
});
