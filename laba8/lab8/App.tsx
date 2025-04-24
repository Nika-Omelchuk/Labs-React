import React, { useState } from 'react';
import {
  View, Text, Modal, Button, StyleSheet, TouchableOpacity, ActivityIndicator,
  ToastAndroid, Platform, Alert,
} from 'react-native';

export default function ModalDemoScreen() {
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);

  const showToast = () => {
    if (Platform.OS === 'android') {
      ToastAndroid.show("Something happened!", ToastAndroid.SHORT);
    } else {
      Alert.alert("Toast", "Something happened!");
    }
  };

  const showLoadingModal = () => {
    setLoadingVisible(true);
    setTimeout(() => {
      setLoadingVisible(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Modal transparent visible={confirmVisible} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={[styles.modal, { backgroundColor: '#e6ddf7' }]}>
            <Text style={[styles.title, { color: '#6a5acd' }]}>Are you sure?</Text>
            <View style={styles.modalButtonRow}>
              <Button title="Yes" color="#6a5acd" onPress={() => setConfirmVisible(false)} />
              <Button title="No" color="#6a5acd" onPress={() => setConfirmVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>

      <Modal transparent visible={errorVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modal, { backgroundColor: '#f9d6dc' }]}>
            <Text style={[styles.title, { color: '#b00020' }]}>An error occurred!</Text>
            <View style={styles.modalButtonRow}>
              <Button title="Fix it" color="#b00020" onPress={() => setErrorVisible(false)} />
              <Button title="Ignore it" color="#b00020" onPress={() => setErrorVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>

      <Modal transparent visible={loadingVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modal, { backgroundColor: '#f4edfa', padding: 40 }]}>
            <ActivityIndicator size="large" color="#6a5acd" />
            <Text style={{ marginTop: 10, color: '#6a5acd' }}>Fetching data...</Text>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.button} onPress={() => setConfirmVisible(true)}>
        <Text style={styles.buttonText}>Confirm Action</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.errorButton]} onPress={() => setErrorVisible(true)}>
        <Text style={styles.buttonText}>Show Error</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={showToast}>
        <Text style={styles.buttonText}>Toast Message</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={showLoadingModal}>
        <Text style={styles.buttonText}>Fetch Data…</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf8ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#6a5acd',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  errorButton: {
    backgroundColor: '#b00020',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 14,
    width: '80%',
    alignItems: 'center',
    elevation: 6,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
  },
});
