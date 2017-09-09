import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view'
import {Actions} from 'react-native-router-flux'
import {Grid, Row, Col} from 'react-native-elements';

import {
  StyleSheet, Text,
  View, TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView, Image,
  TouchableHighlight,
  StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
import Brand from './brand.js'
import MainImg from './mainImg.js'
import Tweets from './tweets.js'
import Header from './header.js'
import AboutUs from './about.js'
import TextCategory from './textCategory.js'
import ProductCategory from './productCategory.js'
import Config from '../config'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: [],
      news: []
    }
  }

  async componentDidMount() {
    let products = await this.findProducts()
    let news = await this.findNews()
  }

  findProducts = async () => {
    const response = await fetch(`${Config.apiHost}/products/`)
    const products = await response.json()
    this.setState({products})
  }

  findNews= async () => {
    const response = await fetch(`${Config.apiHost}/news/`)
    const news = await response.json()
    this.setState({news})
  }

  render() {
    const allCategories = this.state.news.map((cat, index) => (
      <TextCategory
        key={index}
        feedTxt={cat.feedTxt}
        title={cat.name}
        uri={`${Config.cdnHost}${cat.uri}`}
        headline={cat.headline}
        sentiment={cat.sentiment}
      />
    ))

    const allProducts = this.state.products.map((product, index) => (
      <ProductCategory
        key={index}
        productLink={product.productLink}
        highlightedProduct={product.highlightedProduct}
        highlightedProductSellPrice={product.highlightedProductSellPrice}
        feedTxt={product.feedTxt}
        title={product.name}
        uri={`${Config.cdnHost}${product.uri}`}
        icon={`${Config.cdnHost}${product.icon}`}
        headline={product.headline}
        sentiment={product.sentiment}
      />
    ))

    return (
      <ScrollableTabView
        tabBarPosition='bottom'
        renderTabBar={() => <DefaultTabBar />}
        tabBarBackgroundColor='black'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='white'
        tabBarUnderlineStyle={{backgroundColor:'white'}}
        >
        <View style={homeStyles.container} tabLabel="Products">
          <Brand
            key="1"
            title={"home"}
           />
          <ScrollView contentContainerStyle={{flex: 0}}>
            <MainImg uri={`${Config.cdnHost}/brand/products.jpg`} />
            <Header
              marginTop={40}
              marginBottom={10}
              text="See What People Are Buying"
            />
            <View style={{display: "flex", justifyContent: "center", flexDirection: 'row', flexWrap: 'wrap' }}>
              {allProducts}
            </View>

            <Header
              topText="WHAT'S HAPPENING AT REI"
              marginTop={50}
              marginBottom={10}
            />
            <View style={{marginRight: 10, marginLeft: 10}}>
            <Tweets key="rei" searchQ="@rei sale" category="" room="REI" />
          </View>
          </ScrollView>
        </View>

        <View style={homeStyles.containerTwo} tabLabel='Social'>
          <StatusBar barStyle="light-content" />
          <Brand
            Key={2}
            title={"home"}
           />

          <ScrollView showsVerticalScrollIndicator={false} >
            <MainImg uri={`${Config.cdnHost}/brand/social.jpg`} />
            <View style={{marginTop: 10}}>
              <Header text="See Where People Are Exploring"
                marginTop={20}
                marginBottom={20}
                topText=""
              />
              {allCategories}
            </View>
          </ScrollView>
        </View>

        <View style={homeStyles.container} tabLabel='About'>
          <Brand
            key={3}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <MainImg uri={`${Config.cdnHost}/brand/about.jpg`} />
            <Header
              marginTop={25}
              marginBottom={-10}
              topText="Why We Love Gearing You Up"
              title={"home"}
            />
            <AboutUs />
          </ScrollView>
        </View>
      </ScrollableTabView>
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
