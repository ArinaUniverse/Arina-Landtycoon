const arina = artifacts.require("arina");
const trade = artifacts.require("trade");
const master = artifacts.require("landTycoonMaster");
const newMats = artifacts.require("newMaterials");
const yakuka = artifacts.require("yakuka");
const personCall = artifacts.require("personCall");
const landsMix = artifacts.require("landsMix");
const slave1 = artifacts.require("slave");
const slave16 = artifacts.require("slave16");

module.exports = async function (deployer) {
    console.log("\n<<<<<<<<<<<<<<<<7_trade_setting>>>>>>>>>>>>>>");
    const masterIns = await master.deployed();
    const tradeIns = await trade.deployed();
    const arinaIns = await arina.deployed();
    //const newMatsIns = await newMats.deployed();
    const value = 500000 * 10 ** 8;

    console.log("\nset trade value...");
    ///市場資金
    try {
        await arinaIns.approveAndCall(trade.address, value, "0x301");
        await arinaIns.approveAndCall(trade.address, value, "0x302");
        await arinaIns.approveAndCall(trade.address, value, "0x303");
        await arinaIns.approveAndCall(trade.address, value, "0x304");
        await arinaIns.approveAndCall(trade.address, value, "0x305");
        await arinaIns.approveAndCall(trade.address, value, "0x306");
        await sleep(1000);
        await arinaIns.approveAndCall(trade.address, value, "0x307");
        await arinaIns.approveAndCall(trade.address, value, "0x308");
        await arinaIns.approveAndCall(trade.address, value, "0x309");
        await arinaIns.approveAndCall(trade.address, value, "0x30a");
        await arinaIns.approveAndCall(trade.address, value, "0x30b");
        await arinaIns.approveAndCall(trade.address, value, "0x30c");
        await sleep(1000);
        await arinaIns.approveAndCall(trade.address, value, "0x30d");
        await arinaIns.approveAndCall(trade.address, value, "0x30e");
        await arinaIns.approveAndCall(trade.address, value, "0x30f");
        await arinaIns.approveAndCall(trade.address, value, "0x310");
    } catch (error) {
        console.error(new Error());
    }
    await sleep(1000);
    for (i = 1; i <= 16; i++) {
        if (i % 6 == 0) {
            await sleep(1000);
        }
        console.log(
            "inquire_pool " + i + " : " + (await tradeIns.inquire_pool.call(i))
        );
    }

    //市場BOX
    console.log("\nmayor_all_reward...");
    try {
        for (i = 1; i <= 16; i++) {
            if (i % 4 == 0) {
                await sleep(1000);
            }
            await masterIns.mayor_all_reward(i);
        }
    } catch (error) {
        console.error(new Error());
    }
    console.log("\nmarket Box: ");

    try {
        console.log("\ncity1: ");
        let city = 1;
        console.log(
            await tradeIns.inquire_box_amount_Batch.call(city, [
                1000,
                1001,
                1002,
                1003,
                1004,
            ])
        );
        console.log(
            await tradeIns.inquire_box_amount_Batch.call(city, [
                1100,
                1101,
                1102,
                1103,
                1104,
            ])
        );
        console.log(
            await tradeIns.inquire_box_amount_Batch.call(city, [
                1200,
                1201,
                1202,
                1203,
                1204,
            ])
        );
        console.log(
            await tradeIns.inquire_box_amount_Batch.call(city, [
                1300,
                1301,
                1302,
                1303,
                1304,
            ])
        );
        console.log(
            await tradeIns.inquire_box_amount_Batch.call(city, [
                1400,
                1401,
                1402,
                1403,
                1404,
            ])
        );
        console.log(
            await tradeIns.inquire_box_amount_Batch.call(city, [
                1500,
                1501,
                1502,
                1503,
                1504,
            ])
        );

        console.log("\ncity2: ");
        city = 2;
        console.log(
            await tradeIns.inquire_box_amount_Batch.call(city, [
                1000,
                1001,
                1002,
                1003,
                1004,
            ])
        );
        console.log(
            await tradeIns.inquire_box_amount_Batch.call(city, [
                1100,
                1101,
                1102,
                1103,
                1104,
            ])
        );
        console.log(
            await tradeIns.inquire_box_amount_Batch.call(city, [
                1200,
                1201,
                1202,
                1203,
                1204,
            ])
        );
        console.log(
            await tradeIns.inquire_box_amount_Batch.call(city, [
                1300,
                1301,
                1302,
                1303,
                1304,
            ])
        );
        console.log(
            await tradeIns.inquire_box_amount_Batch.call(city, [
                1400,
                1401,
                1402,
                1403,
                1404,
            ])
        );
        console.log(
            await tradeIns.inquire_box_amount_Batch.call(city, [
                1500,
                1501,
                1502,
                1503,
                1504,
            ])
        );
    } catch (error) {
        console.error(new Error());
    }
    try {
        ///transfer arina to yakuka contract
        let manager = await arinaIns.manager.call();
        let balance = await arinaIns.balanceOf.call(manager);
        //await arinaIns.transfer(yakuka.address, balance);
        await arinaIns.transfer(yakuka.address, balance / 2);
        console.log(
            "\nyakuka arina: " + (await arinaIns.balanceOf.call(yakuka.address))
        );
    } catch (error) {
        console.error(new Error());
    }
    async function sleep(ms = 0) {
        return new Promise((r) => setTimeout(r, ms));
    }

    console.log("\nmaster address=");
    console.log(master.address);
    // console.log("\nnewMats address=");
    // console.log(newMats.address);
    console.log("\npersonCall address=");
    console.log(personCall.address);
    console.log("\narina address=");
    console.log(arina.address);
    console.log("\ntrade address=");
    console.log(trade.address);
    console.log("\nlandsMix address=");
    console.log(landsMix.address);
    console.log("\nyakuka address=");
    console.log(yakuka.address);
    console.log("\nslave address=");
    console.log("1: " + slave1.address);
    console.log("16: " + slave16.address);
};
