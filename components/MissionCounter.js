import React from 'react';
import store from '../store/index'
import { observer } from 'mobx-react'
import MissionExecution from './MissionExecution'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

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
    textShadowColor: "#449",
    textShadowRadius: 3,
    textShadowOffset: { height: 1, width: 1 },
    margin: 20
  },
});

@observer
export default class MissionCounter extends React.Component {
  constructor(props) {
    super()
    this.props = props
  }

 render()  {
  const { count } = this.props
  if (store.status == "waiting") return <MissionExecution />

  return (
    <TouchableOpacity
      onPress={store.startMission}
      style={styles.button}
    >
      <Text style={styles.text}>{Math.abs(count)}</Text>
    </TouchableOpacity>
  )
 }
}
