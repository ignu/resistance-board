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
  lessPadding: {
    paddingRight: 0,
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
    backgroundColor: 'rgba(99, 3, 3, 0.7)',
  },
  pass: {
    backgroundColor: 'rgba(3, 99, 3, 0.7)',
  },
  twoRequired: {
    color: "rgba(199, 99, 99, 0.6)",
  }
});

const twoRequired = (index) => {
  return index == 3 && store.numberOfPlayers > 6
}

@observer
export default class MissionCounter extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

 render()  {
  const { count, status, index } = this.props
  let textStyles = [styles.text, styles[`${status}Text`]]

  if (twoRequired(index)) textStyles.push(styles.lessPadding)

  return (
    <TouchableOpacity
      onPress={store.startMission}
      style={[styles.button, styles[status]]}
    >
      <Text style={textStyles}>
        {count}

        { twoRequired(index) && <Text style={styles.twoRequired}>*</Text>}
      </Text>
    </TouchableOpacity>
  )
 }
}
