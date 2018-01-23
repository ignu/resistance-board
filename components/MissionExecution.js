import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    position: 'absolute',
    height: "100%",
    width: "100%",
    backgroundColor: "#900"
  },
  text: {
    color: "#999"
  }
});

const MissionCounter = ({count}) => {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Perform Mission</Text>
    </View>
  )
}

export default MissionCounter
