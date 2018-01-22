import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MissionCounter from './components/MissionCounter';
import BackgroundImage from './components/BackgroundImage';
import VoteCounter from './components/VoteCounter'
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

    return (
      <View style={styles.container}>
        <BackgroundImage />


        <View><Text style={styles.spyCount}>{store.numberOfPlayers} Players | {store.spies} Spies</Text></View>
        <View style={styles.missionRow}>
          { store.rounds.map((i, y) => <MissionCounter key={ `mission${y}` } count={i}/>) }
        </View>

        <VoteCounter />
      </View>
    );
  }
}
