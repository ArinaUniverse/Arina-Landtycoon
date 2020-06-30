const labalotto = artifacts.require("labaLotto");

contract('labalotto', (accounts) => {
    //////public msg
    it('constructor', async () => {
        console.log("#####################################");
        console.log("@constructor: ");
        let labalottoInstance = await labalotto.deployed();
        
        let playerNumberA = await labalottoInstance.playerNumberA.call();
        let playerNumberB = await labalottoInstance.playerNumberB.call();
        let poolA = await labalottoInstance.poolA.call();
        let poolB = await labalottoInstance.poolB.call();
        let poolTeam = await labalottoInstance.poolTeam.call();
        let winnerA = await labalottoInstance.require_winnerA();

        console.log("playerNumberA:");
        console.log(playerNumberA.toNumber());
        console.log("playerNumberB:");
        console.log(playerNumberB.toNumber());
        console.log("poolA:");
        console.log(poolA.toNumber());
        console.log("poolB:");
        console.log(poolB.toNumber());
        console.log("poolTeam:");
        console.log(poolTeam.toNumber());
        console.log("winnerA:");
        console.log(winnerA[0]);

        assert.equal(playerNumberA.toNumber(), 0, "playerNumberA not 0");
        assert.equal(playerNumberB.toNumber(), 1, "playerNumberA not 1");
        assert.equal(poolA.toNumber(), 0, "poolA not 0");
        assert.equal(poolB.toNumber(), 0, "poolB not 0");
        assert.equal(poolTeam.toNumber(), 0, "poolTeam not 0");
    });

    // it('1 times play', async () => {
    //     console.log("#####################################");
    //     console.log("@1 times play: ");
    //     const labalottoInstance = await labalotto.deployed();
    //     let payment = "1000000000000000000";
    
    //     labalottoInstance.start_game({from: accounts[0], value:payment});

    //     const playerNumberA = await labalottoInstance.playerNumberA.call();
    //     const playerNumberB = await labalottoInstance.playerNumberB.call();
    //     const poolA = await labalottoInstance.poolA.call();
    //     const poolB = await labalottoInstance.poolB.call();
    //     const poolTeam = await labalottoInstance.poolTeam.call();
    //     let expectedpoolA = 8*10**17;
    //     let expectedpoolB = 10**17;
    //     let expectedpoolTeam = 10**17;
    //     console.log("playerNumberA:");
    //     console.log(playerNumberA.toNumber());
    //     assert.equal(playerNumberA.toNumber(), 1, "playerNumberA not 1");
    //     assert.equal(playerNumberB.toNumber(), 1, "playerNumberA not 1");
    //     assert.equal(String(poolA), expectedpoolA, "poolA not 0.8");
    //     assert.equal(String(poolB), expectedpoolB, "poolB not 0.1");
    //     assert.equal(String(poolTeam), expectedpoolTeam, "poolTeam not 0.1");
    // });

    // it('10 times play', async () => {
    //     console.log("#####################################");
    //     console.log("@10 times play: ");
    //     const labalottoInstance = await labalotto.deployed();
    //     let payment = "1000000000000000000";
        
    //     labalottoInstance.start_game({from: accounts[0], value:payment});
    //     labalottoInstance.start_game({from: accounts[1], value:payment});
    //     labalottoInstance.start_game({from: accounts[2], value:payment});
    //     labalottoInstance.start_game({from: accounts[3], value:payment});
    //     labalottoInstance.start_game({from: accounts[4], value:payment});
    //     labalottoInstance.start_game({from: accounts[5], value:payment});
    //     labalottoInstance.start_game({from: accounts[6], value:payment});
    //     labalottoInstance.start_game({from: accounts[7], value:payment});
    //     labalottoInstance.start_game({from: accounts[8], value:payment});
    //     labalottoInstance.start_game({from: accounts[9], value:payment});
        
    //     const playerNumberA = await labalottoInstance.playerNumberA.call();
    //     const playerNumberB = await labalottoInstance.playerNumberB.call();
    //     const poolA = await labalottoInstance.poolA.call();
    //     const poolB = await labalottoInstance.poolB.call();
    //     const poolTeam = await labalottoInstance.poolTeam.call();
    //     let expectedpoolA = 8*10**18;
    //     let expectedpoolB = 10**18;
    //     let expectedpoolTeam = 10**18;
    //     console.log("playerNumberA =>");
    //     console.log(playerNumberA.toNumber());
    //     console.log("playerNumberB =>");
    //     console.log(playerNumberB.toNumber());
    //     assert.equal(playerNumberA.toNumber(), 10, "playerNumberA not 10");
    //     assert.equal(playerNumberB.toNumber(), 1, "playerNumberB not 1");
    //     console.log("poolA =>");
    //     console.log(String(poolA));
    //     console.log("poolB =>");
    //     console.log(String(poolB));
    //     console.log("poolTeam =>");
    //     console.log(String(poolTeam));
    //     assert.equal(String(poolA), expectedpoolA, "poolA not 8");
    //     assert.equal(String(poolB), expectedpoolB, "poolB not 1");
    //     assert.equal(String(poolTeam), expectedpoolTeam, "poolTeam not 0");
    // });

    it('1000 times play', async () => {
        console.log("#####################################");
        console.log("@1000 times play: ");
        let labalottoInstance = await labalotto.deployed();
        let payment = 10**6;
        let arr = [accounts[0],accounts[1],accounts[2],accounts[3],accounts[4],accounts[5],accounts[6],accounts[7],accounts[8],accounts[9]];
        let times = 100


        //async function play_game(){
            for(let i=0;i<times;i++){
                //setTimeout(function(){
                    labalottoInstance.start_game({from: accounts[0], value:payment});
                    labalottoInstance.start_game({from: accounts[1], value:payment});
                    labalottoInstance.start_game({from: accounts[2], value:payment});
                    labalottoInstance.start_game({from: accounts[3], value:payment});
                    labalottoInstance.start_game({from: accounts[4], value:payment});
                    labalottoInstance.start_game({from: accounts[5], value:payment});
                    labalottoInstance.start_game({from: accounts[6], value:payment});
                    labalottoInstance.start_game({from: accounts[7], value:payment});
                    labalottoInstance.start_game({from: accounts[8], value:payment});
                    labalottoInstance.start_game({from: accounts[9], value:payment});
                //},i*500);
            }
        //}

        
        //async function show_result(){
                let playerNumberA = await labalottoInstance.playerNumberA.call();
                let playerNumberB = await labalottoInstance.playerNumberB.call();
                let poolA = await labalottoInstance.poolA.call();
                let poolB = await labalottoInstance.poolB.call();
                let poolTeam = await labalottoInstance.poolTeam.call();
                let winnerA = await labalottoInstance.require_winnerA();
                // let expectedpoolA = 0;
                // let expectedpoolB = 10**8;
                // let expectedpoolTeam = 0;

                console.log("playerNumberA =>");
                console.log(playerNumberA.toNumber());
                console.log("playerNumberB =>");
                console.log(playerNumberB.toNumber());
                //assert.equal(playerNumberA.toNumber(), 0, "playerNumberA not 0");
                //assert.equal(playerNumberB.toNumber(), 2, "playerNumberB not 2");
                
                
                console.log("prizeNumberA:");
                console.log(winnerA[1].toNumber());
                console.log("winnerA:");
                console.log(arr.indexOf(winnerA[0])+1);
                console.log(winnerA[0]);
                
                console.log("poolA =>");
                console.log(String(poolA.toNumber()/payment)+"ETR");
                console.log("poolB =>");
                console.log(String(poolB.toNumber()/payment)+"ETR");
                console.log("poolTeam =>");
                console.log(String(poolTeam.toNumber()/payment)+"ETR");
                //assert.equal(String(poolA), expectedpoolA, "poolA not 0");
                //assert.equal(String(poolB), expectedpoolB, "poolB not 10");
                //assert.equal(String(poolTeam), expectedpoolTeam, "poolTeam not 0");
            //}
     
        
    });


    ////////////////////////////////////////////
    // it('100000 times play', async () => {
    //     console.log("#####################################");
    //     console.log("@+99000 times play: ");
    //     const labalottoInstance = await labalotto.deployed();
    //     let payment = 10**6;
    //     let times = 9900
    //     let arr = [accounts[0],accounts[1],accounts[2],accounts[3],accounts[4],accounts[5],accounts[6],accounts[7],accounts[8],accounts[9]];

    //     async function play10(){
    //         labalottoInstance.start_game({from: accounts[0], value:payment});
    //         labalottoInstance.start_game({from: accounts[1], value:payment});
    //         labalottoInstance.start_game({from: accounts[2], value:payment});
    //         labalottoInstance.start_game({from: accounts[3], value:payment});
    //         labalottoInstance.start_game({from: accounts[4], value:payment});
    //         labalottoInstance.start_game({from: accounts[5], value:payment});
    //         labalottoInstance.start_game({from: accounts[6], value:payment});
    //         labalottoInstance.start_game({from: accounts[7], value:payment});
    //         labalottoInstance.start_game({from: accounts[8], value:payment});
    //         labalottoInstance.start_game({from: accounts[9], value:payment});
    //         let playerNumberA = await labalottoInstance.playerNumberA.call();
    //         return playerNumberA
    //     }
                
    //     async function show_result(){
    //         let playerNumberA = await labalottoInstance.playerNumberA.call();
    //         let playerNumberB = await labalottoInstance.playerNumberB.call();
    //         let poolA = await labalottoInstance.poolA.call();
    //         let poolB = await labalottoInstance.poolB.call();
    //         let poolTeam = await labalottoInstance.poolTeam.call();
    //         let winnerB = await labalottoInstance.require_winnerB();
    //         // let expectedpoolA = 0;
    //         // let expectedpoolB = 0;
    //         // let expectedpoolTeam = 0;
    //         console.log("playerNumberA =>");
    //         console.log(playerNumberA.toNumber());
    //         console.log("playerNumberB =>");
    //         console.log(playerNumberB.toNumber());
    //         // assert.equal(playerNumberA.toNumber(), 0, "playerNumberA not 0");
    //         // assert.equal(playerNumberB.toNumber(), 1, "playerNumberB not 1");

            
    //         console.log(winnerB[0]);
    //         console.log("prizeNumberB:");
    //         console.log(winnerB[1].toNumber());
    //         console.log("prizeNumberA:");
    //         console.log(winnerB[2].toNumber());
    //         console.log("winnerB:");
    //         console.log(arr.indexOf(winnerB[0])+1);

    //         console.log("poolA =>");
    //         console.log(String(poolA));
    //         console.log("poolB =>");
    //         console.log(String(poolB));
    //         console.log("poolTeam =>");
    //         console.log(String(poolTeam));
    //         // assert.equal(String(poolA), expectedpoolA, "poolA not 0");
    //         // assert.equal(String(poolB), expectedpoolB, "poolB not 0");
    //         // assert.equal(String(poolTeam), expectedpoolTeam, "poolTeam not 0");
    //     }
        
        
    //     for(i=0;i<times;i++){
    //         //setTimeout( function(){
    //             play10();
    //             // Promise.resolve().then(function(playerNumberA){
    //             //     console.log("playerNumberA="+playerNumberA);
    //             //     if(playerNumberA.toNumber()==0){
    //             //         console.log("finish!!!");
    //             //     }
    //             // });
    //         //}, i);
    //     };

    //     await show_result();

    // });
});