const jackpot_b = artifacts.require("jackpot_b");

contract('jackpot_b', (accounts) => {
  it('1 times do start game', async () => {
    const jackpot_b = await jackpot_b.deployed();
    const playerNumberA = await jackpot_b.playerNumberA.call();

    assert.equal(playerNumberA, 1, "playerNumberA not 1");
  });
});
