import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import store from '../store/index'

const setPlayers = (number) => {
  return () => {
    store.numberOfPlayers = number
  }
}

const styles = {
  container: {
    padding: 40
  },
  button: {
    padding: 10
  },
  playerText: {
    fontSize: 20,
    color: '#ccc'
  }
}

const SelectPlayers = () => {
  return (
    <View style={styles.container}>
      {[5, 6, 7, 8, 9, 10].map((i) => {
        return (
          <TouchableOpacity style={styles.button} key={`set${i}`} onPress={setPlayers(i)}>
            <Text style={styles.playerText}>{i} Players</Text>
          </TouchableOpacity>
        )})}
    </View>
  )
}

export default SelectPlayers
