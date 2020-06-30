const yakuka = artifacts.require("yakuka");
const arina = artifacts.require("arina");

contract('yakuka TEST', (accounts) => {
    it('f/play_paper', async () => {
        console.log("\nf/play_paper...");
        let yakukaIns = await yakuka.deployed();
        let arinaIns = await arina.deployed();

        console.log("balance:")
        let balance = await arinaIns.balanceOf.call(accounts[0]);
        console.log(balance.toNumber());
        let play_paper = await yakukaIns.play_paper();

        let events = play_paper.receipt.logs;
        //console.log(events);
        console.log("contract:");
        console.log(events[0].args[1].toNumber());
        console.log("player:");
        console.log(events[0].args[2].toNumber());
        console.log("record:");
        console.log(events[0].args[3].toNumber());
        balance = await arinaIns.balanceOf.call(accounts[0]);
        console.log("balance:")
        console.log(balance.toNumber());
    });

    it('f/play_scissors', async () => {
        console.log("\nf/play_scissors...");
        let yakukaIns = await yakuka.deployed();
        let arinaIns = await arina.deployed();
        
        let balance = await arinaIns.balanceOf.call(accounts[0]);
        console.log(balance.toNumber());
        let play_scissors = await yakukaIns.play_scissors();

        let events = play_scissors.receipt.logs;
        //console.log(events);
        console.log("contract:");
        console.log(events[0].args[1].toNumber());
        console.log("player:");
        console.log(events[0].args[2].toNumber());
        console.log("record:");
        console.log(events[0].args[3].toNumber());
        balance = await arinaIns.balanceOf.call(accounts[0]);
        console.log("balance:")
        console.log(balance.toNumber());
    });

    it('f/play_stone', async () => {
        console.log("\nf/play_stone...");
        let yakukaIns = await yakuka.deployed();
        let arinaIns = await arina.deployed();
        
        let balance = await arinaIns.balanceOf.call(accounts[0]);
        console.log(balance.toNumber());
        let play_stone = await yakukaIns.play_stone();

        let events = play_stone.receipt.logs;
        //console.log(events);
        console.log("contract:");
        console.log(events[0].args[1].toNumber());
        console.log("player:");
        console.log(events[0].args[2].toNumber());
        console.log("record:");
        console.log(events[0].args[3].toNumber());
        balance = await arinaIns.balanceOf.call(accounts[0]);
        console.log("balance:")
        console.log(balance.toNumber());
    });

    it('f/play_stone*50', async () => {
        console.log("\nf/play_stone*50...");
        let yakukaIns = await yakuka.deployed();
        for(i=0; i<50; i++){
            await yakukaIns.play_stone();
        }
    });

    it('f/play_scissors*50', async () => {
        console.log("\nf/play_scissors*50...");
        let yakukaIns = await yakuka.deployed();
        for(i=0; i<50; i++){
            await yakukaIns.play_scissors();
        }
    });

    it('f/play_paper*50', async () => {
        console.log("\nf/play_paper*50...");
        let yakukaIns = await yakuka.deployed();
        for(i=0; i<50; i++){
            await yakukaIns.play_paper();
        }
    });
});