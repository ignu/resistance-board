import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import MissionCounter from './components/MissionCounter'
import BackgroundImage from './components/BackgroundImage'
import MissionExecution from './components/MissionExecution'
import VoteCounter from './components/VoteCounter'
import MissionTally from './components/MissionTally'
import SelectPlayers from './components/SelectPlayers'
import store from './store/index'
import { observer } from 'mobx-react'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  missionRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  counts: {
    margin: 5,
    marginTop: 10
  },
  spyCount: {
    fontWeight: 'bold',
    fontSize: 16,
    color: "rgba(2, 2, 2, 0.4)"
  },
  twoRequired: {
    fontWeight: 'bold',
    fontSize: 26,
    color: "rgba(159, 29, 29, 0.9)",
    marginBottom: 20,
  }
});

@observer
export default class App extends React.Component {
  render() {
    if (!store.numberOfPlayers) {
      return <View style={styles.container}><BackgroundImage/><SelectPlayers/></View>
    }

    if (store.status == "waiting") return <MissionExecution />
    if (store.status == "tallying") return <MissionTally />

    return (
      <View style={styles.container}>
        <BackgroundImage />

        <View style={styles.counts}><Text style={styles.spyCount}>{store.numberOfPlayers} Players | {store.spies} Spies</Text></View>

        <View style={styles.missionRow}>
          { store.rounds.map((i, index) => <MissionCounter key={ `mission${index}` } index={index} count={i} status={store.getStatus(index)} />) }
        </View>

        <View><Text style={styles.twoRequired}>* Two Fails Required</Text></View>

        <VoteCounter />
      </View>
    )
  }
}
