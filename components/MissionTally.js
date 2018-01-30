import React from 'react';
import store from '../store/index'
import { observer } from 'mobx-react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  continue: {
    marginRight: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(3, 90, 3, 0.5)',
    height: 90,
    width: 140,
    borderRadius: 25
  },
  container: {
    padding: 20,
  }
});

const MissionVote = ({vote}) => {
  const text = vote ? "Pass" : "Fail"

  return(
    <View>
      <Text>{ text }</Text>
    </View>
  )
}

export default class MissionTally extends React.Component {
  render() {
    const votes = store.missionVotes[store.roundCount - 1]

    return(
      <View style={styles.container}>
        <Text>Mission Results for {store.roundCount}</Text>

        { votes.map((vote, i) => <MissionVote key={`vote${i}`} vote={vote}/>) }

        <TouchableOpacity onPress={store.nextRound} style={styles.continue}>
          <Text>Next Round</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
