const master = artifacts.require("landTycoonMaster");

module.exports = async function() {

    account = "0x2AcceFD6FBf941090a613684D7994Dc70b8E970D"

    let masterIns = await master.deployed();

    // console.log("\nf/register...")
    // try {
    //     let name = "testUser";
    //     await masterIns.register(name, {from: account});
    //     let b32Name = await masterIns.addressToName.call(account);
    //     let confirmName = await masterIns.bytes32ToString(b32Name);
    //     console.log("name=");
    //     console.log(confirmName);
    // } catch (error) {
    //     console.error(new Error);
    // }

    console.log("\nf/rollDice...");
    try {
        let rollDice = await masterIns.rollDice({from: account});
        let events = rollDice.receipt.logs;
        console.log("local=");
        console.log(events[0].args[1].toNumber()+", "+ events[0].args[2].toNumber());
    } catch (error) {
        console.error(new Error);
    }


    // console.log("\nf/receiveApproval + _buyland...");
    // try {
    //     const city = 1;
    //     const domin = 3;
        
    //     await masterIns.fly(city, domin, {value:10**19, from: account});
    //     await arinaIns.approveAndCall(master.address, 2000*10**8, "0x1");
    // } catch (error) {
    //     console.error(new Error);
    // }
    
    // console.log("\nf/reward...");
    // try {
    //     const city = 1;
    //     const domin = 3;
        
    //     let reward = await masterIns.reward(0, city, domin, {from: account});
    //     let events = reward.receipt.logs;
    //     console.log(events);
    // } catch (error) {
    //     console.error(new Error);
    // }
}