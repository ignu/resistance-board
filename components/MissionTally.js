import React from 'react';
import store from '../store/index'
import { observer } from 'mobx-react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

import BackgroundImage from './BackgroundImage'

const styles = StyleSheet.create({
  continue: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(3, 90, 3, 0.5)',
    height: 60,
    width: 140,
    borderRadius: 25
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pass: {
    color: 'rgba(9, 99, 9, 0.5)',
  },
  fail: {
    color: 'rgba(99, 9, 9, 0.5)',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(9, 9, 9, 0)',
  }
});

const MissionVote = ({vote}) => {
  const text = vote ? "Pass" : "Fail"
  const voteStyle = vote ? styles.pass : styles.fail
  const style = [styles.text, voteStyle]

  return(
    <View style={{padding: 10}}>
      <Text style={style}>{ text }</Text>
    </View>
  )
}

export default class MissionTally extends React.Component {
  render() {
    const votes = store.missionVotes[store.roundCount - 1]

    return(
      <View style={styles.container}>
        <BackgroundImage/>
        <Text style={styles.text}>Mission Results for Mission #{store.roundCount}</Text>

        { votes.map((vote, i) => <MissionVote key={`vote${i}`} vote={vote}/>) }

        <TouchableOpacity onPress={store.nextRound} style={styles.continue}>
          <Text style={styles.text}>Next Round</Text>
        </TouchableOpacity
      </View>
    )
  }
}
