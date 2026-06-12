import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState<number | string>('');

  const calculate = (op: string) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Enter valid numbers');
      return;
    }

    let res: number;

    switch (op) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : NaN;
        break;
      default:
        return;
    }

    setResult(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Calculator</Text>

      <Text>Input 1</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
        placeholder="Enter first number"
      />

      <Text>Input 2</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
        placeholder="Enter second number"
      />

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => calculate('+')}>
          <Text>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => calculate('-')}>
          <Text>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => calculate('*')}>
          <Text>*</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => calculate('/')}>
          <Text>/</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.result}>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  btn: {
    padding: 15,
    backgroundColor: '#ddd',
    borderRadius: 8,
    width: 60,
    alignItems: 'center',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});
