import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Platform } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, Polygon } from 'react-native-maps';

export default function LocationScreen() {
  // Task A: 1. Request location
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Location permission denied');
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  const polygonCoords = [
    { latitude: 50.4501, longitude: 30.5234 },
    { latitude: 50.451, longitude: 30.525 },
    { latitude: 50.449, longitude: 30.527 },
    { latitude: 50.4485, longitude: 30.521 },
  ]; // Task C: 1. Polygon coordinates

  return (
    <View style={{ flex: 1 }}>
      {errorMsg ? (
        <Text style={styles.error}>{errorMsg}</Text> // Task A: 2. Permission denied
      ) : location ? (
        <>
          <Text style={styles.text}>Latitude: {location.coords.latitude}</Text>
          <Text style={styles.text}>Longitude: {location.coords.longitude}</Text>

          {/* Task B: 2. Map centered on user */}
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            showsUserLocation
            followsUserLocation
          >
            {/* Task B: 3. Custom marker */}
            <Marker
              coordinate={{ latitude: 50.4501, longitude: 30.5234 }}
              title="Kyiv"
              description="Capital of Ukraine"
            />
            {/* Task C: 2. Polygon overlay */}
            <Polygon
              coordinates={polygonCoords}
              strokeColor="rgba(234, 192, 246, 0.82)"
              fillColor="rgba(164, 23, 224, 0.82)"
              strokeWidth={2}
            />
          </MapView>
        </>
      ) : (
        <Text style={styles.text}>Getting location...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    padding: 10,
  },
  error: {
    padding: 20,
    fontSize: 18,
    color: 'crimson',
  },
});