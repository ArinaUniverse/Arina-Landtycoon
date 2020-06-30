const newMats = artifacts.require("newMaterials");
const personCall = artifacts.require("personCall");
const master = artifacts.require("landTycoonMaster");
const arina = artifacts.require("arina");
const trade = artifacts.require("trade");
const landsMix = artifacts.require("landsMix");
const slave1 = artifacts.require("slave");
const slave2 = artifacts.require("slave2");
const slave3 = artifacts.require("slave3");
const slave4 = artifacts.require("slave4");
const slave5 = artifacts.require("slave5");
const slave6 = artifacts.require("slave6");
const slave7 = artifacts.require("slave7");
const slave8 = artifacts.require("slave8");
const slave9 = artifacts.require("slave9");
const slave10 = artifacts.require("slave10");
const slave11 = artifacts.require("slave11");
const slave12 = artifacts.require("slave12");
const slave13 = artifacts.require("slave13");
const slave14 = artifacts.require("slave14");
const slave15 = artifacts.require("slave15");
const slave16 = artifacts.require("slave16");

const operator = artifacts.require("operator");
const yakuka = artifacts.require("yakuka");
//const OMD = artifacts.require("setOperator");

module.exports = async function (deployer) {
    console.log("\n<<<<<<<<<<<<<<<<3_address_setting>>>>>>>>>>>>>>");
    // let operatorIns = await operator.deployed();
    // let newMatsIns = await newMats.deployed();

    let newMatsIns = await newMats.at(
        "0x77b9a110073CD5C4e5f5ea2240a29EE34e49baFb"
    );
    let operatorIns = await operator.at(
        "0x98F81F14d0E8b07ee772b59354EcBa4C585dcF87"
    );

    let personCallIns = await personCall.deployed();
    let arinaIns = await arina.deployed();
    let tradeIns = await trade.deployed();
    let landsMixIns = await landsMix.deployed();
    let yakukaIns = await yakuka.deployed();
    let slave1Ins = await slave1.deployed();
    let slave2Ins = await slave2.deployed();
    let slave3Ins = await slave3.deployed();
    let slave4Ins = await slave4.deployed();
    let slave5Ins = await slave5.deployed();
    let slave6Ins = await slave6.deployed();
    let slave7Ins = await slave7.deployed();
    let slave8Ins = await slave8.deployed();
    let slave9Ins = await slave9.deployed();
    let slave10Ins = await slave10.deployed();
    let slave11Ins = await slave11.deployed();
    let slave12Ins = await slave12.deployed();
    let slave13Ins = await slave13.deployed();
    let slave14Ins = await slave14.deployed();
    let slave15Ins = await slave15.deployed();
    let slave16Ins = await slave16.deployed();

    console.log("\nsetOperatorAddr...");
    try {
        //await newMatssIns.setOperatorAddr(operatorIns.address);
        await personCallIns.setOperatorAddr(operatorIns.address);
        await arinaIns.setOperatorAddr(operatorIns.address);
        await tradeIns.setOperatorAddr(operatorIns.address);
        await landsMixIns.setOperatorAddr(operatorIns.address);
        await yakukaIns.setOperatorAddr(operatorIns.address);
        await slave1Ins.setOperatorAddr(operatorIns.address);
        await slave2Ins.setOperatorAddr(operatorIns.address);
        await sleep(1000);
        await slave3Ins.setOperatorAddr(operatorIns.address);
        await slave4Ins.setOperatorAddr(operatorIns.address);
        await slave5Ins.setOperatorAddr(operatorIns.address);
        await slave6Ins.setOperatorAddr(operatorIns.address);
        await slave7Ins.setOperatorAddr(operatorIns.address);
        await slave8Ins.setOperatorAddr(operatorIns.address);
        await sleep(1000);
        await slave9Ins.setOperatorAddr(operatorIns.address);
        await slave10Ins.setOperatorAddr(operatorIns.address);
        await slave11Ins.setOperatorAddr(operatorIns.address);
        await slave12Ins.setOperatorAddr(operatorIns.address);
        await slave13Ins.setOperatorAddr(operatorIns.address);
        await slave14Ins.setOperatorAddr(operatorIns.address);
        await slave15Ins.setOperatorAddr(operatorIns.address);
        await slave16Ins.setOperatorAddr(operatorIns.address);
        //await OMDIns.setOperatorAddr(operatorIns.address);
    } catch (error) {
        console.error(new Error());
    }

    console.log("\noperator setAddress...");
    try {
        //
        //await operatorIns.setAddress("newMats", newMats.address);
        //
        await operatorIns.setAddress("personCall", personCall.address);
        await operatorIns.setAddress("master", master.address);
        await operatorIns.setAddress("arina", arina.address);
        await operatorIns.setAddress("trade", trade.address);
        await operatorIns.setAddress("landsMix", landsMix.address);
        await operatorIns.setAddress("yakuka", yakuka.address);
        await operatorIns.setAddress("slave1", slave1.address);
        await operatorIns.setAddress("slave2", slave2.address);
        await sleep(1000);
        await operatorIns.setAddress("slave3", slave3.address);
        await operatorIns.setAddress("slave4", slave4.address);
        await operatorIns.setAddress("slave5", slave5.address);
        await operatorIns.setAddress("slave6", slave6.address);
        await operatorIns.setAddress("slave7", slave7.address);
        await operatorIns.setAddress("slave8", slave8.address);
        await operatorIns.setAddress("slave9", slave9.address);
        await sleep(1000);
        await operatorIns.setAddress("slave10", slave10.address);
        await operatorIns.setAddress("slave11", slave11.address);
        await operatorIns.setAddress("slave12", slave12.address);
        await operatorIns.setAddress("slave13", slave13.address);
        await operatorIns.setAddress("slave14", slave14.address);
        await operatorIns.setAddress("slave15", slave15.address);
        await operatorIns.setAddress("slave16", slave16.address);
    } catch (error) {
        console.error(new Error());
    }

    console.log("\nmaster push_slave_address...");
    let masterIns = await master.deployed();
    await sleep(1000);
    try {
        await masterIns.set_arina_address(arina.address);
        await masterIns.set_trade_address(trade.address);
        await masterIns.set_landsMix_address(landsMix.address);
        await sleep(1000);
        await masterIns.push_slave_address([
            slave1.address,
            slave2.address,
            slave3.address,
            slave4.address,
            slave5.address,
            slave6.address,
            slave7.address,
            slave8.address,
            slave9.address,
            slave10.address,
            slave11.address,
            slave12.address,
            slave13.address,
            slave14.address,
            slave15.address,
            slave16.address,
        ]);
    } catch (error) {
        console.error(new Error());
    }

    // console.log("\n material set_available...");
    // try {
    //     await MatsIns.set_available(slave1.address);
    //     await MatsIns.set_available(slave2.address);
    //     await MatsIns.set_available(slave3.address);
    //     await MatsIns.set_available(slave4.address);
    //     await MatsIns.set_available(slave5.address);
    //     await MatsIns.set_available(slave6.address);
    //     await MatsIns.set_available(slave7.address);
    //     await MatsIns.set_available(slave8.address);
    //     await MatsIns.set_available(slave9.address);
    //     await MatsIns.set_available(slave10.address);
    //     await MatsIns.set_available(slave11.address);
    //     await MatsIns.set_available(slave12.address);
    //     await MatsIns.set_available(slave13.address);
    //     await MatsIns.set_available(slave14.address);
    //     await MatsIns.set_available(slave15.address);
    //     await MatsIns.set_available(slave16.address);
    // } catch (error) {
    //     console.error(new Error());
    // }

    console.log("\nmaster address=");
    console.log(master.address);
    console.log("\nnewMats address=");
    console.log(newMatsIns.address);
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

async function sleep(ms = 0) {
    return new Promise((r) => setTimeout(r, ms));
}
