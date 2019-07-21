import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

export default class CalculatorMain extends Component {
  
  // Calculates IV value and returns a rounded integer between 0 and 100
  calculateIV() {
    const firstIV = this.state.firstIvValue;
    const secondIV = this.state.secondIvValue;
    const thirdIV = this.state.thirdIvValue;
    return Math.round((firstIV + secondIV + thirdIV)/45 * 100);
  }
  
  // States
  state = {
    firstIvValue: 0,
    secondIvValue: 0,
    thirdIvValue: 0,
    calculatedValue: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Use the sliders below to input the Attack, Defense and HP stats</Text>
        
        { /* Move into its own component */ }
        <View style={styles.inputContainerRow}>
          <Text style={styles.sliderText}>ATT</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={15}
            step={1}
            thumbTintColor={this.state.firstIvValue === 15 ? "#FF7E7E" : "#FFB923"}
            minimumTrackTintColor={this.state.firstIvValue === 15 ? "#FF7E7E" : "#FFB923"}
            maximumTrackTintColor="#000000"
            onValueChange={(value) => this.setState({firstIvValue: value})}
          />
          <Text style={styles.sliderValueText}>{this.state.firstIvValue}</Text>
        </View>
        <View style={styles.inputContainerRow}>
          <Text style={styles.sliderText}>DEF</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={15}
            step={1}
            thumbTintColor={this.state.secondIvValue === 15 ? "#FF7E7E" : "#FFB923"}
            minimumTrackTintColor={this.state.secondIvValue === 15 ? "#FF7E7E" : "#FFB923"}
            maximumTrackTintColor="#000000"
            onValueChange={(value) => this.setState({secondIvValue: value})}
          />
          <Text style={styles.sliderValueText}>{this.state.secondIvValue}</Text>
        </View>
        <View style={styles.inputContainerRow}>
          <Text style={styles.sliderText}>HP</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={15}
            step={1}
            thumbTintColor={this.state.thirdIvValue === 15 ? "#FF7E7E" : "#FFB923"}
            minimumTrackTintColor={this.state.thirdIvValue === 15 ? "#FF7E7E" : "#FFB923"}
            maximumTrackTintColor="#000000"
            onValueChange={(value) => this.setState({thirdIvValue: value})}
          />
          <Text style={styles.sliderValueText}>{this.state.thirdIvValue}</Text>
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
  instructions: {
    fontSize: 18,
    textAlign: 'center'
  },
  inputContainerRow: {
    marginTop: 25,
    flexDirection: 'row',
    height: 35,
  },
  calculatedResultText: {
    textAlign: 'center',
    fontSize: 64,
    marginTop: 25
  },
  slider: {
    flex: 0.7,
    height: 30
  },
  sliderText: {
    flex: 0.15,
    fontSize: 18,
    textAlign: 'center'
  },
  sliderValueText: {
    flex: 0.15,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
