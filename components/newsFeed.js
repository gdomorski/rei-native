import React, { Component } from 'react';
import {
  StyleSheet, Text,
  View, TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView, Image,
  TouchableHighlight,
  StatusBar
} from 'react-native';

import Brand from './brand.js'
import MainImg from './mainImg.js'
import Header from './header.js'
import Tweets from './tweets.js'

export default class NewsFeed extends Component {
  render() {
    return (
      <View style={homeStyles.containerTwo} tabLabel='Activities'>
        <StatusBar barStyle="light-content" />
        <Brand
          key={4}
         />
        <ScrollView showsVerticalScrollIndicator={false} >
          <MainImg uri={this.props.uri} key={this.props.title} />


          <View style={{marginTop: 10}}>
            <Header text=""
              marginTop={30}
              marginBottom={20}
              topText={this.props.headline}
            />
          </View>
          {this.props.productLink &&
            <View>
              <Text style={{color: "white", fontSize: 12, textAlign: "center"}}>The <Text style={{fontWeight: "bold", color: "green"}}>{this.props.highlightedProduct}</Text> is on sale at REI right now for <Text style={{fontWeight: "bold", color: "green"}}>${this.props.highlightedProductSellPrice}</Text>. Want a deeper discount? Checkout our dividend program.</Text>
            </View>
          }
          <View>
          <Header
            topText=""
            marginTop={0}
          />
          <Tweets
            key={this.props.room}
            room={this.props.title}
            feedTxt={this.props.feedTxt}
            category={this.props.category}
           />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // padding: 10,
    paddingTop: 30,
  },
  containerTwo: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    paddingTop: 30,
  },
  containerGrey: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 10,
    paddingTop: 50
  },
  textarea: {
    height: 80,
    width: '100%',
    backgroundColor: 'gray',
    marginBottom: 10
  },
  button: {
    width: '100%',
    height: 45
  },
  probabilities: {
    backgroundColor: 'purple',
  },
  prob: {
    color: 'white'
  },
  username: {
    color: 'white',
    fontSize: 16
  },
  header: {
    color: 'white',
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
    textDecorationLine: 'underline'
  },
  tweetText: {
    color: '#00A800',
    fontSize: 14
  },
  image: {
    width: 107,
    height: 165,
    padding: 10
  },
  tweetContain: {
    padding: 10
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position: 'relative'
  },
});
