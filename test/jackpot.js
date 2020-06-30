const jackpot = artifacts.require("jackpot");

contract('jackpot', (accounts) => {
  it('1 times do start game', async () => {
    const jackpot = await jackpot.deployed();
    const playerNumberA = await jackpot.playerNumberA.call();

    assert.equal(playerNumberA, 1, "playerNumberA not 1");
  });
});