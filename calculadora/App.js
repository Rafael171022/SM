import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Provider as PaperProvider, Button, TextInput, DarkTheme } from 'react-native-paper';
import { Platform } from 'react-native';

export default function App() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState(null);

  const handlePress = (value) => {
    setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay('');
    setResult(null);
  };

  const handleEquals = () => {
    try {
      const res = eval(display);
      setResult(res);
      setDisplay(res.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <PaperProvider theme={DarkTheme}>
      <SafeAreaView style={styles.container}>
        <View style={styles.display}>
          <TextInput
            value={display}
            style={styles.displayText}
            editable={false}
            right={<TextInput.Icon icon="calculator" />}
          />
          {result !== null && <Text style={styles.resultText}>Resultado: {result}</Text>}
        </View>

        <View style={styles.row}>
          <Button mode="contained" style={[styles.button, styles.blackButton]} onPress={() => handlePress('7')}>7</Button>
          <Button mode="contained" style={[styles.button, styles.blackButton]} onPress={() => handlePress('8')}>8</Button>
          <Button mode="contained" style={[styles.button, styles.blackButton]} onPress={() => handlePress('9')}>9</Button>
          <Button mode="contained" style={[styles.button, styles.blackButton]} onPress={() => handlePress('/')}>/</Button>
        </View>
        <View style={styles.row}>
          <Button mode="contained" style={[styles.button, styles.blackButton]} onPress={() => handlePress('4')}>4</Button>
          <Button mode="contained" style={[styles.button, styles.blackButton]} onPress={() => handlePress('5')}>5</Button>
          <Button mode="contained" style={[styles.button, styles.blackButton]} onPress={() => handlePress('6')}>6</Button>
          <Button mode="contained" style={[styles.button, styles.blackButton]} onPress={() => handlePress('*')}>*</Button>
        </View>
        <View style={styles.row}>
          <Button mode="contained" style={[styles.button, styles.blackButton]} onPress={() => handlePress('1')}>1</Button>
          <Button mode="contained" style={[styles.button, styles.blackButton]} onPress={() => handlePress('2')}>2</Button>
          <Button mode="contained" style={[styles.button, styles.blackButton]} onPress={() => handlePress('3')}>3</Button>
          <Button mode="contained" style={[styles.button, styles.blackButton]} onPress={() => handlePress('-')}>-</Button>
        </View>
        <View style={styles.row}>
          <Button mode="contained" style={[styles.button, styles.blackButton]} onPress={() => handlePress('0')}>0</Button>
          <Button mode="contained" style={[styles.button, styles.blackButton]} onPress={handleClear}>C</Button>
          <Button mode="contained" style={[styles.button, styles.blackButton]} onPress={handleEquals}>=</Button>
          <Button mode="contained" style={[styles.button, styles.blackButton]} onPress={() => handlePress('+')}>+</Button>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#121212', // Cor de fundo dark
  },
  display: {
    marginBottom: 20,
  },
  displayText: {
    fontSize: 30,
    backgroundColor: '#333333',
    color: '#ffffff', 
  },
  resultText: {
    fontSize: 20,
    color: 'White',
    textAlign: 'right',
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: '#c7830e', 
    elevation: Platform.OS === 'android' ? 5 : 0,
    shadowColor: Platform.OS === 'ios' ? '#000' : 'transparent',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 0,
    },
    shadowOpacity: Platform.OS === 'ios' ? 0.8 : 0,
    shadowRadius: Platform.OS === 'ios' ? 2 : 0,
  }
});
