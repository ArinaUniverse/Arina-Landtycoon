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
        console.log("\nf/register...");
        let masterIns = await master.deployed();
        let name = "testUser";
        await masterIns.register("name0", { from: accounts[0] });
        await masterIns.register("name1", { from: accounts[1] });
        await masterIns.register("name2", { from: accounts[2] });
        await masterIns.register("name3", { from: accounts[3] });
    });

    it("f/rollDice", async () => {
        console.log("\nf/rollDice...");
        let masterIns = await master.deployed();
        let arinaIns = await arina.deployed();
        let slave1Ins = await slave1.deployed();
        let i = 0;
        let rollDice = await masterIns.rollDice({ from: accounts[0] });
        // await masterIns.rollDice({from: accounts[1]});
        // await masterIns.rollDice({from: accounts[2]});
        let events = rollDice.receipt.logs;
        //console.log(events);
        console.log("local=");
        console.log(
            events[0].args[1].toNumber() + ", " + events[0].args[2].toNumber()
        );
    });

    it("f/inquire_land_info", async () => {
        console.log("\nf/inquire_land_info...");
        let masterIns = await master.deployed();
        let city = 1;
        let building8 = [];
        let building1 = [];
        let building2 = [];
        let building3 = [];
        let building4 = [];
        let building5 = [];
        let building6 = [];
        let building7 = [];
        let building9 = [];
        let building10 = [];
        let building11 = [];
        let building12 = [];
        let building13 = [];
        let building14 = [];
        let building15 = [];

        console.log("inquire_location 1: ");
        for (let domain = 1; domain < 100; domain++) {
            let inquire_land_info = await masterIns.inquire_land_info.call(
                city,
                domain
            );
            if (inquire_land_info[7] > 7 && inquire_land_info[8] > 4) {
                building8.push(domain);
            } else if (inquire_land_info[0] > 6 && inquire_land_info[8] > 4) {
                building1.push(domain);
            } else if (inquire_land_info[1] > 6) {
                building2.push(domain);
            } else if (inquire_land_info[4] > 6) {
                building3.push(domain);
            } else if (inquire_land_info[6] > 7) {
                building4.push(domain);
                building6.push(domain);
            } else if (inquire_land_info[7] < 3) {
                building5.push(domain);
                building7.push(domain);
            } else if (inquire_land_info[0] > 4 && inquire_land_info[8] > 4) {
                building9.push(domain);
            } else if (inquire_land_info[2] > 6 && inquire_land_info[6] > 3) {
                building10.push(domain);
            } else if (inquire_land_info[3] > 6 && inquire_land_info[2] > 3) {
                building11.push(domain);
            }
        }
        console.log("building1:");
        console.log(building1[0]);
        console.log("building2:");
        console.log(building2[0]);
        console.log("building3:");
        console.log(building3[0]);
        console.log("building4:");
        console.log(building4[0]);
        console.log("building5:");
        console.log(building5[0]);
        console.log("building6:");
        console.log(building6[0]);
        console.log("building7:");
        console.log(building7[0]);

        console.log("building8:");
        console.log(building8[0]);
        console.log("building9:");
        console.log(building9[0]);
        console.log("building10:");
        console.log(building10[0]);
    });

    it("f/receiveApproval + _build 9", async () => {
        console.log("\n_build 9...");
        let masterIns = await master.deployed();
        let arinaIns = await arina.deployed();
        const city = 1;
        let domain = 7;
        let price = 5000;
        let building = "0x309";
        let player = accounts[0];

        await masterIns.fly(city, domain, { value: 10 ** 19, from: player });
        //buy
        await arinaIns.approveAndCall(master.address, 2000 * 10 ** 8, "0x1", {
            from: player,
        });
        await masterIns.rollDice({ from: player });
        await masterIns.fly(city, domain, { value: 10 ** 19, from: player });
        console.log("inquire_land_info: ");
        console.log(await masterIns.inquire_land_info.call(city, domain));
        let domain_level_star = await masterIns.inquire_domain_level_star.call(
            city,
            domain
        );
        console.log(domain_level_star);

        //build
        await arinaIns.approveAndCall(
            master.address,
            price * 10 ** 8,
            building,
            { from: player }
        );
        domain_level_star = await masterIns.inquire_domain_level_star.call(
            city,
            domain
        );
        console.log(domain_level_star);
        console.log(
            "tot_building: " +
                (await masterIns.inquire_tot_building.call(city, domain))
        );
    });
});
