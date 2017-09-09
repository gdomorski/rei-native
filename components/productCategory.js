import React from 'react'

import {
  StyleSheet, Text,
  View, TextInput,
  TouchableOpacity, Image
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {Actions} from 'react-native-router-flux'


export default ({
  uri,
  title,
  headline,
  icon,
  feedTxt,
  highlightedProduct,
  highlightedProductSellPrice,
  productLink
}) => {
  return (
    <TouchableOpacity onPress={() => Actions.newsFeed({uri, title, headline, feedTxt, category:'products',highlightedProduct, highlightedProductSellPrice, productLink})}>
      <Animatable.View animation="slideInUp" style={{margin: 15, marginTop: 30}}>
        <Image
          style={{width: 150, height: 150}}
          resizeMode={'contain'}
          source={{ uri: icon }}
        />
        <Text style={{color: 'white', textAlign:'center', fontSize: 12, fontWeight: "bold", paddingTop: 10}}>{title}</Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}
