import React from 'react'

import {
  StyleSheet, Text,
  View, TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView, Image,
  TouchableHighlight,
  StatusBar
} from 'react-native';

import {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable';

export default ({title, headline, uri, feedTxt}) => {
  return (
    <TouchableOpacity onPress={() => Actions.newsFeed({uri, title, headline, feedTxt, category:'news'})}>
      <Animatable.View animation="slideInUp" style={{borderTopWidth: 3, borderStyle: "solid", borderColor: "#001e00", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row"}}>
        <Text style={{fontSize: 18, color: "white", fontFamily: "Verdana", paddingTop: 10, paddingBottom: 10, paddingLeft: 0, fontWeight: "bold", color: "white"}}>{title}</Text>
        <Text style={{fontSize: 18, color: "white", fontFamily: "Verdana", paddingRight: 5}}><Icon name='angle-right' style={{color: '#00A800', fontSize: 22}} /></Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}
