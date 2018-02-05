import store from './index'

describe("voteCount", () => {
  beforeEach(store.reset)

  it("defaults vote count to 0", () => {
    expect(store.voteCount).toEqual(0);
  })
})

describe("numberOfPlayers", () => {
  beforeEach(store.reset)

  it("updates rounds when set", () => {
    store.numberOfPlayers = 5
    expect(store.rounds).toEqual([2, 3, 2, 3, 3])
  })
})

describe("startMission", () => {
  beforeEach(store.reset)

  it("adds an empty mission object", () => {
  });

  it("raises if number of players hasn't been set", () => {
    expect(store.startMission).toThrowError()
  })

  it("sets status to waiting", () => {
    store.numberOfPlayers = 5
    store.startMission()
    expect(store.status).toEqual("waiting")
  })
});

describe("playCard", () => {
  beforeEach(store.reset)

  it("adds votes until the mission end", () => {
    store.numberOfPlayers = 5
    store.startMission()
    store.playCard(true)
    expect(store.status).toEqual("waiting")
    store.playCard(true)
    expect(store.status).toEqual("tallying")
  });
});

describe("getStatus", () => {
  beforeEach(store.reset)

  const setVotes = (array) => {
    array.forEach((round) => {
      round.forEach(store.playCard)
      store.nextRound()
    })
  }

  it("returns pass when all votes are passing", () => {
    store.numberOfPlayers = 5
    setVotes([[true, true]])
    expect(store.getStatus(0)).toEqual("pass")
  });

  it("returns fail when any vote is failing", () => {
    store.numberOfPlayers = 5
    setVotes([[true, false]])
    expect(store.getStatus(0)).toEqual("fail")
  });

  describe("with > 6 players", () => {
    beforeEach(store.reset)

    it("passes with one fail for mission four", () => {
      store.numberOfPlayers = 7
      setVotes([[], [], [], [true, false, true]])
      expect(store.getStatus(3)).toEqual("pass")
    })

    it("fails with two fails for mission four", () => {
      store.numberOfPlayers = 7
      setVotes([[], [], [], [false, false, true]])
      expect(store.getStatus(3)).toEqual("fail")
    })
  })
});


describe("nextRound", () => {
  beforeEach(store.reset)

  it("creates a new round", () => {
    store.numberOfPlayers = 5
    store.startMission()
    expect(store.roundCount).toEqual(1)
    store.playCard(true)
    store.playCard(true)

    store.nextRound()

    expect(store.status).toEqual("voting")
    expect(store.roundCount).toEqual(2)
  })

  it("updates the voteCount", () => {
    store.numberOfPlayers = 5
    store.voteCount = 5

    store.nextRound()

    expect(store.voteCount).toEqual(0);
  })
})
