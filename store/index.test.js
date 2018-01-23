import store from './index'

describe("voteCount", () => {
  it("defaults vote count to 0", () => {
    expect(store.voteCount).toEqual(0);
  })

  it("", () => {
  });
})

describe("numberOfPlayers", () => {
  it("updates rounds when set", () => {
    store.numberOfPlayers = 5
    expect(store.rounds).toEqual([2, 3, 2, 3, 3])
  })
})
