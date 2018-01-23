import { observable, computed } from 'mobx'

const playerCounts = {
  "5" : {
    rounds: [2, 3, 2, 3, 3],
    spies: 2
  },
  "6" : {
    rounds: [2, 3, 4, 3, 4],
    spies: 2
  },
  "7" : {
    rounds: [2, 3, 3, 4, 4],
    spies: 3
  },
  "8" : {
    rounds: [3, 4, 4, 5, 5],
    spies: 3
  },
  "9" : {
    rounds: [3, 4, 4, 5, 5],
    spies: 3
  },
  "10" : {
    rounds: [3, 4, 4, 5, 5],
    spies: 4
  },
}

class Store {
  @observable numberOfPlayers
  @observable voteCount = 0
  @observable missionVotes = []
  @observable status = "voting"

  startMission = () => {
    this.status = "waiting"
  }

  @computed get rounds () {
    if (!this.numberOfPlayers) return []

    return playerCounts[this.numberOfPlayers.toString()].rounds
  }

  @computed get spies () {
    if (!this.numberOfPlayers) return []

    return playerCounts[this.numberOfPlayers.toString()].spies
  }
}

const store = new Store

export default store
