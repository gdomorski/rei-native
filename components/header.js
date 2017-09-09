import React from 'react'
import {
  StyleSheet, Text,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default ({text, marginTop, marginBottom, topText}) => (
  <View style={[headerStyles.headerContainer, {marginTop, marginBottom}]}>
    <Animatable.Text animation="fadeIn" style={headerStyles.header}>{topText}{"\n"}<Text style={{color: '#999999'}}>{text}</Text></Animatable.Text>
  </View>
)

const headerStyles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 30
  },
  header: {
    color: 'white',
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  }
});
