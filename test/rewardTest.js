const master = artifacts.require("landTycoonMaster");
const slave1 = artifacts.require("slave");
const slave2 = artifacts.require("slave2");
const arina = artifacts.require("arina");
const trade = artifacts.require("trade");
const landsMix = artifacts.require("landsMix");
const newMats = artifacts.require("newMaterials");
const personCall = artifacts.require("personCall");

contract("reward TEST", (accounts) => {
    it("f/register", async () => {
        console.log("\nf/register...");
        let masterIns = await master.deployed();
        let name = "testUser";
        await masterIns.register(name, { from: accounts[0] });
        // await masterIns.register(name, {from: accounts[1]});
        // await masterIns.register(name, {from: accounts[2]});
        // await masterIns.register(name, {from: accounts[3]});
        let b32Name = await masterIns.addressToName.call(accounts[0]);
        let confirmName = await masterIns.bytes32ToString(b32Name);
        assert.equal(name, confirmName, "name error");
        console.log("name=");
        console.log(confirmName);
    });

    it("f/rollDice", async () => {
        console.log("\nf/rollDice...");
        let masterIns = await master.deployed();
        let rollDice = await masterIns.rollDice({ from: accounts[0] });
        // await masterIns.rollDice({from: accounts[1]});
        // await masterIns.rollDice({from: accounts[2]});
        // await masterIns.register(name, {from: accounts[3]});
        let events = rollDice.receipt.logs;
        //console.log(events);
        console.log("local=");
        console.log(
            events[0].args[1].toNumber() + ", " + events[0].args[2].toNumber()
        );
        // let player_info = await masterIns.player_info.call(accounts[0]);
        // console.log(player_info);
    });

    // it('f/receiveApproval + _buyland', async () => {
    //     console.log("\nf/receiveApproval + _payRent_ARINA...");
    //     let masterIns = await master.deployed();
    //     let arinaIns = await arina.deployed();

    //     const city = 1;
    //     await masterIns.rollDice({from: accounts[3]});

    //     for(i=1; i<100; i++){
    //         await masterIns.fly(city, i, {value:10**19, from: accounts[0]});
    //         await arinaIns.approveAndCall(master.address, 2000*10**8, "0x1");
    //     }
    //     // let events = payRent_ARINA.receipt.logs;
    //     // console.log("change_city=");
    //     // console.log(events);
    // });

    // it('f/reward', async () => {
    //     console.log("\nf/reward...");
    //     let masterIns = await master.deployed();
    //     let newMatsIns = await newMats.deployed();
    //     const city = 1;
    //     let reward;

    //     for(i=1; i<20; i++){
    //         reward = await masterIns.reward(0, city, i, {from: accounts[0]});
    //     }
    //     for(i=20; i<40; i++){
    //         reward = await masterIns.reward(1, city, i, {from: accounts[0]});
    //     }
    //     for(i=40; i<60; i++){
    //         reward = await masterIns.reward(2, city, i, {from: accounts[0]});
    //     }
    //     for(i=60; i<80; i++){
    //         reward = await masterIns.reward(3, city, i, {from: accounts[0]});
    //     }
    //     for(i=80; i<100; i++){
    //         reward = await masterIns.reward(5, city, i, {from: accounts[0]});
    //     }

    // });

    it("f/all_reward", async () => {
        console.log("\nf/all_reward 3...");
        let masterIns = await master.deployed();
        let newMatsIns = await newMats.deployed();
        let arinaIns = await arina.deployed();
        const city = 1;
        boxClass = 3;

        for (i = 1; i < 33; i++) {
            await masterIns.fly(city, i, {
                value: 10 ** 19,
                from: accounts[0],
            });
            await arinaIns.approveAndCall(
                master.address,
                2000 * 10 ** 8,
                "0x1"
            );
        }
        let reward = await masterIns.all_reward(boxClass, city);
        //console.log(reward);
        let events = reward.receipt.logs;
        console.log(events);
        console.log("box=");
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1000,
                1001,
                1002,
                1003,
                1004,
            ])
        );
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1100,
                1101,
                1102,
                1103,
                1104,
            ])
        );
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1200,
                1201,
                1202,
                1203,
                1204,
            ])
        );
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1300,
                1301,
                1302,
                1303,
                1304,
            ])
        );
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1400,
                1401,
                1402,
                1403,
                1404,
            ])
        );
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1500,
                1501,
                1502,
                1503,
                1504,
            ])
        );
    });

    it("f/all_reward", async () => {
        console.log("\nf/all_reward 4...");
        let masterIns = await master.deployed();
        let newMatsIns = await newMats.deployed();
        let arinaIns = await arina.deployed();
        const city = 1;
        boxClass = 4;

        for (i = 33; i < 67; i++) {
            await masterIns.fly(city, i, {
                value: 10 ** 19,
                from: accounts[0],
            });
            await arinaIns.approveAndCall(
                master.address,
                2000 * 10 ** 8,
                "0x1"
            );
        }
        let reward = await masterIns.all_reward(boxClass, city);
        //console.log(reward);
        let events = reward.receipt.logs;
        console.log(events);
        console.log("box=");
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1000,
                1001,
                1002,
                1003,
                1004,
            ])
        );
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1100,
                1101,
                1102,
                1103,
                1104,
            ])
        );
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1200,
                1201,
                1202,
                1203,
                1204,
            ])
        );
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1300,
                1301,
                1302,
                1303,
                1304,
            ])
        );
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1400,
                1401,
                1402,
                1403,
                1404,
            ])
        );
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1500,
                1501,
                1502,
                1503,
                1504,
            ])
        );
    });

    it("f/all_reward", async () => {
        console.log("\nf/all_reward 5...");
        let masterIns = await master.deployed();
        let newMatsIns = await newMats.deployed();
        let arinaIns = await arina.deployed();
        const city = 1;
        boxClass = 5;

        for (i = 67; i < 100; i++) {
            await masterIns.fly(city, i, {
                value: 10 ** 19,
                from: accounts[0],
            });
            await arinaIns.approveAndCall(
                master.address,
                2000 * 10 ** 8,
                "0x1"
            );
        }
        let reward = await masterIns.all_reward(boxClass, city);
        //console.log(reward);
        let events = reward.receipt.logs;
        console.log(events);
        console.log("box=");
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1000,
                1001,
                1002,
                1003,
                1004,
            ])
        );
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1100,
                1101,
                1102,
                1103,
                1104,
            ])
        );
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1200,
                1201,
                1202,
                1203,
                1204,
            ])
        );
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1300,
                1301,
                1302,
                1303,
                1304,
            ])
        );
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1400,
                1401,
                1402,
                1403,
                1404,
            ])
        );
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1500,
                1501,
                1502,
                1503,
                1504,
            ])
        );
    });

    // it('f/_treasure_level', async () => {
    //     console.log("\nf/_treasure_level...");
    //     let slave1Ins = await slave1.deployed();

    //     console.log("\nstar = 1")
    //     star = 1;
    //     level1 = 0;
    //     level2 = 0;
    //     level3 = 0;
    //     level4 = 0;
    //     level5 = 0;
    //     for(i=1; i<=1000; i++){
    //         let reward = await slave1Ins._treasure_level.call(star, i);
    //         if (reward == 0){
    //             level1 += 1;
    //         }else if(reward == 1){
    //             level2 += 1;
    //         }else if(reward == 2){
    //             level3 += 1;
    //         }else if(reward == 3){
    //             level4 += 1;
    //         }else if(reward == 4){
    //             level5 += 1;
    //         }
    //     }
    //     console.log("level1: " + level1);
    //     console.log("level2: " + level2);
    //     console.log("level3: " + level3);
    //     console.log("level4: " + level4);
    //     console.log("level5: " + level5);

    //     console.log("\nstar = 2")
    //     star = 2;
    //     level1 = 0;
    //     level2 = 0;
    //     level3 = 0;
    //     level4 = 0;
    //     level5 = 0;
    //     for(i=1; i<=1000; i++){
    //         let reward = await slave1Ins._treasure_level.call(star, i);
    //         if (reward == 0){
    //             level1 += 1;
    //         }else if(reward == 1){
    //             level2 += 1;
    //         }else if(reward == 2){
    //             level3 += 1;
    //         }else if(reward == 3){
    //             level4 += 1;
    //         }else if(reward == 4){
    //             level5 += 1;
    //         }
    //     }
    //     console.log("level1: " + level1);
    //     console.log("level2: " + level2);
    //     console.log("level3: " + level3);
    //     console.log("level4: " + level4);
    //     console.log("level5: " + level5);

    //     console.log("\nstar = 4")
    //     star = 3;
    //     level1 = 0;
    //     level2 = 0;
    //     level3 = 0;
    //     level4 = 0;
    //     level5 = 0;
    //     for(i=1; i<=1000; i++){
    //         let reward = await slave1Ins._treasure_level.call(star, i);
    //         if (reward == 0){
    //             level1 += 1;
    //         }else if(reward == 1){
    //             level2 += 1;
    //         }else if(reward == 2){
    //             level3 += 1;
    //         }else if(reward == 3){
    //             level4 += 1;
    //         }else if(reward == 4){
    //             level5 += 1;
    //         }
    //     }
    //     console.log("level1: " + level1);
    //     console.log("level2: " + level2);
    //     console.log("level3: " + level3);
    //     console.log("level4: " + level4);
    //     console.log("level5: " + level5);

    //     console.log("\nstar = 4")
    //     star = 4;
    //     level1 = 0;
    //     level2 = 0;
    //     level3 = 0;
    //     level4 = 0;
    //     level5 = 0;
    //     for(i=1; i<=1000; i++){
    //         let reward = await slave1Ins._treasure_level.call(star, i);
    //         if (reward == 0){
    //             level1 += 1;
    //         }else if(reward == 1){
    //             level2 += 1;
    //         }else if(reward == 2){
    //             level3 += 1;
    //         }else if(reward == 3){
    //             level4 += 1;
    //         }else if(reward == 4){
    //             level5 += 1;
    //         }
    //     }
    //     console.log("level1: " + level1);
    //         console.log("level2: " + level2);
    //         console.log("level3: " + level3);
    //         console.log("level4: " + level4);
    //         console.log("level5: " + level5);

    //     console.log("\nstar = 5")
    //     star = 5;
    //     level1 = 0;
    //     level2 = 0;
    //     level3 = 0;
    //     level4 = 0;
    //     level5 = 0;
    //     for(i=1; i<=1000; i++){
    //         let reward = await slave1Ins._treasure_level.call(star, i);
    //         if (reward == 0){
    //             level1 += 1;
    //         }else if(reward == 1){
    //             level2 += 1;
    //         }else if(reward == 2){
    //             level3 += 1;
    //         }else if(reward == 3){
    //             level4 += 1;
    //         }else if(reward == 4){
    //             level5 += 1;
    //         }
    //     }
    //     console.log("level1: " + level1);
    //         console.log("level2: " + level2);
    //         console.log("level3: " + level3);
    //         console.log("level4: " + level4);
    //         console.log("level5: " + level5);
    // });
});
