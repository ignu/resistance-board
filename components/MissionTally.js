import React from 'react';
import store from '../store/index'
import { observer } from 'mobx-react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  continue: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(3, 90, 3, 0.5)',
    height: 90,
    width: 140,
    borderRadius: 25
  },
  container: {
    padding: 20,
  },
  pass: {
    color: 'rgba(9, 99, 9, 0.5)',
  },
  fail: {
    color: 'rgba(99, 9, 9, 0.5)',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
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
        <Text style={styles.text}>Mission Results for {store.roundCount}</Text>

        { votes.map((vote, i) => <MissionVote key={`vote${i}`} vote={vote}/>) }

        <TouchableOpacity onPress={store.nextRound} style={styles.continue}>
          <Text style={styles.text}>Next Round</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
