import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import images from './src/assets/images';
import normalized from './src/utils/AppConstants'

const App = () => {
  return (
    <View>
      <Image style={{width:normalized.wp(100),height:normalized.hp(100)}} source={images.logo}/>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
