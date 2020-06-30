const newMats = artifacts.require("newMaterials");
const personCall = artifacts.require("personCall");

module.exports = async function (deployer) {
    console.log("\n<<<<<<<<<<<<<<<<5_box_material_setting>>>>>>>>>>>>>>");
    //let newMatsIns = await newMats.deployed();
    let newMatsIns = await newMats.at(
        "0x77b9a110073CD5C4e5f5ea2240a29EE34e49baFb"
    );
    console.log("\n material set_available...");
    try {
        await newMatsIns.set_available(personCall.address);
    } catch (error) {
        console.error(new Error());
    }

    console.log("\n box material setProbability...");

    ///////////////////////console.log("set herb...");
    try {
        newMatsIns.setAllProbability(1000, 30, [
            100,
            100,
            100,
            100,
            100,
            80,
            80,
            80,
            80,
            80,
            60,
            60,
            60,
            60,
            60,
            40,
            40,
            40,
            40,
            40,
            20,
            20,
            20,
            20,
            20,
            10,
            10,
            10,
            10,
            10,
        ]);

        newMatsIns.setAllProbability(1001, 30, [
            40,
            40,
            40,
            40,
            40,
            100,
            100,
            100,
            100,
            100,
            80,
            80,
            80,
            80,
            80,
            60,
            60,
            60,
            60,
            60,
            40,
            40,
            40,
            40,
            40,
            20,
            20,
            20,
            20,
            20,
        ]);

        newMatsIns.setAllProbability(1002, 30, [
            20,
            20,
            20,
            20,
            20,
            40,
            40,
            40,
            40,
            40,
            100,
            100,
            100,
            100,
            100,
            80,
            80,
            80,
            80,
            80,
            60,
            60,
            60,
            60,
            60,
            40,
            40,
            40,
            40,
            40,
        ]);

        newMatsIns.setAllProbability(1003, 30, [
            10,
            10,
            10,
            10,
            10,
            20,
            20,
            20,
            20,
            20,
            40,
            40,
            40,
            40,
            40,
            100,
            100,
            100,
            100,
            100,
            80,
            80,
            80,
            80,
            80,
            60,
            60,
            60,
            60,
            60,
            40,
            40,
            40,
            40,
            40,
        ]);

        newMatsIns.setAllProbability(1004, 30, [
            0,
            0,
            0,
            0,
            0,
            10,
            10,
            10,
            10,
            10,
            20,
            20,
            20,
            20,
            20,
            40,
            40,
            40,
            40,
            40,
            100,
            100,
            100,
            100,
            100,
            80,
            80,
            80,
            80,
            80,
        ]);
    } catch (error) {
        console.error(new Error());
    }
    await sleep(1000);

    //////////////////console.log("set rock...");
    try {
        newMatsIns.setAllProbability(1100, 10, [
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
            20,
            10,
        ]);

        newMatsIns.setAllProbability(1101, 10, [
            10,
            20,
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
        ]);

        newMatsIns.setAllProbability(1102, 10, [
            0,
            0,
            10,
            20,
            100,
            90,
            80,
            70,
            60,
            50,
        ]);

        newMatsIns.setAllProbability(1103, 10, [
            0,
            0,
            10,
            20,
            100,
            90,
            80,
            70,
            60,
            50,
        ]);

        newMatsIns.setAllProbability(1104, 10, [
            0,
            0,
            0,
            0,
            0,
            0,
            10,
            20,
            100,
            90,
        ]);
    } catch (error) {
        console.error(new Error());
    }
    await sleep(1000);

    /////////////////console.log("set MAGIC...");
    try {
        newMatsIns.setAllProbability(1200, 20, [
            200,
            200,
            200,
            200,
            40,
            40,
            40,
            40,
            9,
            9,
            9,
            9,
            1,
            1,
            1,
            1,
            0,
            0,
            0,
            0,
        ]);

        newMatsIns.setAllProbability(1201, 20, [
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            4,
            4,
            4,
            4,
            1,
            1,
            1,
            1,
            0,
            0,
            0,
            0,
        ]);

        newMatsIns.setAllProbability(1202, 20, [
            50,
            50,
            50,
            50,
            70,
            70,
            70,
            70,
            100,
            100,
            100,
            100,
            29,
            29,
            29,
            29,
            1,
            1,
            1,
            1,
        ]);

        newMatsIns.setAllProbability(1203, 20, [
            2,
            2,
            2,
            2,
            5,
            5,
            5,
            5,
            10,
            10,
            10,
            10,
            7,
            7,
            7,
            7,
            1,
            1,
            1,
            1,
        ]);

        newMatsIns.setAllProbability(1204, 20, [
            1,
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            7,
            7,
            7,
            7,
            10,
            10,
            10,
            10,
            5,
            5,
            5,
            5,
        ]);
    } catch (error) {
        console.error(new Error());
    }
    await sleep(1000);

    //////////////////console.log("set Energy...");
    try {
        newMatsIns.setAllProbability(1300, 8, [40, 40, 8, 8, 2, 2, 0, 0]);

        newMatsIns.setAllProbability(1301, 8, [25, 25, 20, 20, 5, 5, 0, 0]);

        newMatsIns.setAllProbability(1302, 8, [15, 15, 22, 22, 12, 12, 1, 1]);

        newMatsIns.setAllProbability(1303, 8, [10, 10, 15, 15, 20, 20, 5, 5]);

        newMatsIns.setAllProbability(1304, 8, [2, 2, 8, 8, 30, 30, 10, 10]);
    } catch (error) {
        console.error(new Error());
    }
    await sleep(1000);

    //////////console.log("set gem...");
    try {
        newMatsIns.setAllProbability(1400, 20, [
            200,
            200,
            200,
            200,
            40,
            40,
            40,
            40,
            9,
            9,
            9,
            9,
            1,
            1,
            1,
            1,
            0,
            0,
            0,
            0,
        ]);

        newMatsIns.setAllProbability(1401, 20, [
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            4,
            4,
            4,
            4,
            1,
            1,
            1,
            1,
            0,
            0,
            0,
            0,
        ]);

        newMatsIns.setAllProbability(1402, 20, [
            50,
            50,
            50,
            50,
            70,
            70,
            70,
            70,
            100,
            100,
            100,
            100,
            29,
            29,
            29,
            29,
            1,
            1,
            1,
            1,
        ]);

        newMatsIns.setAllProbability(1403, 20, [
            2,
            2,
            2,
            2,
            5,
            5,
            5,
            5,
            10,
            10,
            10,
            10,
            7,
            7,
            7,
            7,
            1,
            1,
            1,
            1,
        ]);

        newMatsIns.setAllProbability(1404, 20, [
            1,
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            7,
            7,
            7,
            7,
            10,
            10,
            10,
            10,
            5,
            5,
            5,
            5,
        ]);
    } catch (error) {
        console.error(new Error());
    }
    // try {

    // newMatsIns.setProbability(1000, 2000, 100);
    // newMatsIns.setProbability(1000, 2001, 100);
    // newMatsIns.setProbability(1000, 2002, 100);
    // newMatsIns.setProbability(1000, 2003, 100);
    // newMatsIns.setProbability(1000, 2004, 100);
    // newMatsIns.setProbability(1000, 2005, 80);
    // newMatsIns.setProbability(1000, 2006, 80);
    // newMatsIns.setProbability(1000, 2007, 80);
    // newMatsIns.setProbability(1000, 2008, 80);
    // newMatsIns.setProbability(1000, 2009, 80);
    // await sleep(1000);
    // newMatsIns.setProbability(1000, 2010, 60);
    // newMatsIns.setProbability(1000, 2011, 60);
    // newMatsIns.setProbability(1000, 2012, 60);
    // newMatsIns.setProbability(1000, 2013, 60);
    // newMatsIns.setProbability(1000, 2014, 60);
    // newMatsIns.setProbability(1000, 2015, 40);
    // newMatsIns.setProbability(1000, 2016, 40);
    // newMatsIns.setProbability(1000, 2017, 40);
    // newMatsIns.setProbability(1000, 2018, 40);
    // newMatsIns.setProbability(1000, 2019, 40);
    // await sleep(1000);
    // newMatsIns.setProbability(1000, 2020, 20);
    // newMatsIns.setProbability(1000, 2021, 20);
    // newMatsIns.setProbability(1000, 2022, 20);
    // newMatsIns.setProbability(1000, 2023, 20);
    // newMatsIns.setProbability(1000, 2024, 20);
    // newMatsIns.setProbability(1000, 2025, 10);
    // newMatsIns.setProbability(1000, 2026, 10);
    // newMatsIns.setProbability(1000, 2027, 10);
    // newMatsIns.setProbability(1000, 2028, 10);
    // newMatsIns.setProbability(1000, 2029, 10);
    // } catch (error) {
    //     console.error(new Error);
    // }

    await sleep(1000);
    for (i = 0; i < 30; i++) {
        let perProbability = await newMatsIns.require_material_probability.call(
            1000,
            i
        );
        console.log(
            "1000 perProbability " +
                perProbability[0].toNumber() +
                ": " +
                perProbability[1].toNumber()
        );
    }
    // let perProbability0 = await newMatsIns.require_material_probability.call(1000, 0);
    // console.log("\n1000 perProbability0=");
    // console.log(perProbability0[0].toNumber() + ": " + perProbability0[1].toNumber());

    // let perProbability29 = await newMatsIns.require_material_probability.call(1000, 29);
    // console.log("\n1000 perProbability29=");
    // console.log(perProbability29[0].toNumber() + ": " + perProbability29[1].toNumber());

    // // try {
    // //     newMatsIns.setProbability(1001,2000,40);
    // //     newMatsIns.setProbability(1001,2001,40);
    // //     newMatsIns.setProbability(1001,2002,40);
    // //     newMatsIns.setProbability(1001,2003,40);
    // //     newMatsIns.setProbability(1001,2004,40);
    // //     newMatsIns.setProbability(1001,2005,100);
    // //     newMatsIns.setProbability(1001,2006,100);
    // //     newMatsIns.setProbability(1001,2007,100);
    // //     newMatsIns.setProbability(1001,2008,100);
    // //     newMatsIns.setProbability(1001,2009,100);
    // //     newMatsIns.setProbability(1001,2010,80);
    // //     newMatsIns.setProbability(1001,2011,80);
    // //     newMatsIns.setProbability(1001,2012,80);
    // //     newMatsIns.setProbability(1001,2013,80);
    // //     newMatsIns.setProbability(1001,2014,80);
    // //     newMatsIns.setProbability(1001,2015,60);
    // //     await sleep(1000);
    // //     newMatsIns.setProbability(1001,2016,60);
    // //     newMatsIns.setProbability(1001,2017,60);
    // //     newMatsIns.setProbability(1001,2018,60);
    // //     newMatsIns.setProbability(1001,2019,60);

    // //     newMatsIns.setProbability(1001,2020,40);
    // //     newMatsIns.setProbability(1001,2021,40);
    // //     newMatsIns.setProbability(1001,2022,40);
    // //     newMatsIns.setProbability(1001,2023,40);
    // //     newMatsIns.setProbability(1001,2024,40);
    // //     newMatsIns.setProbability(1001,2025,20);
    // //     newMatsIns.setProbability(1001,2026,20);
    // //     newMatsIns.setProbability(1001,2027,20);
    // //     newMatsIns.setProbability(1001,2028,20);
    // //     newMatsIns.setProbability(1001,2029,20);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // await sleep(1000);
    // // try {
    // //     newMatsIns.setProbability(1002,2000,20);
    // //     newMatsIns.setProbability(1002,2001,20);
    // //     newMatsIns.setProbability(1002,2002,20);
    // //     newMatsIns.setProbability(1002,2003,20);
    // //     newMatsIns.setProbability(1002,2004,20);
    // //     newMatsIns.setProbability(1002,2005,40);
    // //     newMatsIns.setProbability(1002,2006,40);
    // //     newMatsIns.setProbability(1002,2007,40);
    // //     newMatsIns.setProbability(1002,2008,40);
    // //     newMatsIns.setProbability(1002,2009,40);
    // //     await sleep(1000);
    // //     newMatsIns.setProbability(1002,2010,100);
    // //     newMatsIns.setProbability(1002,2011,100);
    // //     newMatsIns.setProbability(1002,2012,100);
    // //     newMatsIns.setProbability(1002,2013,100);
    // //     newMatsIns.setProbability(1002,2014,100);
    // //     newMatsIns.setProbability(1002,2015,80);
    // //     newMatsIns.setProbability(1002,2016,80);
    // //     newMatsIns.setProbability(1002,2017,80);
    // //     newMatsIns.setProbability(1002,2018,80);
    // //     newMatsIns.setProbability(1002,2019,80);
    // //     await sleep(1000);
    // //     newMatsIns.setProbability(1002,2020,60);
    // //     newMatsIns.setProbability(1002,2021,60);
    // //     newMatsIns.setProbability(1002,2022,60);
    // //     newMatsIns.setProbability(1002,2023,60);
    // //     newMatsIns.setProbability(1002,2024,60);
    // //     newMatsIns.setProbability(1002,2025,40);
    // //     newMatsIns.setProbability(1002,2026,40);
    // //     newMatsIns.setProbability(1002,2027,40);
    // //     newMatsIns.setProbability(1002,2028,40);
    // //     newMatsIns.setProbability(1002,2029,40);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // //await sleep(1000);
    // try {
    // //     newMatsIns.setProbability(1003,2000,10);
    // //     newMatsIns.setProbability(1003,2001,10);
    // //     newMatsIns.setProbability(1003,2002,10);
    // //     newMatsIns.setProbability(1003,2003,10);
    // //     newMatsIns.setProbability(1003,2004,10);
    // //     newMatsIns.setProbability(1003,2005,20);
    // //     newMatsIns.setProbability(1003,2006,20);
    // //     newMatsIns.setProbability(1003,2007,20);
    // //     newMatsIns.setProbability(1003,2008,20);
    // //     newMatsIns.setProbability(1003,2009,20);
    // //     await sleep(1000);
    // //     newMatsIns.setProbability(1003,2010,40);
    // //     newMatsIns.setProbability(1003,2011,40);
    // //     newMatsIns.setProbability(1003,2012,40);
    // //     newMatsIns.setProbability(1003,2013,40);
    // //     newMatsIns.setProbability(1003,2014,40);
    // //     newMatsIns.setProbability(1003,2015,100);
    // //     newMatsIns.setProbability(1003,2016,100);
    // //     newMatsIns.setProbability(1003,2017,100);
    // //     newMatsIns.setProbability(1003,2018,100);
    // //     newMatsIns.setProbability(1003,2019,100);
    // //     await sleep(1000);
    // //     newMatsIns.setProbability(1003,2020,80);
    // //     newMatsIns.setProbability(1003,2021,80);
    // //     newMatsIns.setProbability(1003,2022,80);
    // //     newMatsIns.setProbability(1003,2023,80);
    // //     newMatsIns.setProbability(1003,2024,80);
    // //     newMatsIns.setProbability(1003,2025,60);
    // //     newMatsIns.setProbability(1003,2026,60);
    // //     newMatsIns.setProbability(1003,2027,60);
    // //     newMatsIns.setProbability(1003,2028,60);
    // //     newMatsIns.setProbability(1003,2029,60);
    // } catch (error) {
    //     console.error(new Error);
    // }

    // // await sleep(1000);
    // // try {
    // //     newMatsIns.setProbability(1004,2000,0);
    // //     newMatsIns.setProbability(1004,2001,0);
    // //     newMatsIns.setProbability(1004,2002,0);
    // //     newMatsIns.setProbability(1004,2003,0);
    // //     newMatsIns.setProbability(1004,2004,0);
    // //     newMatsIns.setProbability(1004,2005,10);
    // //     newMatsIns.setProbability(1004,2006,10);
    // //     await sleep(1000);
    // //     newMatsIns.setProbability(1004,2007,10);
    // //     newMatsIns.setProbability(1004,2008,10);
    // //     newMatsIns.setProbability(1004,2009,10);
    // //     newMatsIns.setProbability(1004,2010,20);
    // //     newMatsIns.setProbability(1004,2011,20);
    // //     newMatsIns.setProbability(1004,2012,20);
    // //     newMatsIns.setProbability(1004,2013,20);
    // //     newMatsIns.setProbability(1004,2014,20);
    // //     await sleep(1000);
    // //     newMatsIns.setProbability(1004,2015,40);
    // //     newMatsIns.setProbability(1004,2016,40);
    // //     newMatsIns.setProbability(1004,2017,40);
    // //     newMatsIns.setProbability(1004,2018,40);
    // //     newMatsIns.setProbability(1004,2019,40);
    // //     newMatsIns.setProbability(1004,2020,100);
    // //     newMatsIns.setProbability(1004,2021,100);
    // //     newMatsIns.setProbability(1004,2022,100);
    // //     newMatsIns.setProbability(1004,2023,100);
    // //     newMatsIns.setProbability(1004,2024,100);
    // //     await sleep(1000);
    // //     newMatsIns.setProbability(1004,2025,80);
    // //     newMatsIns.setProbability(1004,2026,80);
    // //     newMatsIns.setProbability(1004,2027,80);
    // //     newMatsIns.setProbability(1004,2028,80);
    // //     newMatsIns.setProbability(1004,2029,80);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // /////////////////ROCK
    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1100,2100,100);
    // //     newMatsIns.setProbability(1100,2101,90);
    // //     newMatsIns.setProbability(1100,2102,80);
    // //     newMatsIns.setProbability(1100,2103,70);
    // //     newMatsIns.setProbability(1100,2104,60);
    // //     newMatsIns.setProbability(1100,2105,50);
    // //     newMatsIns.setProbability(1100,2106,40);
    // //     newMatsIns.setProbability(1100,2107,30);
    // //     newMatsIns.setProbability(1100,2108,20);
    // //     newMatsIns.setProbability(1100,2109,10);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1101,2100,10);
    // //     newMatsIns.setProbability(1101,2101,20);
    // //     newMatsIns.setProbability(1101,2102,100);
    // //     newMatsIns.setProbability(1101,2103,90);
    // //     newMatsIns.setProbability(1101,2104,80);
    // //     newMatsIns.setProbability(1101,2105,70);
    // //     newMatsIns.setProbability(1101,2106,60);
    // //     newMatsIns.setProbability(1101,2107,50);
    // //     newMatsIns.setProbability(1101,2108,40);
    // //     newMatsIns.setProbability(1101,2109,30);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1102,2100,0);
    // //     newMatsIns.setProbability(1102,2101,0);
    // //     newMatsIns.setProbability(1102,2102,10);
    // //     newMatsIns.setProbability(1102,2103,20);
    // //     newMatsIns.setProbability(1102,2104,100);
    // //     newMatsIns.setProbability(1102,2105,90);
    // //     newMatsIns.setProbability(1102,2106,80);
    // //     newMatsIns.setProbability(1102,2107,70);
    // //     newMatsIns.setProbability(1102,2108,60);
    // //     newMatsIns.setProbability(1102,2109,50);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1103,2100,0);
    // //     newMatsIns.setProbability(1103,2101,0);
    // //     newMatsIns.setProbability(1103,2102,0);
    // //     newMatsIns.setProbability(1103,2103,0);
    // //     newMatsIns.setProbability(1103,2104,10);
    // //     newMatsIns.setProbability(1103,2105,20);
    // //     newMatsIns.setProbability(1103,2106,100);
    // //     newMatsIns.setProbability(1103,2107,90);
    // //     newMatsIns.setProbability(1103,2108,80);
    // //     newMatsIns.setProbability(1103,2109,70);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1104,2100,0);
    // //     newMatsIns.setProbability(1104,2101,0);
    // //     newMatsIns.setProbability(1104,2102,0);
    // //     newMatsIns.setProbability(1104,2103,0);
    // //     newMatsIns.setProbability(1104,2104,0);
    // //     newMatsIns.setProbability(1104,2105,0);
    // //     newMatsIns.setProbability(1104,2106,10);
    // //     newMatsIns.setProbability(1104,2107,20);
    // //     newMatsIns.setProbability(1104,2108,100);
    // //     newMatsIns.setProbability(1104,2109,90);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // /////////////////MAGIC
    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1200,2200,200);
    // //     newMatsIns.setProbability(1200,2201,200);
    // //     newMatsIns.setProbability(1200,2202,200);
    // //     newMatsIns.setProbability(1200,2203,200);
    // //     newMatsIns.setProbability(1200,2204,40);
    // //     newMatsIns.setProbability(1200,2205,40);
    // //     newMatsIns.setProbability(1200,2206,40);
    // //     newMatsIns.setProbability(1200,2207,40);
    // //     newMatsIns.setProbability(1200,2208,9);
    // //     newMatsIns.setProbability(1200,2209,9);
    // //     await sleep(1000);
    // //     newMatsIns.setProbability(1200,2210,9);
    // //     newMatsIns.setProbability(1200,2211,9);
    // //     newMatsIns.setProbability(1200,2212,1);
    // //     newMatsIns.setProbability(1200,2213,1);
    // //     newMatsIns.setProbability(1200,2214,1);
    // //     newMatsIns.setProbability(1200,2215,1);
    // //     newMatsIns.setProbability(1200,2216,0);
    // //     newMatsIns.setProbability(1200,2217,0);
    // //     newMatsIns.setProbability(1200,2218,0);
    // //     newMatsIns.setProbability(1200,2219,0);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1201,2200,10);
    // //     newMatsIns.setProbability(1201,2201,10);
    // //     newMatsIns.setProbability(1201,2202,10);
    // //     newMatsIns.setProbability(1201,2203,10);
    // //     newMatsIns.setProbability(1201,2204,10);
    // //     newMatsIns.setProbability(1201,2205,10);
    // //     newMatsIns.setProbability(1201,2206,10);
    // //     newMatsIns.setProbability(1201,2207,10);
    // //     newMatsIns.setProbability(1201,2208,4);
    // //     newMatsIns.setProbability(1201,2209,4);
    // //     await sleep(1000);
    // //     newMatsIns.setProbability(1201,2210,4);
    // //     newMatsIns.setProbability(1201,2211,4);
    // //     newMatsIns.setProbability(1201,2212,1);
    // //     newMatsIns.setProbability(1201,2213,1);
    // //     newMatsIns.setProbability(1201,2214,1);
    // //     newMatsIns.setProbability(1201,2215,1);
    // //     newMatsIns.setProbability(1201,2216,0);
    // //     newMatsIns.setProbability(1201,2217,0);
    // //     newMatsIns.setProbability(1201,2218,0);
    // //     newMatsIns.setProbability(1201,2219,0);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1202,2200,50);
    // //     newMatsIns.setProbability(1202,2201,50);
    // //     newMatsIns.setProbability(1202,2202,50);
    // //     newMatsIns.setProbability(1202,2203,50);
    // //     newMatsIns.setProbability(1202,2204,70);
    // //     newMatsIns.setProbability(1202,2205,70);
    // //     newMatsIns.setProbability(1202,2206,70);
    // //     newMatsIns.setProbability(1202,2207,70);
    // //     newMatsIns.setProbability(1202,2208,100);
    // //     newMatsIns.setProbability(1202,2209,100);
    // //     await sleep(1000);
    // //     newMatsIns.setProbability(1202,2210,100);
    // //     newMatsIns.setProbability(1202,2211,100);
    // //     newMatsIns.setProbability(1202,2212,29);
    // //     newMatsIns.setProbability(1202,2213,29);
    // //     newMatsIns.setProbability(1202,2214,29);
    // //     newMatsIns.setProbability(1202,2215,29);
    // //     newMatsIns.setProbability(1202,2216,1);
    // //     newMatsIns.setProbability(1202,2217,1);
    // //     newMatsIns.setProbability(1202,2218,1);
    // //     newMatsIns.setProbability(1202,2219,1);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1203,2200,2);
    // //     newMatsIns.setProbability(1203,2201,2);
    // //     newMatsIns.setProbability(1203,2202,2);
    // //     newMatsIns.setProbability(1203,2203,2);
    // //     newMatsIns.setProbability(1203,2204,5);
    // //     newMatsIns.setProbability(1203,2205,5);
    // //     newMatsIns.setProbability(1203,2206,5);
    // //     newMatsIns.setProbability(1203,2207,5);
    // //     newMatsIns.setProbability(1203,2208,10);
    // //     newMatsIns.setProbability(1203,2209,10);
    // //     await sleep(1000);
    // //     newMatsIns.setProbability(1203,2210,10);
    // //     newMatsIns.setProbability(1203,2211,10);
    // //     newMatsIns.setProbability(1203,2212,7);
    // //     newMatsIns.setProbability(1203,2213,7);
    // //     newMatsIns.setProbability(1203,2214,7);
    // //     newMatsIns.setProbability(1203,2215,7);
    // //     newMatsIns.setProbability(1203,2216,1);
    // //     newMatsIns.setProbability(1203,2217,1);
    // //     newMatsIns.setProbability(1203,2218,1);
    // //     newMatsIns.setProbability(1203,2219,1);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1204,2200,1);
    // //     newMatsIns.setProbability(1204,2201,1);
    // //     newMatsIns.setProbability(1204,2202,1);
    // //     newMatsIns.setProbability(1204,2203,1);
    // //     newMatsIns.setProbability(1204,2204,2);
    // //     newMatsIns.setProbability(1204,2205,2);
    // //     newMatsIns.setProbability(1204,2206,2);
    // //     newMatsIns.setProbability(1204,2207,2);
    // //     newMatsIns.setProbability(1204,2208,7);
    // //     newMatsIns.setProbability(1204,2209,7);
    // //     await sleep(1000);
    // //     newMatsIns.setProbability(1204,2210,7);
    // //     newMatsIns.setProbability(1204,2211,7);
    // //     newMatsIns.setProbability(1204,2212,10);
    // //     newMatsIns.setProbability(1204,2213,10);
    // //     newMatsIns.setProbability(1204,2214,10);
    // //     newMatsIns.setProbability(1204,2215,10);
    // //     newMatsIns.setProbability(1204,2216,5);
    // //     newMatsIns.setProbability(1204,2217,5);
    // //     newMatsIns.setProbability(1204,2218,5);
    // //     newMatsIns.setProbability(1204,2219,5);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // //////Energy
    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1300,2300,40);
    // //     newMatsIns.setProbability(1300,2301,40);
    // //     newMatsIns.setProbability(1300,2302,8);
    // //     newMatsIns.setProbability(1300,2303,8);
    // //     newMatsIns.setProbability(1300,2304,2);
    // //     newMatsIns.setProbability(1300,2305,2);
    // //     newMatsIns.setProbability(1300,2306,0);
    // //     newMatsIns.setProbability(1300,2307,0);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1301,2300,25);
    // //     newMatsIns.setProbability(1301,2301,25);
    // //     newMatsIns.setProbability(1301,2302,20);
    // //     newMatsIns.setProbability(1301,2303,20);
    // //     newMatsIns.setProbability(1301,2304,5);
    // //     newMatsIns.setProbability(1301,2305,5);
    // //     newMatsIns.setProbability(1301,2306,0);
    // //     newMatsIns.setProbability(1301,2307,0);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1302,2300,15);
    // //     newMatsIns.setProbability(1302,2301,15);
    // //     newMatsIns.setProbability(1302,2302,22);
    // //     newMatsIns.setProbability(1302,2303,22);
    // //     newMatsIns.setProbability(1302,2304,12);
    // //     newMatsIns.setProbability(1302,2305,12);
    // //     newMatsIns.setProbability(1302,2306,1);
    // //     newMatsIns.setProbability(1302,2307,1);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1303,2300,10);
    // //     newMatsIns.setProbability(1303,2301,10);
    // //     newMatsIns.setProbability(1303,2302,15);
    // //     newMatsIns.setProbability(1303,2303,15);
    // //     newMatsIns.setProbability(1303,2304,20);
    // //     newMatsIns.setProbability(1303,2305,20);
    // //     newMatsIns.setProbability(1303,2306,5);
    // //     newMatsIns.setProbability(1303,2307,5);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1304,2300,2);
    // //     newMatsIns.setProbability(1304,2301,2);
    // //     newMatsIns.setProbability(1304,2302,8);
    // //     newMatsIns.setProbability(1304,2303,8);
    // //     newMatsIns.setProbability(1304,2304,30);
    // //     newMatsIns.setProbability(1304,2305,30);
    // //     newMatsIns.setProbability(1304,2306,10);
    // //     newMatsIns.setProbability(1304,2307,10);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // ////////////////////gem

    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1400,2400,200);
    // //     newMatsIns.setProbability(1400,2401,200);
    // //     newMatsIns.setProbability(1400,2402,200);
    // //     newMatsIns.setProbability(1400,2403,200);
    // //     newMatsIns.setProbability(1400,2404,40);
    // //     newMatsIns.setProbability(1400,2405,40);
    // //     newMatsIns.setProbability(1400,2406,40);
    // //     newMatsIns.setProbability(1400,2407,40);
    // //     newMatsIns.setProbability(1400,2408,9);
    // //     newMatsIns.setProbability(1400,2409,9);
    // //     await sleep(1000);
    // //     newMatsIns.setProbability(1400,2410,9);
    // //     newMatsIns.setProbability(1400,2411,9);
    // //     newMatsIns.setProbability(1400,2412,1);
    // //     newMatsIns.setProbability(1400,2413,1);
    // //     newMatsIns.setProbability(1400,2414,1);
    // //     newMatsIns.setProbability(1400,2415,1);
    // //     newMatsIns.setProbability(1400,2416,0);
    // //     newMatsIns.setProbability(1400,2417,0);
    // //     newMatsIns.setProbability(1400,2418,0);
    // //     newMatsIns.setProbability(1400,2419,0);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1401,2400,10);
    // //     newMatsIns.setProbability(1401,2401,10);
    // //     newMatsIns.setProbability(1401,2402,10);
    // //     newMatsIns.setProbability(1401,2403,10);
    // //     newMatsIns.setProbability(1401,2404,10);
    // //     newMatsIns.setProbability(1401,2405,10);
    // //     newMatsIns.setProbability(1401,2406,10);
    // //     newMatsIns.setProbability(1401,2407,10);
    // //     newMatsIns.setProbability(1401,2408,4);
    // //     newMatsIns.setProbability(1401,2409,4);
    // //     await sleep(1000);
    // //     newMatsIns.setProbability(1401,2410,4);
    // //     newMatsIns.setProbability(1401,2411,4);
    // //     newMatsIns.setProbability(1401,2412,1);
    // //     newMatsIns.setProbability(1401,2413,1);
    // //     newMatsIns.setProbability(1401,2414,1);
    // //     newMatsIns.setProbability(1401,2415,1);
    // //     newMatsIns.setProbability(1401,2416,0);
    // //     newMatsIns.setProbability(1401,2417,0);
    // //     newMatsIns.setProbability(1401,2418,0);
    // //     newMatsIns.setProbability(1401,2419,0);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1402,2400,50);
    // //     newMatsIns.setProbability(1402,2401,50);
    // //     newMatsIns.setProbability(1402,2402,50);
    // //     newMatsIns.setProbability(1402,2403,50);
    // //     newMatsIns.setProbability(1402,2404,70);
    // //     newMatsIns.setProbability(1402,2405,70);
    // //     newMatsIns.setProbability(1402,2406,70);
    // //     newMatsIns.setProbability(1402,2407,70);
    // //     newMatsIns.setProbability(1402,2408,100);
    // //     newMatsIns.setProbability(1402,2409,100);
    // //     await sleep(1000);
    // //     newMatsIns.setProbability(1402,2410,100);
    // //     newMatsIns.setProbability(1402,2411,100);
    // //     newMatsIns.setProbability(1402,2412,29);
    // //     newMatsIns.setProbability(1402,2413,29);
    // //     newMatsIns.setProbability(1402,2414,29);
    // //     newMatsIns.setProbability(1402,2415,29);
    // //     newMatsIns.setProbability(1402,2416,1);
    // //     newMatsIns.setProbability(1402,2417,1);
    // //     newMatsIns.setProbability(1402,2418,1);
    // //     newMatsIns.setProbability(1402,2419,1);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1403,2400,2);
    // //     newMatsIns.setProbability(1403,2401,2);
    // //     newMatsIns.setProbability(1403,2402,2);
    // //     newMatsIns.setProbability(1403,2403,2);
    // //     newMatsIns.setProbability(1403,2404,5);
    // //     newMatsIns.setProbability(1403,2405,5);
    // //     newMatsIns.setProbability(1403,2406,5);
    // //     newMatsIns.setProbability(1403,2407,5);
    // //     newMatsIns.setProbability(1403,2408,10);
    // //     newMatsIns.setProbability(1403,2409,10);
    // //     await sleep(1000);
    // //     newMatsIns.setProbability(1403,2410,10);
    // //     newMatsIns.setProbability(1403,2411,10);
    // //     newMatsIns.setProbability(1403,2412,7);
    // //     newMatsIns.setProbability(1403,2413,7);
    // //     newMatsIns.setProbability(1403,2414,7);
    // //     newMatsIns.setProbability(1403,2415,7);
    // //     newMatsIns.setProbability(1403,2416,1);
    // //     newMatsIns.setProbability(1403,2417,1);
    // //     newMatsIns.setProbability(1403,2418,1);
    // //     newMatsIns.setProbability(1403,2419,1);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // // await sleep(1000);
    // // try {

    // //     newMatsIns.setProbability(1404,2400,1);
    // //     newMatsIns.setProbability(1404,2401,1);
    // //     newMatsIns.setProbability(1404,2402,1);
    // //     newMatsIns.setProbability(1404,2403,1);
    // //     newMatsIns.setProbability(1404,2404,2);
    // //     newMatsIns.setProbability(1404,2405,2);
    // //     newMatsIns.setProbability(1404,2406,2);
    // //     newMatsIns.setProbability(1404,2407,2);
    // //     newMatsIns.setProbability(1404,2408,7);
    // //     newMatsIns.setProbability(1404,2409,7);
    // //     await sleep(1000);
    // //     newMatsIns.setProbability(1404,2410,7);
    // //     newMatsIns.setProbability(1404,2411,7);
    // //     newMatsIns.setProbability(1404,2412,10);
    // //     newMatsIns.setProbability(1404,2413,10);
    // //     newMatsIns.setProbability(1404,2414,10);
    // //     newMatsIns.setProbability(1404,2415,10);
    // //     newMatsIns.setProbability(1404,2416,5);
    // //     newMatsIns.setProbability(1404,2417,5);
    // //     newMatsIns.setProbability(1404,2418,5);
    // //     newMatsIns.setProbability(1404,2419,5);
    // // } catch (error) {
    // //     console.error(new Error);
    // // }

    // await sleep(1000);
};

async function sleep(ms = 0) {
    return new Promise((r) => setTimeout(r, ms));
    //return new Promise(r => setTimeout(r, ms/1000));
}
