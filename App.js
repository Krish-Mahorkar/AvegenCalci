import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function App() {
  const [input, setInput] = useState('');

  const handleButtonPress = (value) => {
    setInput((prev) => prev + value);
  };

  const handleCalculate = () => {
    try {
      // Evaluate the expression
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Invalid Input');
    }
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setInput('');
  };

  const renderButton = (label, onPress, style = styles.button) => (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Input display */}
      <TextInput
        label="Enter Expression"
        value={input}
        style={styles.input}
        editable={false}
      />
      {/* Buttons */}
      <View style={styles.buttonGrid}>
        {['1', '2', '3', '+'].map((item) =>
          renderButton(item, () => handleButtonPress(item))
        )}
        {['4', '5', '6', '-'].map((item) =>
          renderButton(item, () => handleButtonPress(item))
        )}
        {['7', '8', '9', '*'].map((item) =>
          renderButton(item, () => handleButtonPress(item))
        )}
        {['0', '.', '/', '⌫'].map((item, index) =>
          item === '⌫'
            ? renderButton(item, handleBackspace, styles.redButton)
            : renderButton(item, () => handleButtonPress(item))
        )}
      </View>
      <View style={styles.actionRow}>
        {renderButton('C', handleClear, styles.redButton)}
        {renderButton('=', handleCalculate, styles.greenButton)}
      </View>
      {/* Footer */}
      <Text style={styles.footer}>Calc by Krish_Mahorkar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  input: {
    fontSize: 24,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    textAlign: 'right',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#f0f0f0',
    width: '23%',
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  greenButton: {
    backgroundColor: 'green',
    flex: 1,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 10,
  },
  redButton: {
    backgroundColor: 'red',
    width: '23%',
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
  },
  footer: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
});
