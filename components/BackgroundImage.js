import React from 'react';
import { Image, View } from 'react-native';

const defaultImage = require('../resources/background.jpg');

const BackgroundImage = ({image, opacity, resizeMode}) => {
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
          width: null,
          height: null,
          opacity: (opacity || 1),
          resizeMode: (resizeMode || 'cover')
        }}
        source={image || defaultImage}
      />
    </View>
  )
}

export default BackgroundImage
