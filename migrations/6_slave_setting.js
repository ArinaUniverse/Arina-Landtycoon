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

module.exports = async function (deployer) {
    console.log("\n<<<<<<<<<<<<<<<<6_slave_setting>>>>>>>>>>>>>>");
    try {
        console.log("\nslave setting...");
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

        await slave1Ins.set_city_number(1);
        await slave2Ins.set_city_number(2);
        await slave3Ins.set_city_number(3);
        await slave4Ins.set_city_number(4);
        await slave5Ins.set_city_number(5);
        await slave6Ins.set_city_number(6);
        await sleep(1000);
        await slave7Ins.set_city_number(7);
        await slave8Ins.set_city_number(8);
        await slave9Ins.set_city_number(9);
        await slave10Ins.set_city_number(10);
        await slave11Ins.set_city_number(11);
        await slave12Ins.set_city_number(12);
        await sleep(1000);
        await slave13Ins.set_city_number(13);
        await slave14Ins.set_city_number(14);
        await slave15Ins.set_city_number(15);
        await slave16Ins.set_city_number(16);

        city_number = await slave2Ins.city_number.call();
        console.log("city2 city number = " + city_number);
    } catch (error) {
        console.error(new Error());
    }
};

async function sleep(ms = 0) {
    return new Promise((r) => setTimeout(r, ms));
}
