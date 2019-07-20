import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';
import NumericInput from 'react-native-numeric-input';

export default class CalculatorMain extends Component {
  
  // Calculates IV value and returns a rounded integer between 0 and 100
  calculateIV() {
    const firstIV = this.state.firstIvValue ? this.state.firstIvValue : 0;
    const secondIV = this.state.secondIvValue ?  this.state.secondIvValue : 0;
    const thirdIV = this.state.thirdIvValue ? this.state.thirdIvValue : 0;
    const roundedPercent = Math.round((firstIV + secondIV + thirdIV)/45 * 100);
    return roundedPercent;
  }
  
  // States
  state = {
    firstIvValue: null,
    secondIvValue: null,
    thirdIvValue: null,
    calculatedValue: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter the Attack, Defense and HP IV values out of 15 in any order below</Text>
        
        { /* Move into its own component */ }
        <View style={styles.inputContainer}>
          <NumericInput
            minValue={0}
            maxValue={15}
            iconSize={5}
            onChange={(value) => this.setState({firstIvValue: value})}
          />
          <NumericInput
            minValue={0}
            maxValue={15}
            onChange={(value) => this.setState({secondIvValue: value})}
          />
          <NumericInput
            minValue={0}
            maxValue={15}
            onChange={(value) => this.setState({thirdIvValue: value})}
          />
        </View>

        <Text style={styles.calculatedResultText}>{this.calculateIV() + "%"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  inputContainer: {
    marginTop: 25,
    flexDirection: 'row',
    height: 60,
  },
  calculatedResultText: {
    textAlign: 'center',
    fontSize: 64,
    marginTop: 50
  }
});
