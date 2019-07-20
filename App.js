import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';

export default class CalculatorMain extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Enter the Attack, Defense and HP IV values out of 15 in any order below and then click "Show me the IVs!"</Text>
        <Button
          onPress={()=>{}}
          title="Show me the IVs!"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 25
  }
});
