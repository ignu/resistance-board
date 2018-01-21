import React from 'react';
import { StyleSheet, View } from 'react-native';
import MissionCounter from './components/MissionCounter';
import BackgroundImage from './components/BackgroundImage';
import VoteCounter from './components/VoteCounter'

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
});

export default class App extends React.Component {
  render() {
    const missionCounts = [2, 3, 4, -4, 5]

    return (
      <View style={styles.container}>
        <BackgroundImage />
        <View style={styles.missionRow}>
          { missionCounts.map((i) => <MissionCounter key={ `mission${i}` } count={i}/>) }
        </View>

        <VoteCounter />
      </View>
    );
  }
}
