import React from 'react';
import store from '../store/index'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
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
    fontSize: 30
  }
});

const MissionExecution = ({count}) => {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Perform Mission</Text>
      <TouchableOpacity onPress={() => store.playCard(true)}>
        <Text style={styles.text}>Pass</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => store.playCard(false)}>
        <Text style={styles.text}>Fail</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MissionExecution
