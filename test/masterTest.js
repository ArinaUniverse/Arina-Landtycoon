const master = artifacts.require("landTycoonMaster");
const slave1 = artifacts.require("slave");
const slave2 = artifacts.require("slave2");
const arina = artifacts.require("arina");
const trade = artifacts.require("trade");
const landsMix = artifacts.require("landsMix");
const newMats = artifacts.require("newMaterials");
const personCall = artifacts.require("personCall");

contract("master TEST", (accounts) => {
    it("set_building_type", async () => {
        console.log("\nset_building_type...");
        let masterIns = await master.deployed();
        let building_type0 = await masterIns.building_type.call(0);
        let building_type20 = await masterIns.building_type.call(20);
        assert.equal(building_type0, "null", "building_type0 error");
        assert.equal(
            building_type20,
            "Weapon factory",
            "building_type20 error!!!"
        );
        console.log("building_type20=");
        console.log(building_type20);
    });

    it("set_type_price", async () => {
        console.log("\nset_type_price...");
        let masterIns = await master.deployed();
        let building_price0 = await masterIns.building_price.call(0);
        let building_price20 = await masterIns.building_price.call(20);
        assert.equal(building_price0.toNumber(), 0, "building_price0 error");
        assert.equal(
            building_price20.toNumber(),
            5000 * 10 ** 8,
            "building_price20 error!!!"
        );
        console.log("building_price20=");
        console.log(building_price20.toNumber());
    });

    it("f/initial", async () => {
        console.log("\nf/initial...");
        let masterIns = await master.deployed();
        //let slave1Ins = await slave1.deloyed();

        let arinaAddress = await masterIns.arina_contract.call();
        assert.equal(arinaAddress, arina.address, "arina address error!!!");

        let tradeAddress = await masterIns.trade_address.call();
        assert.equal(tradeAddress, trade.address, "trade address error!!!");

        let landsMixAddress = await masterIns.landsMix_address.call();
        assert.equal(
            landsMixAddress,
            landsMix.address,
            "landsMix address error!!!"
        );

        let slave1Address = await masterIns.owner_slave.call(1);
        assert.equal(slave1Address, slave1.address, "slave address error!!!");

        let owner_slave_amount = await masterIns.owner_slave_amount.call();
        console.log("owner_slave_amount=");
        console.log(owner_slave_amount.toNumber());

        let city_totdomains = await masterIns.inquire_city_totdomains(1);
        console.log("city_totdomains1=");
        console.log(city_totdomains.toNumber());

        let location = await masterIns.inquire_location(accounts[0]);
        console.log("location=");
        console.log(location[0].toNumber() + ", " + location[1].toNumber());

        let status = await masterIns.inquire_status(accounts[0]);
        console.log("status=");
        console.log(status);

        let building_type = await masterIns.inquire_type(1);
        console.log("building_type1=");
        console.log(building_type);

        let type_price = await masterIns.inquire_type_price(1);
        console.log("type_price1=");
        console.log(type_price.toNumber());

        // let inquire_building1 = await masterIns.inquire_building(1,1,1);
        // console.log("inquire_building1=");
        // console.log(inquire_building1.toNumber());

        let building_amount = await masterIns.inquire_building_amount(1, 1);
        console.log("building_amount=");
        console.log(building_amount.toNumber());

        let tot_attribute = await masterIns.inquire_tot_attribute(1, 1);
        console.log("tot_attribute=");
        console.log(tot_attribute);
    });

    it("f/register", async () => {
        console.log("\nf/register...");
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
        console.log("\nf/rollDice...");
        let masterIns = await master.deployed();
        let rollDice = await masterIns.rollDice({ from: accounts[0] });
        await masterIns.rollDice({ from: accounts[1] });
        await masterIns.rollDice({ from: accounts[2] });
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
        console.log("\nf/fly...");
        let masterIns = await master.deployed();
        let fly = await masterIns.fly(1, 2, {
            value: 10 ** 19,
            from: accounts[0],
        });
        let events = fly.receipt.logs;
        //console.log(events);
        console.log("local=");
        console.log(
            events[0].args[1].toNumber() + ", " + events[0].args[2].toNumber()
        );
        assert.equal(events[0].args[1].toNumber(), 1, "local error");
        assert.equal(events[0].args[2].toNumber(), 2, "local error");
    });

    it("f/playLotto", async () => {
        console.log("\nf/playLotto...");
        let masterIns = await master.deployed();
        await masterIns.fly(1, 2, { value: 10 ** 19, from: accounts[0] });
        let playLotto = await masterIns.playLotto({ from: accounts[0] });
        let events = playLotto.receipt.logs;
        console.log("playLotto=");
        console.log("player_number:");
        console.log(events[0].args[1].toNumber());
        console.log("lotto_number:");
        console.log(events[0].args[2].toNumber());
    });

    // it('f/receiveApproval + _buyLand_ARINA', async () => {
    //     console.log("f/receiveApproval + _buyLand_ARINA...");
    //     let masterIns = await master.deployed();
    //     let arinaIns = await arina.deployed();

    //     await masterIns.fly(1, 3, {value:10**19, from: accounts[0]});
    //     let location = await masterIns.inquire_location(accounts[0]);
    //     console.log("location=");
    //     console.log(location[0].toNumber()+", "+ location[1].toNumber());

    //     let buyLand_ARINA = await arinaIns.approveAndCall(master.address, 2000*10**8, "0x1");
    //     let events = buyLand_ARINA.receipt.logs;
    //     console.log("buyLand_ARINA=");
    //     console.log(events);
    // });

    it("f/receiveApproval + _payRent_ARINA", async () => {
        console.log("\nf/receiveApproval + _payRent_ARINA...");
        let masterIns = await master.deployed();
        let arinaIns = await arina.deployed();
        let slave1Ins = await slave1.deployed();
        const city = 1;
        const domin = 3;

        await masterIns.fly(city, domin, {
            value: 10 ** 19,
            from: accounts[0],
        });
        await arinaIns.approveAndCall(master.address, 2000 * 10 ** 8, "0x1");
        await masterIns.fly(city, domin, {
            value: 10 ** 19,
            from: accounts[1],
        });

        let level_star = await masterIns.inquire_domain_level_star.call(
            city,
            domin
        );
        console.log("\nlevel_star: " + level_star);
        let payARINA_amount = await masterIns.payARINA_amount.call(
            level_star[0],
            level_star[1]
        );
        console.log("\npayARINA_amount: " + payARINA_amount);

        await arinaIns.transfer(accounts[1], payARINA_amount * 100);
        let payRent_ARINA = await arinaIns.approveAndCall(
            master.address,
            payARINA_amount,
            "0x0",
            { from: accounts[1] }
        );
        // let events = payRent_ARINA.receipt.logs;
        // console.log("change_city=");
        // console.log(events);
    });

    it("f/receiveApproval + change_city", async () => {
        console.log("\nf/receiveApproval + change_city...");
        let masterIns = await master.deployed();
        let arinaIns = await arina.deployed();
        //await masterIns.fly(1, 2, {value:10**19, from: accounts[0]});
        let _payment = 100 * 10 ** 8;
        let change_city = await arinaIns.approveAndCall(
            master.address,
            _payment,
            "0x202"
        );

        let events = change_city.receipt.logs;
        console.log("change_city...");
        console.log("local=");
        console.log(events[0].args[2].toNumber());
    });

    it("f/payRent_ETH", async () => {
        console.log("\nf/payRent_ETH...");
        let masterIns = await master.deployed();
        const city = 1;
        const domin = 3;
        await masterIns.rollDice({ from: accounts[2] });
        await masterIns.fly(city, domin, {
            value: 10 ** 19,
            from: accounts[2],
        });

        let level_star = await masterIns.inquire_domain_level_star.call(
            city,
            domin
        );
        console.log("\nlevel_star: " + level_star);
        let payRoadETH_amount = await masterIns.ETH_count.call(
            level_star[0],
            level_star[1],
            1
        );
        console.log("\npayRoadETH_amount: " + payRoadETH_amount);

        let payRent_ETH = await masterIns.payRent_ETH({
            from: accounts[2],
            value: payRoadETH_amount,
        });
        let events = payRent_ETH.receipt.logs;
        console.log("\npayRent_ETH=");
        //console.log(events);
        console.log("value:" + events[0].args.value);
        console.log("city:" + events[0].args.city);
        console.log("id:" + events[0].args.id);
    });

    it("f/buyLand_ETH", async () => {
        console.log("\nf/buyLand_ETH...");
        let masterIns = await master.deployed();
        const city = 1;
        const domin = 3;
        await masterIns.rollDice({ from: accounts[3] });
        await masterIns.fly(city, domin, {
            value: 10 ** 19,
            from: accounts[3],
        });

        let level_star = await masterIns.inquire_domain_level_star.call(
            city,
            domin
        );
        console.log("\nlevel_star: " + level_star);
        let buyLandETH_amount = await masterIns.ETH_count.call(
            level_star[0],
            level_star[1],
            2
        );
        console.log("\nbuyLandETH_amount: " + buyLandETH_amount);

        let buyLand_ETH = await masterIns.buyLand_ETH({
            from: accounts[3],
            value: buyLandETH_amount,
        });
        let events = buyLand_ETH.receipt.logs;
        console.log("\nbuyLand_ETH=");
        //console.log(events);
        console.log("value:" + events[0].args.value);
        console.log("city:" + events[0].args.city);
        console.log("id:" + events[0].args.id);
    });

    it("f/reward", async () => {
        console.log("\nf/reward...");
        let masterIns = await master.deployed();
        let newMatsIns = await newMats.deployed();
        const city = 1;
        const domin = 3;
        let reward = await masterIns.reward(0, city, domin, {
            from: accounts[3],
        });
        //let events = reward.receipt.logs;
        console.log(reward.receipt.rawLogs);

        console.log("\nplayer reward box:");
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1000,
                1001,
                1002,
                1003,
                1004,
            ])
        );
    });

    it("f/domain_all_reward", async () => {
        console.log("\nf/domain_all_reward...");
        let masterIns = await master.deployed();
        let arinaIns = await arina.deployed();
        let newMatsIns = await newMats.deployed();
        const city = 1;

        await masterIns.fly(city, 4, { value: 10 ** 19, from: accounts[0] });
        await arinaIns.approveAndCall(master.address, 2000 * 10 ** 8, "0x1");

        try {
            console.log("\nbuy land...");
            for (i = 35; i < 45; i++) {
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
        } catch (error) {
            console.error(new Error());
        }

        // try {
        //     console.log("player all_reward box...");
        //     await masterIns.all_reward(4, city).then((r) => {
        //         for (const key in r.events) {
        //             if (r.events.hasOwnProperty(key)) {
        //                 const event = r.events[key];
        //                 if (event.event == undefined) {
        //                     console.log(
        //                         `<未知事件(無abi解析)> 事件發生在 ${event.address}`
        //                     );
        //                     console.log(event.raw);
        //                 } else {
        //                     console.log(
        //                         `<${event.event}> 事件發生在 ${event.address}`
        //                     );
        //                     console.log(event.returnValues);
        //                 }
        //             }
        //         }
        //     });
        // } catch (error) {
        //     console.error(new Error());
        // }

        await masterIns.all_reward(2, city);

        console.log("\nmy reward box:");
        console.log(
            await newMatsIns.balanceOfBatch2.call(accounts[0], [
                1200,
                1201,
                1202,
                1203,
                1204,
            ])
        );
    });

    it("f/set_member_name", async () => {
        console.log("\nf/set_member_name...");
        let masterIns = await master.deployed();
        let set_member_name = await masterIns.set_member_name(
            accounts[1],
            "new_name",
            { value: 10 ** 19, from: accounts[1] }
        );
        let events = set_member_name.receipt.logs;
        console.log("\nset_member_name=");
        console.log(events);
    });

    it("test", async () => {
        console.log("\ntest...");
        let personCallIns = await personCall.deployed();
        let random = await personCallIns.getRandom.call();
        console.log("\nrandom: " + random);
    });

    it("f/receiveApproval + _build 3", async () => {
        console.log("\n_build 3...");
        let masterIns = await master.deployed();
        let arinaIns = await arina.deployed();
        const city = 1;
        let domain = 4;
        let price = 2000;
        let building = "0x303";
        await masterIns.fly(city, domain, {
            value: 10 ** 19,
            from: accounts[0],
        });
        console.log("inquire_land_info: ");
        console.log(await masterIns.inquire_land_info.call(city, domain));
        let domain_level_star = await masterIns.inquire_domain_level_star.call(
            city,
            domain
        );
        console.log(domain_level_star);

        await arinaIns.approveAndCall(
            master.address,
            price * 10 ** 8,
            building
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

    it("f/receiveApproval + _build 4", async () => {
        console.log("\n_build 4...");
        let masterIns = await master.deployed();
        let arinaIns = await arina.deployed();
        const city = 1;
        let domain = 8;
        let price = 2000;
        let building = "0x304";
        await masterIns.fly(city, domain, {
            value: 10 ** 19,
            from: accounts[0],
        });
        await arinaIns.approveAndCall(master.address, 2000 * 10 ** 8, "0x1");
        await masterIns.fly(city, domain, {
            value: 10 ** 19,
            from: accounts[0],
        });
        console.log("inquire_land_info: ");
        console.log(await masterIns.inquire_land_info.call(city, domain));
        let domain_level_star = await masterIns.inquire_domain_level_star.call(
            city,
            domain
        );
        console.log(domain_level_star);
        await arinaIns.approveAndCall(
            master.address,
            price * 10 ** 8,
            building
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

    // it('f/receiveApproval + _build 8', async () => {
    //     console.log("\n_build 8...");
    //     let masterIns = await master.deployed();
    //     let arinaIns = await arina.deployed();
    //     const city = 1;
    //     let domain = 16;
    //     let price = 5000;
    //     let building = "0x308"
    //     await masterIns.fly(city, domain, {value:10**19, from: accounts[0]});
    //     await arinaIns.approveAndCall(master.address, 2000*10**8, "0x1");
    //     await masterIns.fly(city, domain, {value:10**19, from: accounts[0]});
    //     console.log("inquire_land_info: ");
    //     console.log(await masterIns.inquire_land_info.call(city,domain));
    //     let domain_level_star = await masterIns.inquire_domain_level_star.call(city,domain)
    //     console.log(domain_level_star);
    //     await arinaIns.approveAndCall(master.address, price*10**8, building);
    //     domain_level_star = await masterIns.inquire_domain_level_star.call(city,domain)
    //     console.log(domain_level_star);
    //     console.log("tot_building: " + await masterIns.inquire_tot_building.call(city,domain));
    // });

    // it('f/reconstruction', async () => {
    //     console.log("\n_build reconstruction...");
    //     let masterIns = await master.deployed();
    //     const city = 1;
    //     await masterIns.fly(city, 11, {value:10**19, from: accounts[0]});
    //     await masterIns.fly(city, 4, {value:10**19, from: accounts[0]});
    //     let inquire_type_price =  await masterIns.inquire_type_price.call(11);
    //     console.log("inquire_type_price: " + inquire_type_price);
    //     console.log("inquire_tot_building: " + await masterIns.inquire_tot_building.call(1,4));

    //     let reconstruction = await masterIns.reconstruction(0, 8, {value: inquire_type_price*10**8});
    //     let events = reconstruction.receipt.logs;
    //     console.log("building:" + events[0].args.building.toNumber());
    //     console.log("value:" + events[0].args.value);
    //     console.log("inquire_tot_building: " + await masterIns.inquire_tot_building.call(1,4));
    // });

    it("f/exchange", async () => {
        console.log("\nexchange...");
        let masterIns = await master.deployed();
        let arinaIns = await arina.deployed();
        console.log(
            "contract arina: " + (await arinaIns.balanceOf.call(master.address))
        );
        console.log(
            "player arina: " + (await arinaIns.balanceOf.call(accounts[2]))
        );
        await masterIns.exchange(1, 1, { from: accounts[2], value: 10 ** 15 });
        console.log(
            "contract arina: " + (await arinaIns.balanceOf.call(master.address))
        );
        console.log(
            "player arina: " + (await arinaIns.balanceOf.call(accounts[2]))
        );
    });

    // it('f/mayor_all_reward', async () => {
    //     console.log("mayor_all_reward...");
    //     let masterIns = await master.deployed();
    //     let newMatsIns = await newMats.deployed();
    //     let tradeBox = await newMatsIns.balanceOfBatch2.call(trade.address, [1001,1002,1003,1004,1005]);
    //     console.log("tradeBox: ");
    //     console.log(await newMatsIns.balanceOfBatch2.call(trade.address, [1001,1002,1003,1004,1005]));
    //     console.log(await newMatsIns.balanceOfBatch2.call(trade.address, [1101,1102,1103,1104,1105]));
    //     console.log(await newMatsIns.balanceOfBatch2.call(trade.address, [1201,1202,1203,1204,1205]));
    //     console.log(await newMatsIns.balanceOfBatch2.call(trade.address, [1301,1302,1303,1304,1305]));
    //     console.log(await newMatsIns.balanceOfBatch2.call(trade.address, [1401,1402,1403,1404,1405]));
    //     console.log(await newMatsIns.balanceOfBatch2.call(trade.address, [1501,1502,1503,1504,1505]));

    //     await masterIns.mayor_all_reward(1);
    //     console.log("tradeBox: ");
    //     console.log(await newMatsIns.balanceOfBatch2.call(trade.address, [1001,1002,1003,1004,1005]));
    //     console.log(await newMatsIns.balanceOfBatch2.call(trade.address, [1101,1102,1103,1104,1105]));
    //     console.log(await newMatsIns.balanceOfBatch2.call(trade.address, [1201,1202,1203,1204,1205]));
    //     console.log(await newMatsIns.balanceOfBatch2.call(trade.address, [1301,1302,1303,1304,1305]));
    //     console.log(await newMatsIns.balanceOfBatch2.call(trade.address, [1401,1402,1403,1404,1405]));
    //     console.log(await newMatsIns.balanceOfBatch2.call(trade.address, [1501,1502,1503,1504,1505]));
    // });

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
});
