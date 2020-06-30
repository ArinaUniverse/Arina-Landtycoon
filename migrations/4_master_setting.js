const master = artifacts.require("landTycoonMaster");
module.exports = async function (deployer) {
    console.log("\n<<<<<<<<<<<<<<<<4_master_setting>>>>>>>>>>>>>>");
    let masterIns = await master.deployed();
    console.log("\nset_building_type...");
    masterIns.set_building_type(0, "null");
    masterIns.set_building_type(1, "Farm");
    masterIns.set_building_type(2, "Mine");
    masterIns.set_building_type(3, "Workshop");
    masterIns.set_building_type(4, "Bazaar");
    masterIns.set_building_type(5, "Arena");
    masterIns.set_building_type(6, "Adventurer's Guild");
    masterIns.set_building_type(7, "Dungeon");
    masterIns.set_building_type(8, "Lucky Fountain");
    masterIns.set_building_type(9, "Stable");
    masterIns.set_building_type(10, "Mega Tower");
    await sleep(1000);
    masterIns.set_building_type(11, "Fuel station");
    masterIns.set_building_type(12, "Research Lab");
    masterIns.set_building_type(13, "Racecourse");
    masterIns.set_building_type(14, "Airport");
    masterIns.set_building_type(15, "Bank");
    masterIns.set_building_type(16, "Department store");
    masterIns.set_building_type(17, "Station");
    masterIns.set_building_type(18, "Hotel");
    masterIns.set_building_type(19, "Shop");
    masterIns.set_building_type(20, "Weapon factory");

    console.log("\nset_type_price...");
    masterIns.set_type_price(0, 0);
    masterIns.set_type_price(1, 2000 * 10 ** 8);
    masterIns.set_type_price(2, 2000 * 10 ** 8);
    masterIns.set_type_price(3, 2000 * 10 ** 8);
    masterIns.set_type_price(4, 2000 * 10 ** 8);
    masterIns.set_type_price(5, 5000 * 10 ** 8);
    await sleep(1000);
    masterIns.set_type_price(6, 5000 * 10 ** 8);
    masterIns.set_type_price(7, 5000 * 10 ** 8);
    masterIns.set_type_price(8, 5000 * 10 ** 8);
    masterIns.set_type_price(9, 5000 * 10 ** 8);
    masterIns.set_type_price(10, 5000 * 10 ** 8);

    masterIns.set_type_price(11, 2000 * 10 ** 8);
    masterIns.set_type_price(12, 10000 * 10 ** 8);
    masterIns.set_type_price(13, 5000 * 10 ** 8);
    masterIns.set_type_price(14, 20000 * 10 ** 8);
    masterIns.set_type_price(15, 10000 * 10 ** 8);
    await sleep(1000);
    masterIns.set_type_price(16, 5000 * 10 ** 8);
    masterIns.set_type_price(17, 5000 * 10 ** 8);
    masterIns.set_type_price(18, 5000 * 10 ** 8);
    masterIns.set_type_price(19, 5000 * 10 ** 8);
    masterIns.set_type_price(20, 5000 * 10 ** 8);
};

async function sleep(ms = 0) {
    return new Promise((r) => setTimeout(r, ms));
}
