import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Hyperlink from 'react-native-hyperlink'
import { Avatar } from 'react-native-elements'

export default ({name, index, text, profileImg}) => (
  <View style={eachTweetStyles.tweetContain} key={index}>
    <Avatar
      medium
      rounded
      source={{uri: profileImg}}
      activeOpacity={0.7}
      containerStyle={{marginRight: 10}}
    />
    <View style={{flex: 1, flexDirection: "column", flexWrap: 'wrap'}}>
      <Text style={eachTweetStyles.username}>{name}</Text>
      <Hyperlink
        linkDefault={true}
        linkStyle={eachTweetStyles.linkStyle}
        linkText="Read More"
        >
        <Text style={eachTweetStyles.tweetText}>{text}</Text>
      </Hyperlink>
    </View>
  </View>
)

const eachTweetStyles = StyleSheet.create({
  tweetText: {
    color: '#999',
    fontSize: 12,
    fontFamily: "Verdana",
    flexWrap: 'wrap',
  },
  username: {
    color: 'white',
    fontSize: 14,
    fontFamily: "Verdana"
  },
  tweetContain: {
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderTopWidth: 3,
    borderStyle: "solid",
    borderColor: "#001e00"
  },
  linkStyle: {
    color: "#00A800",
    textDecorationLine: 'underline'
  }
})
