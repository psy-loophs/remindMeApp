import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Calc from './calc';

export default function App() {
  const [screen, setScreen] = useState<'home' | 'calc'>('home');

  if (screen === 'calc') {
    return <Calc goBack={() => setScreen('home')} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Remind Me</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setScreen('calc')}
      >
        <Text style={styles.buttonText}>Open App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
