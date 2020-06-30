const master = artifacts.require("landTycoonMaster");
const slave1 = artifacts.require("slave");
const slave2 = artifacts.require("slave2");
const arina = artifacts.require("arina");
const trade = artifacts.require("trade");
const landsMix = artifacts.require("landsMix");
const newMats = artifacts.require("newMaterials");
const personCall = artifacts.require("personCall");

contract("master TEST", (accounts) => {
    it("f/register", async () => {
        console.log("f/register...");
        let masterIns = await master.deployed();
        let name = "testUser";
        await masterIns.register(name, { from: accounts[0] });
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
        //console.log(events);
        console.log("local=");
        console.log(
            events[0].args[1].toNumber() + ", " + events[0].args[2].toNumber()
        );
        // let player_info = await masterIns.player_info.call(accounts[0]);
        // console.log(player_info);
    });

    it("f/fly", async () => {
        console.log("f/fly...");
        let masterIns = await master.deployed();
        let fly = await masterIns.fly(1, 2, {
            value: 10 ** 19,
            from: accounts[0],
        });
        let events = fly.receipt.logs;
        //console.log(events);
        //console.log("local=");
        //console.log(events[0].args[1].toNumber()+", "+ events[0].args[2].toNumber());
        assert.equal(events[0].args[1].toNumber(), 1, "local error");
        assert.equal(events[0].args[2].toNumber(), 2, "local error");
    });

    it("f/receiveApproval + buy_ARINA", async () => {
        console.log("f/receiveApproval + buy_ARINA...");
        let arinaIns = await arina.deployed();
        await arinaIns.approveAndCall(master.address, 2000 * 10 ** 8, "0x1");
    });

    it("f/rollDice", async () => {
        console.log("f/rollDice...");
        let masterIns = await master.deployed();
        let rollDice = await masterIns.rollDice({ from: accounts[0] });
        await masterIns.rollDice({ from: accounts[1] });
        let events = rollDice.receipt.logs;
        //console.log(events);
        //console.log("local=");
        //console.log(events[0].args[1].toNumber()+", "+ events[0].args[2].toNumber());
        // let player_info = await masterIns.player_info.call(accounts[0]);
        // console.log(player_info);
    });

    it("f/fly", async () => {
        console.log("f/fly...");
        let masterIns = await master.deployed();
        let fly = await masterIns.fly(1, 2, {
            value: 10 ** 19,
            from: accounts[0],
        });
        let events = fly.receipt.logs;
        //console.log(events);
        //console.log("local=");
        //console.log(events[0].args[1].toNumber()+", "+ events[0].args[2].toNumber());
        assert.equal(events[0].args[1].toNumber(), 1, "local error");
        assert.equal(events[0].args[2].toNumber(), 2, "local error");
    });

    it("f/mint", async () => {
        console.log("f/mint...");
        let personCallIns = await personCall.deployed();
        let newMatsIns = await newMats.deployed();

        await personCallIns.push_dungeons(accounts[0]);
        await newMatsIns.mint(2001, accounts[0], 100);
        await newMatsIns.mint(2002, accounts[0], 100);
        await newMatsIns.mint(2003, accounts[0], 100);
        await newMatsIns.mint(2004, accounts[0], 100);
        await newMatsIns.mint(2005, accounts[0], 100);
        await newMatsIns.mint(2006, accounts[0], 100);
        await newMatsIns.mint(2007, accounts[0], 100);
        await newMatsIns.mint(2008, accounts[0], 100);
        await newMatsIns.mint(2009, accounts[0], 100);
        await newMatsIns.mint(2010, accounts[0], 100);
        await newMatsIns.mint(2011, accounts[0], 100);
        await newMatsIns.mint(2012, accounts[0], 100);
        await newMatsIns.mint(2013, accounts[0], 100);
        await newMatsIns.mint(2014, accounts[0], 100);
        await newMatsIns.mint(2015, accounts[0], 100);
        await newMatsIns.mint(2026, accounts[0], 100);
        await newMatsIns.mint(2027, accounts[0], 100);
        await newMatsIns.mint(2028, accounts[0], 100);
        await newMatsIns.mint(2029, accounts[0], 100);
        await newMatsIns.mint(2030, accounts[0], 100);

        await newMatsIns.mint(2106, accounts[0], 100);
        await newMatsIns.mint(2107, accounts[0], 100);
        await newMatsIns.mint(2108, accounts[0], 100);
        await newMatsIns.mint(2109, accounts[0], 100);
        await newMatsIns.mint(2110, accounts[0], 100);

        await newMatsIns.mint(2216, accounts[0], 100);
        await newMatsIns.mint(2217, accounts[0], 100);
        await newMatsIns.mint(2218, accounts[0], 100);
        await newMatsIns.mint(2219, accounts[0], 100);
        await newMatsIns.mint(2220, accounts[0], 100);

        await newMatsIns.mint(2304, accounts[0], 100);
        await newMatsIns.mint(2305, accounts[0], 100);
        await newMatsIns.mint(2306, accounts[0], 100);
        await newMatsIns.mint(2307, accounts[0], 100);
        await newMatsIns.mint(2308, accounts[0], 100);

        await newMatsIns.mint(2416, accounts[0], 100);
        await newMatsIns.mint(2417, accounts[0], 100);
        await newMatsIns.mint(2418, accounts[0], 100);
        await newMatsIns.mint(2419, accounts[0], 100);
        await newMatsIns.mint(2420, accounts[0], 100);
    });

    it("f/materialMix01", async () => {
        console.log("f/materialMix...");

        let landsMixIns = await landsMix.deployed();
        let masterIns = await master.deployed();
        let slave1Ins = await slave1.deployed();

        let attribute = await masterIns.inquire_tot_attribute.call(1, 2);
        console.log(attribute);
        let inquire_land_info1_2 = await slave1Ins.inquire_land_info.call(1, 2);
        console.log(
            "inquire_land_info1-2: " + JSON.stringify(inquire_land_info1_2)
        );

        await landsMixIns.materialMix(1, [2026, 2027, 2028, 2029, 2030]);

        attribute = await masterIns.inquire_tot_attribute.call(1, 2);
        console.log(attribute);
        inquire_land_info1_2 = await slave1Ins.inquire_land_info.call(1, 2);
        console.log(
            "inquire_land_info1-2: " + JSON.stringify(inquire_land_info1_2)
        );
    });

    it("f/materialMix02", async () => {
        console.log("f/materialMix...");

        let landsMixIns = await landsMix.deployed();
        let masterIns = await master.deployed();

        let attribute = await masterIns.inquire_tot_attribute.call(1, 2);
        console.log(attribute);

        await landsMixIns.materialMix(2, [
            2106,
            2107,
            2108,
            2109,
            2110,
            2110,
            2110,
            2110,
        ]);
        attribute = await masterIns.inquire_tot_attribute.call(1, 2);
        console.log(attribute);
    });

    it("f/materialMix03", async () => {
        console.log("f/materialMix...");

        let landsMixIns = await landsMix.deployed();
        let masterIns = await master.deployed();

        let attribute = await masterIns.inquire_tot_attribute.call(1, 2);
        console.log(attribute);

        await landsMixIns.materialMix(3, [
            2217,
            2218,
            2219,
            2220,
            2220,
            2220,
            2220,
        ]);
        attribute = await masterIns.inquire_tot_attribute.call(1, 2);
        console.log(attribute);
    });

    it("f/materialMix04", async () => {
        console.log("f/materialMix...");

        let landsMixIns = await landsMix.deployed();
        let masterIns = await master.deployed();

        let attribute = await masterIns.inquire_tot_attribute.call(1, 2);
        console.log(attribute);

        await landsMixIns.materialMix(4, [2308, 2307, 2308, 2307, 2308]);
        attribute = await masterIns.inquire_tot_attribute.call(1, 2);
        console.log(attribute);
    });

    it("f/materialMix05", async () => {
        console.log("f/materialMix...");

        let landsMixIns = await landsMix.deployed();
        let masterIns = await master.deployed();
        let slave1Ins = await slave1.deployed();

        let attribute = await masterIns.inquire_tot_attribute.call(1, 2);
        console.log(attribute);

        await landsMixIns.materialMix(5, [
            2417,
            2418,
            2419,
            2420,
            2420,
            2420,
            2420,
            2420,
            2420,
        ]);
        attribute = await masterIns.inquire_tot_attribute.call(1, 2);
        console.log(attribute);
    });
});
