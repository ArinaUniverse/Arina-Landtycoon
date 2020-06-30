const master = artifacts.require("landTycoonMaster");
const arina = artifacts.require("arina");
const trade = artifacts.require("trade");
contract('master TEST', (accounts) => {
    
    it('f/register', async () => {
        console.log("\nf/register...")
        let masterIns = await master.deployed();
        let name = "testUser";
        await masterIns.register(name, {from: accounts[0]});
    });
    
    it('f/rollDice', async () => {
        console.log("\nf/rollDice...");
        let masterIns = await master.deployed();
        let rollDice = await masterIns.rollDice({from: accounts[0]});

    });

    it('f/payRent_ETH', async () => {
        console.log("\nf/payRent_ETH...")
        let masterIns = await master.deployed();

        let cost = [];

        for(j=1;j<6;j++){
            let levelCost = [];
            for(i=1;i<6;i++){
                let cost = Math.floor(await masterIns.ETH_count.call(i,j,1))/1000000000000000000;
                levelCost.push(cost);
            }
            cost[j] = {
                lv1: levelCost[0],
                lv2: levelCost[1], 
                lv3: levelCost[2], 
                lv4: levelCost[3], 
                lv5: levelCost[4],  
            };
            
        }
        console.table(cost);
    });

    it('f/buyLand_ETH', async () => {
        console.log("\nf/buyLand_ETH...")
        let masterIns = await master.deployed();

        let cost = [];

        for(j=1;j<6;j++){
            let levelCost = [];
            for(i=1;i<6;i++){
                let cost = Math.floor(await masterIns.ETH_count.call(i,j,2))/1000000000000000000;
                levelCost.push(cost);
            }
            cost[j] = {
                lv1: levelCost[0],
                lv2: levelCost[1], 
                lv3: levelCost[2], 
                lv4: levelCost[3], 
                lv5: levelCost[4],  
            };
            
        }
        console.table(cost);
    });

    it('f/exchange', async () => {
        console.log("\nf/exchange...")
        let masterIns = await master.deployed();
        let arinaIns = await arina.deployed();
        let tradeIns = await trade.deployed();
        let tan = 10**15;
        let city = 1;
        let value = 1;
        
        let beforeContractArina = await arinaIns.balanceOf.call(trade.address);
        let beforePlayerArina = await arinaIns.balanceOf.call(accounts[0]);
        console.log("contract trade: " + beforeContractArina);
        console.log("player arina: " + beforePlayerArina);

        await masterIns.exchange(city, value, {from: accounts[0], value: tan});
        let afterContractArina = await arinaIns.balanceOf.call(trade.address);
        let afterPlayerArina = await arinaIns.balanceOf.call(accounts[0]);
        console.log("contract trade: " + afterContractArina);
        console.log("player arina: " + afterPlayerArina);
        console.log((Math.floor(beforeContractArina) - Math.floor(afterContractArina))/100000000);
        console.log((Math.floor(afterPlayerArina) - Math.floor(beforePlayerArina))/100000000);
    });

});