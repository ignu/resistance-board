import React from 'react';
import store from '../store/index'
import BackgroundImage from './BackgroundImage';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const image = require('../resources/dystopian.jpg');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0,
    position: 'absolute',
    height: "100%",
    width: "100%",
    backgroundColor: "#111",
    padding: 30
  },
  text: {
    color: "#999",
    fontSize: 30,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  button: {
    padding: 20
  },
  pass: {
    color: 'rgba(0, 99, 0, 0.9)'
  },
  fail: {
    color: 'rgba(99, 0, 0, 0.9)'
  },
});

const MissionExecution = ({count}) => {
  return (
    <View style={styles.container} >
      <BackgroundImage resiveMode={"contain"} image={image} opacity={0.5}/>
      <Text style={styles.text}>Perform Mission</Text>
      <TouchableOpacity style={[styles.button]} onPress={() => store.playCard(true)}>
        <Text style={[styles.text, styles.pass]}>Pass</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button]} onPress={() => store.playCard(false)}>
        <Text style={[styles.text, styles.fail]}>Fail</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MissionExecution
