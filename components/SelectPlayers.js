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
    fontSize: 29,
    color: '#eee',
    shadowColor: '#F00',
    shadowOffset: { width: 555, height: 100 },
    shadowRadius: 10,
    shadowOpacity: 0.5
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
