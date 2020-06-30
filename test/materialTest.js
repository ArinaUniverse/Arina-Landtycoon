const master = artifacts.require("landTycoonMaster");
const slave1 = artifacts.require("slave");
const slave2 = artifacts.require("slave2");
const arina = artifacts.require("arina");
const trade = artifacts.require("trade");
const landsMix = artifacts.require("landsMix");
const newMats = artifacts.require("newMaterials");
const personCall = artifacts.require("personCall");

contract("material TEST", (accounts) => {
    it("push_dungeons", async () => {
        console.log("\npush_dungeons...");
        let newMatsIns = await newMats.deployed();
        await newMatsIns.set_available(accounts[0]);
    });

    it("f/mintable", async () => {
        console.log("\nf/mintable...");
        let newMatsIns = await newMats.deployed();
        await newMatsIns.mintable(1000, accounts[0], 1000);
        await newMatsIns.mintable(1004, accounts[0], 1000);
        await newMatsIns.mintable(1100, accounts[0], 1000);
        await newMatsIns.mintable(1104, accounts[0], 1000);
        await newMatsIns.mintable(1201, accounts[0], 1000);
        await newMatsIns.mintable(1302, accounts[0], 1000);
        await newMatsIns.mintable(1403, accounts[0], 1000);
        console.log("reward materials =");
        let reward1000 = await newMatsIns.balanceOf.call(accounts[0], 1000);
        let reward1004 = await newMatsIns.balanceOf.call(accounts[0], 1004);
        let reward1100 = await newMatsIns.balanceOf.call(accounts[0], 1100);
        let reward1104 = await newMatsIns.balanceOf.call(accounts[0], 1104);
        let reward1201 = await newMatsIns.balanceOf.call(accounts[0], 1201);
        let reward1302 = await newMatsIns.balanceOf.call(accounts[0], 1302);
        let reward1403 = await newMatsIns.balanceOf.call(accounts[0], 1403);
        console.log("1000: " + reward1000.toNumber());
        console.log("1004: " + reward1004.toNumber());
        console.log("1100: " + reward1100.toNumber());
        console.log("1104: " + reward1104.toNumber());
        console.log("1201: " + reward1201.toNumber());
        console.log("1302: " + reward1302.toNumber());
        console.log("1403: " + reward1302.toNumber());
    });

    //////1104
    it("f/open_box_1104 *10", async () => {
        console.log("\nf/open_box_1104*10...");
        let newMatsIns = await newMats.deployed();

        for (i = 0; i < 10; i++) {
            let open_box = await newMatsIns.openBox(1104);
        }

        let reward1104 = await newMatsIns.balanceOf.call(accounts[0], 1104);
        console.log("\nBox 1104: " + reward1104.toNumber());

        console.log("\nmeterial 2100 ~ 2119:");
        let mt4 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2100,
            2101,
            2102,
            2103,
            2104,
        ]);
        let mt9 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2105,
            2106,
            2107,
            2108,
            2109,
        ]);
        let mt14 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2110,
            2111,
            2112,
            2113,
            2114,
        ]);
        let mt19 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2115,
            2116,
            2117,
            2118,
            2119,
        ]);

        console.log(mt4.map((n) => n.toNumber()));
        console.log(mt9.map((n) => n.toNumber()));
        console.log(mt14.map((n) => n.toNumber()));
        console.log(mt19.map((n) => n.toNumber()));

        // let events = open_box.receipt.logs;
        // console.log("events: ")
        // console.log(events);
    });

    it("f/open_many_box1 1000*1*10", async () => {
        console.log("\nf/open_many_box1 1000*1*10...");
        let newMatsIns = await newMats.deployed();
        let open_many_box;
        for (i = 0; i < 10; i++) {
            open_many_box = await newMatsIns.open_many_box(1000, 1);
        }

        //console.log(open_many_box);
        let events = open_many_box.receipt.logs;
        console.log("\nevent[0]:");
        console.log("address: " + events[0].args[0]);
        console.log("material: " + events[0].args[1].toNumber());
        console.log("count: " + events[0].args[2].toNumber());

        console.log("\nbox:");
        let reward1000 = await newMatsIns.balanceOf.call(accounts[0], 1000);
        console.log("material 1000: " + reward1000.toNumber());

        console.log("\nmeterials 2000 ~ 2028:");
        let mt4 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2000,
            2001,
            2002,
            2003,
            2004,
        ]);
        let mt9 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2005,
            2006,
            2007,
            2008,
            2009,
        ]);
        let mt14 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2010,
            2011,
            2012,
            2013,
            2014,
        ]);
        let mt19 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2015,
            2016,
            2017,
            2018,
            2019,
        ]);
        let mt24 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2020,
            2021,
            2022,
            2023,
            2024,
        ]);
        let mt29 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2025,
            2026,
            2027,
            2028,
        ]);
        console.log(mt4.map((n) => n.toNumber()));
        console.log(mt9.map((n) => n.toNumber()));
        console.log(mt14.map((n) => n.toNumber()));
        console.log(mt19.map((n) => n.toNumber()));
        console.log(mt24.map((n) => n.toNumber()));
        console.log(mt29.map((n) => n.toNumber()));
    });

    it("f/open_many_box 1000*5*20", async () => {
        console.log("\nf/open_many_box 1000*5*20...");
        let newMatsIns = await newMats.deployed();
        let open_many_box;
        for (i = 0; i < 20; i++) {
            open_many_box = await newMatsIns.open_many_box(1000, 5);
        }

        //console.log(open_many_box);
        let events = open_many_box.receipt.logs;
        console.log("\nevents[0]:");
        console.log("address: " + events[0].args[0]);
        console.log("material: " + events[0].args[1].toNumber());
        console.log("count: " + events[0].args[2].toNumber());

        console.log("\nbox=");
        let reward1000 = await newMatsIns.balanceOf.call(accounts[0], 1000);
        console.log("1000: " + reward1000.toNumber());

        console.log("\nmeterial=");
        let mt4 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2000,
            2001,
            2002,
            2003,
            2004,
        ]);
        let mt9 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2005,
            2006,
            2007,
            2008,
            2009,
        ]);
        let mt14 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2010,
            2011,
            2012,
            2013,
            2014,
        ]);
        let mt19 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2015,
            2016,
            2017,
            2018,
            2019,
        ]);
        let mt24 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2020,
            2021,
            2022,
            2023,
            2024,
        ]);
        let mt29 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2025,
            2026,
            2027,
            2028,
        ]);
        console.log(mt4.map((n) => n.toNumber()));
        console.log(mt9.map((n) => n.toNumber()));
        console.log(mt14.map((n) => n.toNumber()));
        console.log(mt19.map((n) => n.toNumber()));
        console.log(mt24.map((n) => n.toNumber()));
        console.log(mt29.map((n) => n.toNumber()));
    });

    it("f/open_many_box 1201*10*100", async () => {
        console.log("\nf/open_many_box 1201*10*100...");
        let newMatsIns = await newMats.deployed();
        let open_many_box;
        for (i = 0; i < 100; i++) {
            open_many_box = await newMatsIns.open_many_box(1201, 10);
        }

        //console.log(open_many_box);
        let events = open_many_box.receipt.logs;
        console.log("open_many_box=");
        console.log("address:");
        console.log(events[0].args[0]);
        console.log("material:");
        console.log(events[0].args[1].toNumber());
        console.log("count:");
        console.log(events[0].args[2].toNumber());

        console.log("\nbox=");
        let reward1201 = await newMatsIns.balanceOf.call(accounts[0], 1201);
        console.log("1201: " + reward1201.toNumber());

        console.log("\nmeterial=");
        let mt4 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2200,
            2201,
            2202,
            2203,
            2204,
        ]);
        let mt9 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2205,
            2206,
            2207,
            2208,
            2209,
        ]);
        let mt14 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2210,
            2211,
            2212,
            2213,
            2214,
        ]);
        let mt19 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2215,
            2216,
            2217,
            2218,
            2219,
        ]);
        console.log(mt4.map((n) => n.toNumber()));
        console.log(mt9.map((n) => n.toNumber()));
        console.log(mt14.map((n) => n.toNumber()));
        console.log(mt19.map((n) => n.toNumber()));
    });

    it("f/open_many_box 1302*10*100", async () => {
        console.log("\nf/open_many_box 1302*10*100...");
        let newMatsIns = await newMats.deployed();
        let open_many_box;
        for (i = 0; i < 100; i++) {
            open_many_box = await newMatsIns.open_many_box(1302, 10);
        }

        //console.log(open_many_box);
        let events = open_many_box.receipt.logs;
        console.log("events[0]:");
        console.log("address: " + events[0].args[0]);
        console.log("material: " + events[0].args[1].toNumber());
        console.log("count: " + events[0].args[2].toNumber());

        let reward1302 = await newMatsIns.balanceOf.call(accounts[0], 1302);
        console.log("\nbox1302: " + reward1302.toNumber());

        console.log("\nmeterial2300 ~ 2307:");
        let mt4 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2300,
            2301,
            2302,
            2303,
            2304,
        ]);
        let mt9 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2305,
            2306,
            2307,
        ]);
        console.log(mt4.map((n) => n.toNumber()));
        console.log(mt9.map((n) => n.toNumber()));
    });

    it("f/open_many_box 1403*10*100", async () => {
        console.log("\nf/open_many_box 1402*10*100...");
        let newMatsIns = await newMats.deployed();
        let open_many_box;
        for (i = 0; i < 100; i++) {
            open_many_box = await newMatsIns.open_many_box(1403, 10);
        }

        //console.log(open_many_box);
        let events = open_many_box.receipt.logs;
        console.log("events[0]:");
        console.log("address: " + events[0].args[0]);
        console.log("material: " + events[0].args[1].toNumber());
        console.log("count: " + events[0].args[2].toNumber());

        let reward1302 = await newMatsIns.balanceOf.call(accounts[0], 1403);
        console.log("\nbox1402: " + reward1302.toNumber());

        console.log("\nmeterial2400 ~ 2419:");
        let mt4 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2200,
            2201,
            2202,
            2203,
            2204,
        ]);
        let mt9 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2205,
            2206,
            2207,
            2208,
            2209,
        ]);
        let mt14 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2210,
            2211,
            2212,
            2213,
            2214,
        ]);
        let mt19 = await newMatsIns.balanceOfBatch2.call(accounts[0], [
            2215,
            2216,
            2217,
            2218,
            2219,
        ]);
        console.log(mt4.map((n) => n.toNumber()));
        console.log(mt9.map((n) => n.toNumber()));
        console.log(mt14.map((n) => n.toNumber()));
        console.log(mt19.map((n) => n.toNumber()));
    });
});
