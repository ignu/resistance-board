import React from 'react';
import store from '../store/index'
import { observer } from 'mobx-react'
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
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: "#449",
    textShadowRadius: 3,
    textShadowOffset: { height: 1, width: 1 },
    margin: 20
  },
  activeText: {
    color: '#fff',
  },
  disabledText: {
    color: 'rgba(199, 199, 199, 0.5)',
  },
  disabled: {
    backgroundColor: 'rgba(3, 3, 3, 0.1)',
  },
  active: {
  },
  fail: {
    backgroundColor: 'rgba(99, 3, 3, 0.5)',
  },
  pass: {
    backgroundColor: 'rgba(3, 99, 3, 0.5)',
  }
});

@observer
export default class MissionCounter extends React.Component {
  constructor(props) {
    super()
    this.props = props
  }

 render()  {
  const { count, status } = this.props

  return (
    <TouchableOpacity
      onPress={store.startMission}
      style={[styles.button, styles[status]]}
    >
      <Text style={[styles.text, styles[`${status}Text`]]}>{Math.abs(count)}</Text>
    </TouchableOpacity>
  )
 }
}
