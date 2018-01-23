import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import store from '../store/index'
import { observer } from 'mobx-react'

const style = {
  container: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 10,
    top: 0,
    left: 0,
    width: '20%',
    height: '20%'
  },
  voteText: {
    color: "#888"
  },
  vote: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(3, 3, 3, 0.3)',
    marginLeft: 10
  },
  completeVote: {
    backgroundColor: 'rgba(3, 3, 3, 0.92)',
  },
  finalVote: {
    backgroundColor: 'rgba(113, 3, 3, 0.3)',
  }
}

@observer
export default class VoteCounter extends React.Component {
  render() {
    if (store.voteCount == 5) alert("Resistance Loses")
    return (
      <TouchableOpacity style={style.container} onPress={() => store.voteCount = store.voteCount+1}>
        <View style={{
          flex: 1,
          flexDirection: "row"
        }}>
          {[1, 2, 3, 4, 5].map((i) => {
            let styles = [style.vote]

            if (i <= store.voteCount+1) { styles.push(style.completeVote) }

            if (i == 5) { styles.push(style.finalVote) }

            return <View key={`vote${i}`} style={styles}/>
          })}
        </View>
      </TouchableOpacity>
    )
  }
}
