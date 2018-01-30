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
  spyCount: {
    color: "#fff"
  }
});

@observer
export default class App extends React.Component {
  render() {
    if (!store.numberOfPlayers) {
      return <View style={styles.container}><BackgroundImage/><SelectPlayers/></View>
    }

    const getStatus = (i) => {
      if (i >= store.roundCount) {
        return "disabled"
      }

      return "active"
    }

    if (store.status == "waiting") return <MissionExecution />
    if (store.status == "tallying") return <MissionTally />

    return (
      <View style={styles.container}>
        <BackgroundImage />

        <View><Text style={styles.spyCount}>{store.numberOfPlayers} Players | {store.spies} Spies</Text></View>

        <View style={styles.missionRow}>
          { store.rounds.map((i, index) => <MissionCounter key={ `mission${index}` } count={i} status={getStatus(index)} />) }
        </View>

        <VoteCounter />
      </View>
    )
  }
}
