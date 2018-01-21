import React from 'react';
import { Image, View } from 'react-native';

const image = require('../resources/background.jpg');

const BackgroundImage = () => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <Image
        style={{
          flex: 1,
          resizeMode: 'cover'
        }}
        source={image}
      />
    </View>
  )
}

export default BackgroundImage
