const master = artifacts.require("landTycoonMaster");
const slave1 = artifacts.require("slave");
const slave2 = artifacts.require("slave2");
const arina = artifacts.require("arina");
const trade = artifacts.require("trade");
const landsMix = artifacts.require("landsMix");
const newMats = artifacts.require("newMaterials");
const personCall = artifacts.require("personCall");

contract("trade TEST", (accounts) => {
    it("f/register", async () => {
        console.log("f/register...");
        let masterIns = await master.deployed();
        let name = "testUser";
        await masterIns.register(name, { from: accounts[0] });
        await masterIns.register(name, { from: accounts[1] });
        await masterIns.register(name, { from: accounts[2] });
        await masterIns.register(name, { from: accounts[3] });
        let b32Name = await masterIns.addressToName.call(accounts[0]);
        let confirmName = await masterIns.bytes32ToString(b32Name);
        assert.equal(name, confirmName, "name error");
        console.log("name=");
        console.log(confirmName);
    });

    it("f/rollDice", async () => {
        console.log("f/rollDice...");
        let masterIns = await master.deployed();
        let rollDice = await masterIns.rollDice({ from: accounts[0] });
        await masterIns.rollDice({ from: accounts[1] });
        let events = rollDice.receipt.logs;
        console.log("local=");
        console.log(
            events[0].args[1].toNumber() + ", " + events[0].args[2].toNumber()
        );
    });

    it("f/fly", async () => {
        console.log("f/fly...");
        let masterIns = await master.deployed();
        let arinaIns = await arina.deployed();
        let fly = await masterIns.fly(1, 2, {
            value: 10 ** 19,
            from: accounts[0],
        });
        //await arinaIns.approveAndCall(master.address, 2000*10**8, "0x1", {from: accounts[0]});
        let events = fly.receipt.logs;
        //console.log(events);
        //console.log("local=");
        //console.log(events[0].args[1].toNumber()+", "+ events[0].args[2].toNumber());
        assert.equal(events[0].args[1].toNumber(), 1, "local error");
        assert.equal(events[0].args[2].toNumber(), 2, "local error");
    });

    it("push_dungeons", async () => {
        console.log("push_dungeons...");
        let personCallIns = await personCall.deployed();
        await personCallIns.push_dungeons(accounts[0]);
    });

    it("f/sendbox", async () => {
        console.log("sendbox...");
        let newMatsIns = await newMats.deployed();
        let tradeIns = await trade.deployed();
        let arinaIns = await arina.deployed();
        let city = 1;
        await newMatsIns.mint(1000, accounts[0], 110);
        await newMatsIns.mint(1104, accounts[0], 110);
        let player = await newMatsIns.balanceOf.call(accounts[0], 1000);
        let market = await tradeIns.inquire_box_amount.call(city, 1000);
        console.log("player box:" + player.toNumber());
        console.log("market box:" + market.toNumber());
        console.log("pool1 arina: " + (await tradeIns.inquire_pool.call(1)));
        console.log(
            "palyer arina: " + (await arinaIns.balanceOf.call(accounts[0]))
        );
    });

    it("f/receiveApproval + sellBox*10", async () => {
        console.log("sellBox*10...");
        let newMatsIns = await newMats.deployed();
        let arinaIns = await arina.deployed();
        let tradeIns = await trade.deployed();
        let city = 1;
        let realPriceBatch = await tradeIns.realPriceBatch.call(
            1,
            2,
            1000,
            10,
            true
        );
        console.log("realPriceBatch: " + realPriceBatch);
        await newMatsIns.safeTransferFrom(
            accounts[0],
            tradeIns.address,
            1000,
            10,
            "0x"
        );
        let player = await newMatsIns.balanceOf.call(accounts[0], 1000);
        let market = await tradeIns.inquire_box_amount.call(city, 1000);

        console.log("player box:" + player.toNumber());
        console.log("market box:" + market.toNumber());
        console.log(
            "city box: " + (await tradeIns.inquire_box_amount(1, 1000))
        );
        console.log("pool1 arina: " + (await tradeIns.inquire_pool.call(1)));
        console.log(
            "palyer arina: " + (await arinaIns.balanceOf.call(accounts[0]))
        );
    });

    it("f/receiveApproval + sellBox*100", async () => {
        console.log("sellBox*100...");
        let newMatsIns = await newMats.deployed();
        let arinaIns = await arina.deployed();
        let tradeIns = await trade.deployed();
        let city = 1;
        let realPriceBatch = await tradeIns.realPriceBatch.call(
            1,
            2,
            1000,
            100,
            true
        );
        console.log("realPriceBatch: " + realPriceBatch);
        await newMatsIns.safeTransferFrom(
            accounts[0],
            tradeIns.address,
            1000,
            100,
            "0x"
        );
        let player = await newMatsIns.balanceOf.call(accounts[0], 1000);
        let market = await tradeIns.inquire_box_amount.call(city, 1000);

        console.log("player box:" + player.toNumber());
        console.log("market box:" + market.toNumber());
        console.log(
            "city box: " + (await tradeIns.inquire_box_amount(1, 1000))
        );
        console.log("pool1 arina: " + (await tradeIns.inquire_pool.call(1)));
        console.log(
            "palyer arina: " + (await arinaIns.balanceOf.call(accounts[0]))
        );
    });

    it("f/receiveApproval + buyBox*10", async () => {
        console.log("buyBox*10...");
        let newMatsIns = await newMats.deployed();
        let arinaIns = await arina.deployed();
        let tradeIns = await trade.deployed();
        let city = 1;
        let realPriceBatch = await tradeIns.realPriceBatch.call(
            1,
            2,
            1000,
            10,
            false
        );
        console.log("realPriceBatch: " + realPriceBatch);
        //0x1 = buy
        //00 = box1
        //a = 10boxs
        await arinaIns.approveAndCall(trade.address, realPriceBatch, "0x1000a");

        let player = await newMatsIns.balanceOf.call(accounts[0], 1000);
        let market = await tradeIns.inquire_box_amount.call(city, 1000);
        console.log("player box:" + player.toNumber());
        console.log("market box:" + market.toNumber());
        console.log("pool1 arina: " + (await tradeIns.inquire_pool.call(1)));
        console.log(
            "city box: " + (await tradeIns.inquire_box_amount(1, 1000))
        );
        console.log(
            "palyer arina: " + (await arinaIns.balanceOf.call(accounts[0]))
        );
    });

    it("f/receiveApproval + buyBox*100", async () => {
        console.log("buyBox*100...");
        let newMatsIns = await newMats.deployed();
        let arinaIns = await arina.deployed();
        let tradeIns = await trade.deployed();
        let city = 1;
        let realPriceBatch = await tradeIns.realPriceBatch.call(
            1,
            2,
            1000,
            100,
            false
        );
        console.log("realPriceBatch: " + realPriceBatch);
        await arinaIns.approveAndCall(trade.address, realPriceBatch, "0x10064");

        let player = await newMatsIns.balanceOf.call(accounts[0], 1000);
        let market = await tradeIns.inquire_box_amount.call(city, 1000);
        console.log("player box:" + player.toNumber());
        console.log("market box:" + market.toNumber());
        console.log("pool1 arina: " + (await tradeIns.inquire_pool.call(1)));
        console.log(
            "city box: " + (await tradeIns.inquire_box_amount(1, 1000))
        );
        console.log(
            "palyer arina: " + (await arinaIns.balanceOf.call(accounts[0]))
        );
    });

    it("f/receiveApproval + sellBox1104 *10", async () => {
        console.log("sellBox1104 *10...");
        let newMatsIns = await newMats.deployed();
        let arinaIns = await arina.deployed();
        let tradeIns = await trade.deployed();
        let city = 1;
        let realPriceBatch = await tradeIns.realPriceBatch.call(
            1,
            2,
            1104,
            10,
            true
        );
        console.log("realPriceBatch: " + realPriceBatch);
        await newMatsIns.safeTransferFrom(
            accounts[0],
            tradeIns.address,
            1104,
            10,
            "0x"
        );
        let player = await newMatsIns.balanceOf.call(accounts[0], 1104);
        let market = await tradeIns.inquire_box_amount.call(city, 1104);

        console.log("player box:" + player.toNumber());
        console.log("market box:" + market.toNumber());
        console.log(
            "city box: " + (await tradeIns.inquire_box_amount(1, 1104))
        );
        console.log("pool1 arina: " + (await tradeIns.inquire_pool.call(1)));
        console.log(
            "palyer arina: " + (await arinaIns.balanceOf.call(accounts[0]))
        );
    });

    it("f/receiveApproval + buyBox1104*10", async () => {
        console.log("buyBox1104 *10...");
        let newMatsIns = await newMats.deployed();
        let arinaIns = await arina.deployed();
        let tradeIns = await trade.deployed();
        let city = 1;
        let realPriceBatch = await tradeIns.realPriceBatch.call(
            1,
            2,
            1104,
            10,
            false
        );
        console.log("realPriceBatch: " + realPriceBatch);
        //0x1 = buy
        //09 = box 1104
        //a = 10boxs
        await arinaIns.approveAndCall(trade.address, realPriceBatch, "0x1090a");

        let player = await newMatsIns.balanceOf.call(accounts[0], 1104);
        let market = await tradeIns.inquire_box_amount.call(city, 1104);
        console.log("player box:" + player.toNumber());
        console.log("market box:" + market.toNumber());
        console.log("pool1 arina: " + (await tradeIns.inquire_pool.call(1)));
        console.log(
            "city box: " + (await tradeIns.inquire_box_amount(1, 1104))
        );
        console.log(
            "palyer arina: " + (await arinaIns.balanceOf.call(accounts[0]))
        );
    });

    // it('f/receiveApproval + buyBox', async () => {
    //     console.log("buyBox...");
    //     let newMatsIns = await newMats.deployed();
    //     let arinaIns = await arina.deployed();
    //     let tradeIns = await trade.deployed();
    //     let realPriceBatch = await tradeIns.realPriceBatch.call(1, 2, 1000, 40, false);
    //     console.log("realPriceBatch: " + realPriceBatch);
    //     await arinaIns.approveAndCall(trade.address, realPriceBatch, "0x100010a");

    //     let player = await newMatsIns.balanceOf.call(accounts[0], 1000);
    //     let market = await newMatsIns.balanceOf.call(trade.address, 1000);
    //     console.log("player box:" + player.toNumber());
    //     console.log("market box:" + market.toNumber());
    //     console.log("pool1 arina: " + await tradeIns.inquire_pool.call(1));
    //     console.log("city box: " + await tradeIns.inquire_box_amount(1, 1000));
    //     console.log("palyer arina: " + await arinaIns.balanceOf.call(accounts[0]));
    // });

    // it('f/send + buyBox', async () => {
    //     console.log("buyBox...");
    //     let newMatsIns = await newMats.deployed();
    //     let arinaIns = await arina.deployed();
    //     let tradeIns = await trade.deployed();
    //     let realPriceBatch = await tradeIns.realPriceBatch.call(1000, 10);
    //     console.log("inquire_box_amount: " + await tradeIns.inquire_box_amount(1, 1000));
    //     console.log("realPriceBatch: " + realPriceBatch);

    //     let player = await newMatsIns.balanceOf.call(accounts[0], 1000);
    //     let market = await newMatsIns.balanceOf.call(trade.address, 1000);
    //     console.log("amount:" + player.toNumber());
    //     console.log("market:" + market.toNumber());
    //     console.log("inquire_pool1: " + await tradeIns.inquire_pool.call(1));
    //     console.log("inquire_box_amount: " + await tradeIns.inquire_box_amount(1, 1000));
    // });
});
