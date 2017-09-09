import React from 'react'
import {StyleSheet, Text, View, Image, ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class MainImage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ready: false
    }
  }

  ready = () => {
    this.setState({ ready: true })
  }

  render() {
    const { uri}  = this.props

    return (
      <Animatable.View animation="fadeIn">
        <Image 
          onLoad={this.ready}
          style={mainImgStyles.mainCatImg}
          source={{uri}}
        ></Image>

        {!this.state.ready &&
          <ActivityIndicator
            animating={true}
            color="#00A800"
            size='large'
            style={{ position: 'absolute', alignSelf: 'center', top: 130 }}
          />
        }
      </Animatable.View>
    )
  }
}

const mainImgStyles = StyleSheet.create({
  mainCatImg: {
    height: 300,
    width: "100%",
  }
})
