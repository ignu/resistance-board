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

  it("changesStatusFromWaiting", () => {
    store.numberOfPlayers = 5
    store.startMission()
    store.playCard(true)
    expect(store.status).toEqual("waiting")
    store.playCard(true)
    expect(store.status).toEqual("voting")
  });
});

