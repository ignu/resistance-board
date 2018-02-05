import React from 'react';
import store from '../store/index'
import BackgroundImage from './BackgroundImage';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const image = require('../resources/dystopian.jpg');
const ready = require('../resources/ready.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    top: 0,
    left: 0,
    position: 'absolute',
    height: "100%",
    width: "100%",
    backgroundColor: "#111",
    padding: 30
  },
  text: {
    color: "#999",
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  h1: {
    fontSize: 45,
    fontWeight: 'bold'
  },
  h1: {
    fontSize: 38,
    fontWeight: 'bold'
  },
  button: {
    padding: 20,
    margin: 20,
    width: 150,
    borderRadius: 100,
    backgroundColor: 'rgba(200, 200, 200, 0.8)'
  },
  pass: {
    color: 'rgba(0, 99, 0, 0.9)'
  },
  fail: {
    color: 'rgba(99, 0, 0, 0.9)'
  },
});

class MissionExecution extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: false,
      message: "Pass to first player"
    }
  }

  getReady = () => this.setState({ready: true})
  playCard = (card) => {
    store.playCard(card)

    this.setState({
      ready: false,
      message: "Vote Recorded. Pass to next player."
    })
  }

  render() {
    this.playCard.bind(this)

    if (!this.state.ready) {
      return(
        <View style={styles.container} >
          <BackgroundImage resizeMode="repeat" image={ready} opacity={0.15}/>

            <Text style={[styles.text, styles.h1]}>{this.state.message}</Text>

          <TouchableOpacity style={[styles.button]} onPress={this.getReady.bind(this)}>
            <Text style={[styles.text, styles.pass]}>Ready?</Text>
          </TouchableOpacity>
        </View>
      )
    }
    return (
      <View style={styles.container} >

        <BackgroundImage resizeMode="repeat" image={image} opacity={0.4}/>

        <Text style={[styles.text, styles.h1]}>Perform Mission</Text>

        <TouchableOpacity style={[styles.button]} onPress={() => this.playCard(true)}>
          <Text style={[styles.text, styles.pass]}>Pass</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button]} onPress={() => this.playCard(false)}>
          <Text style={[styles.text, styles.fail]}>Fail</Text>
        </TouchableOpacity>

        <Text style={[styles.text, styles.h2]}>(If you are Resistance you *must* press "Pass")</Text>
      </View>
    )
  }
}

export default MissionExecution
