const personCall = artifacts.require("personCall");
const newMats = artifacts.require("newMaterials");
const landsMix = artifacts.require("landsMix");

contract("personCall TEST", (accounts) => {
    it("f/mint", async () => {
        console.log("mint...");
        let personCallIns = await personCall.deployed();

        let count = await personCallIns.showtokenAmount.call(1001);
        console.log("count=");
        console.log(count.toNumber());
        await personCallIns.push_dungeons(accounts[0]);

        await personCallIns.callTreasureMin(1001, accounts[0], 100);
        count = await personCallIns.showtokenAmount.call(1001);
        console.log(count.toNumber());
    });
});
