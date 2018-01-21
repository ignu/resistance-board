import React from 'react';
import { View, Text } from 'react-native';

const style = {
  container: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 10,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
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
  activeVote: {
    backgroundColor: 'rgba(3, 3, 3, 0.9)',
    
  },
  finalVote: {
    backgroundColor: 'rgba(113, 3, 3, 0.3)',
  }
}
const VoteCounter = () => {
  return (
    <View style={style.container}>
      <View style={{
        flex: 1,
        flexDirection: "row"
      }}>
        <View style={[style.vote, style.activeVote]}/>
        <View style={style.vote}/>
        <View style={style.vote}/>
        <View style={style.vote}/>
        <View style={[style.vote, style.finalVote]}/>
      </View>
    </View>
  )
}

export default VoteCounter
