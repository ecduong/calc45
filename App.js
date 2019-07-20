import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';

export default class CalculatorMain extends Component {
  
  // Calculates IV value and returns a rounded integer between 0 and 100
  calculateIV() {
    const firstIV = this.state.firstIvValue ? parseInt(this.state.firstIvValue) : 0;
    const secondIV = this.state.secondIvValue ? parseInt(this.state.secondIvValue) : 0;
    const thirdIV = this.state.thirdIvValue ? parseInt(this.state.thirdIvValue) : 0;
    const roundedPercent = Math.round((firstIV + secondIV + thirdIV)/45 * 100);
    this.setState({calculatedValue: roundedPercent, isCalculated: true});
  }
  
  // Not currently in use
  state = {
    firstIvValue: null,
    secondIvValue: null,
    thirdIvValue: null,
    isCalculated: false,
    calculatedValue: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter the Attack, Defense and HP IV values out of 15 in any order below and then click "Show me the IVs!"</Text>
        
        { /* Move into its own component */ }
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            keyboardType="numeric"
            textAlign="center"
            onChangeText={(text) => this.setState({firstIvValue: text, isCalculated: false})}
          />
          <TextInput
            style={styles.inputField}
            keyboardType="numeric"
            textAlign="center"
            onChangeText={(text) => this.setState({secondIvValue: text, isCalculated: false})}
          />
          <TextInput
            style={styles.inputField}
            keyboardType="numeric"
            textAlign="center"
            onChangeText={(text) => this.setState({thirdIvValue: text, isCalculated: false})}
          />
        </View>
        <Button
          onPress={()=>this.calculateIV()}
          title="Show me the IVs!"
        />
        <Text style={styles.calculatedResultText}>{this.state.isCalculated && this.state.calculatedValue + "%"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 25
  },
  inputContainer: {
    marginTop: 25,
    flexDirection: 'row',
    height: 100,
  },
  inputField: {
    flex: 0.3,
    height: 75,
    fontSize: 48
  },
  calculatedResultText: {
    textAlign: 'center',
    fontSize: 64,
    marginTop: 50
  }
});
