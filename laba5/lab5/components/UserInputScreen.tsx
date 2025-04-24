import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, Alert, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function UserInputScreen() {
    // Task A: 1. Text inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Task B: 1. Toggles
  const [airplaneMode, setAirplaneMode] = useState(false);
  const [wifiEnabled, setWifiEnabled] = useState(false);
   // Task C: 1. Date picker
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleSubmit = () => {
    Alert.alert('Submitted!', `Username: ${username}\nPassword: ${password}`);
  };

  const toggleAirplaneMode = (value: boolean|((prevState: boolean) => boolean)) => {
    setAirplaneMode(value);
    if (value) {
      setWifiEnabled(false); 
    }
  };

  return (
    <View style={styles.container}>
      {/* Task A: 1. Inputs */}
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <Text style={styles.label}>You typed: {username}</Text>

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

     {/* Task A: 3. Submit */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

        {/* Task B: 1. Switches */}
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Airplane Mode</Text>
        <Switch
          value={airplaneMode}
          onValueChange={toggleAirplaneMode}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Wi-Fi Enabled</Text>
        <Switch
          value={wifiEnabled}
          onValueChange={setWifiEnabled}
          disabled={airplaneMode}
        />
      </View>

     {/* Task C: 1. Date picker */}
      <View style={styles.datePickerContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setShowPicker(true)}>
          <Text style={styles.buttonText}>Select Date</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Selected: {selectedDate.toDateString()}</Text>
        {showPicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(event, date) => {
              setShowPicker(Platform.OS === 'ios');
              if (date) setSelectedDate(date);
            }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d0b5e8',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  datePickerContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#c79de8',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
