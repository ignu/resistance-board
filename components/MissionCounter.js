import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  button: {
    marginRight: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(3, 3, 3, 0.5)',
    height: 110,
    width: 110,
    borderRadius: 55
  },
  text: {
    padding: 20,
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: "#848",
    textShadowRadius: 3,
    textShadowOffset: { height: 1, width: 1 },
    margin: 20
  },
});

const MissionCounter = ({count}) => {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>{Math.abs(count)}</Text>
    </View>
  )
}

export default MissionCounter
