import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default props => {
  return (
  <View style={brandStyles.imgContainer}>
    <TouchableOpacity onPress={() => Actions.home()} style={props.title === 'home' ? {display: "none"} : brandStyles.txtStyle}>
      <View ><Text style={{color: "white"}}>Back</Text></View>
    </TouchableOpacity>

    <Image
      resizeMode={"contain"}
      style= {brandStyles.imgStyle}
      source={{uri: "https://s3.amazonaws.com/rei-today/rei-logo.png"}}
    >
    </Image>
  </View>
  )
}

const brandStyles = StyleSheet.create({
  imgContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: '#FFF',
    borderBottomWidth: 3,
  },
  imgStyle: {
    height:40,
    width: 100,
    paddingTop: 20
  },
  txtStyle: {
    position: "absolute",
    left: 10
  }
})
