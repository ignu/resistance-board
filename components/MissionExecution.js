import React from 'react';
import store from '../store/index'
import BackgroundImage from './BackgroundImage';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const image = require('../resources/dystopian.jpg');

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 30,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  button: {
    padding: 20
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
          <TouchableOpacity style={[styles.button]} onPress={this.getReady.bind(this)}>

            <Text style={[styles.text]}>{this.state.message}</Text>

            <Text style={[styles.text, styles.pass]}>Ready?</Text>
          </TouchableOpacity>
        </View>
      )
    }
    return (
      <View style={styles.container} >
        <BackgroundImage resiveMode={"contain"} image={image} opacity={0.5}/>
        <Text style={styles.text}>Perform Mission</Text>
        <TouchableOpacity style={[styles.button]} onPress={() => this.playCard(true)}>
          <Text style={[styles.text, styles.pass]}>Pass</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button]} onPress={() => this.playCard(false)}>
          <Text style={[styles.text, styles.fail]}>Fail</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default MissionExecution
