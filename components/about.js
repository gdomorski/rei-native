import React from 'react'
import * as Animatable from 'react-native-animatable';
import {StyleSheet, Text} from 'react-native'

export default () => (
  <Animatable.Text animation="fadeIn" style={aboutStyles.aboutText}>
    At Recreational Equipment, Inc. (REI), we love to get outside and play, and we know first-hand the importance of quality outdoor gear. We stand behind all our products with a 100% satisfaction guarantee, and we design our own line of award-winning REI brand gear and clothing. Whether you're new to outdoor adventure or a seasoned pro, we gladly share our enthusiasm for our products—and the trails, slopes and waterways where we play.
    {"\n"}{"\n"}
    Each year, REI donates millions of dollars to support conservation efforts nationwide and sends dedicated teams of volunteers—members, customers and REI employees—to build trails, clean up beaches, restore local habitats and more.... Through responsible business practices across the company, we strive to reduce our environmental footprint.
    {"\n"}{"\n"}
    What began as a group of 23 mountain climbing buddies is now the nation's largest consumer cooperative. But no matter how large we grow, our roots remain firmly planted in the outdoors. Our passion for outdoor adventure is clear, whether you visit any of our stores across the country, phone us, or interact with us online.
    {"\n"}{"\n"}
    By staying true to our roots, we've earned a place on FORTUNE magazine's list of the "100 Best Companies to Work For" every year since the rankings began in 1998. We work hard to earn our reputation for quality and integrity every day. Our core purpose guides everything we do: we all work to inspire, educate and outfit for a lifetime of outdoor adventure and stewardship.
  </Animatable.Text>
)

const aboutStyles = StyleSheet.create({
  aboutText: {
    color: 'white',
    margin: 20,
    fontSize: 12,
    color: "#999999"
  }
})
