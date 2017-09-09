import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
  KeyboardAvoidingView,
  ScrollView, Image,
  StatusBar, ActivityIndicator
} from 'react-native';
import io from 'socket.io-client'
import Config from '../config'

import EachTweet from './eachTweet.js'
const socket = io(Config.apiHost);

export default class Tweets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: [],
      prevRoom: ''
    }

    socket.on('myroom', payload => {
      let allTweets = this.state.tweets
      if(this.state.tweets.length > 10){
        let allTweets = this.state.tweets.slice(0, 9)
      }
      this.setState({tweets: [payload].concat(allTweets)})
    })
  }

  componentDidMount() {
    socket.emit('room', {room: this.props.room, category: this.props.category});
    this.findTweets(this.props.room)
  }

  findTweets = async prevRoom => {
    let tweetsAboutREI;
    if(prevRoom === 'REI'){
      tweetsAboutREI = '@rei sale'
    } else {
      tweetsAboutREI = this.props.feedTxt[0]
    }


    console.log(JSON.stringify({tweets: tweetsAboutREI, category: this.props.category, room: this.props.room}))
    const response = await fetch(`${Config.apiHost}/tweets`, {
      method: "POST",
      body: JSON.stringify({tweets: tweetsAboutREI, category: this.props.category, room: this.props.room}),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const tweets = await response.json()
    this.setState({tweets, prevRoom})
  }

  getUsersLocation = async () => {
    let position = {}
    navigator.geolocation.getCurrentPosition(pos => {
      position = pos;
    }, err => {
      console.log(err)
    })
  }

  render() {
    if(!this.state.tweets.length){
      return (
        <View>
          <ActivityIndicator
            animating={true}
            color="#00A800"
            size='large'
          />
        </View>
      )
    }
    return (
      <View>
        {this.state.tweets.map((eachTweet, index) => (
          <EachTweet
            key={index}
            name={eachTweet.name}
            text={eachTweet.text}
            profileImg={eachTweet.profileImg}
          />
        ))}
      </View>
    )
  }
}


const stylez = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    paddingTop: 50
  },
  textarea: {
    height: 80,
    width: '100%',
    backgroundColor: 'gray',
    marginBottom: 10
  },
  probabilities: {
    backgroundColor: 'purple',
  },
  prob: {
    color: 'white'
  },
  username: {
    color: 'white',
    fontSize: 14
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
  }
});
