const characterExternal = artifacts.require("characterExternal");
const characterToken = artifacts.require("characterToken");
const talk = artifacts.require("talk");


contract('talk', (accounts) => {
    ////public msg
    it('@publicNumber = 0', async () => {
        const talkInstance = await talk.deployed();
        const publicNumber = (await talkInstance.get_PublicNumber.call()).toNumber();
        assert.equal(publicNumber, 0, "publicNumber not 0");
    });
    
    it('public msg', async () => {
        console.log("#####################################");
        console.log("@TEST send public msg: ");
        const characterTokenInstance = await characterToken.deployed();
        const characterExternalInstance = await characterExternal.deployed();
        const talkInstance = await talk.deployed();

        ///create Character
        await characterTokenInstance.setchaExContract(characterExternalInstance.address);
        await characterExternalInstance.setChaTokenContract(characterTokenInstance.address);

        let player = accounts[0];
        let _name = "PlayerName";
        let avatar = 1;
        let ethnicity = 1;

        await characterExternalInstance.createCharacter(_name, avatar, ethnicity, {from: accounts[0],value:10**18});
        let playerId = (await characterTokenInstance.inquireOwnedTokensId(player)).toNumber();
        console.log("playerId: " + playerId);

        ///Input data
        let conversation01 = "conversation01"
        await talkInstance.talk_everyone(playerId, conversation01);
        console.log("conversation: " + conversation01);

        let conversation02 = "conversation02"
        await talkInstance.talk_everyone(playerId, conversation02);
        console.log("conversation: " + conversation02);
        
        ///output data
        //let publicMsg = await talkInstance.publicConversation.call(index);
        let publicNumber = await talkInstance.get_PublicNumber.call();
        console.log("publicNumber: ");
        console.log(publicNumber.toNumber());
        let msgIndex = publicNumber.toNumber()-1;
        console.log("get_public_msg: ");
        console.log(msgIndex);
        while(msgIndex>=0){
            let getPublicMsg = await talkInstance.get_public_msg.call(msgIndex);
            //console.log(getPublicMsg);
            let speakId = getPublicMsg[0].toNumber();
            let speakerName = await characterTokenInstance.inquireInfo(speakId);
            let publicMessage = getPublicMsg[1];
            console.log("speakId =>");
            console.log(speakId);
            console.log("speakerName =>");
            console.log(speakerName[0]);
            console.log("message =>");
            console.log(publicMessage);
            assert.equal(speakId, playerId, "speakId error!!!!!");
            msgIndex--;
        }
        
    });


    ///private msg

    it('private msg', async () => {
        console.log("#####################################");
        console.log("@TEST send private msg: ");
        const characterTokenInstance = await characterToken.deployed();
        const characterExternalInstance = await characterExternal.deployed();
        const talkInstance = await talk.deployed();

        ///create Character
        await characterTokenInstance.setchaExContract(characterExternalInstance.address);
        await characterExternalInstance.setChaTokenContract(characterTokenInstance.address);

        let player1 = accounts[1];
        let _name1 = "PlayerName01";
        let avatar = 1;
        let ethnicity = 1;

        let player2 = accounts[2];
        let _name2 = "PlayerName02";

        let player3 = accounts[3];
        let _name3 = "PlayerName03";

        await characterExternalInstance.createCharacter(_name1, avatar, ethnicity, {from: player1, value:10**18});
        await characterExternalInstance.createCharacter(_name2, avatar, ethnicity, {from: player2, value:10**18});
        await characterExternalInstance.createCharacter(_name3, avatar, ethnicity, {from: player3, value:10**18});
        let playerId1 = (await characterTokenInstance.inquireOwnedTokensId(player1)).toNumber();
        let playerId2 = (await characterTokenInstance.inquireOwnedTokensId(player2)).toNumber();
        let playerId3 = (await characterTokenInstance.inquireOwnedTokensId(player3)).toNumber();
        console.log("playerId1: " + playerId1);
        console.log("playerId2: " + playerId2);
        console.log("playerId3: " + playerId3);

        ///Input data
        let _conversation01 = "my private Msg01"
        let _conversation02 = "my private Msg02"
        await talkInstance.talk_anothor(playerId1, playerId2, _conversation01);
        await talkInstance.talk_anothor(playerId3, playerId2, _conversation02);
        await talkInstance.talk_anothor(playerId2, playerId1, _conversation02);
        //output data
        let privateNumber = await talkInstance.get_my_msg_size.call(playerId2);
        let privateIndex = privateNumber.toNumber()-1;
        console.log("my_msg_index:");
        console.log(privateIndex);
        console.log("get_my_msg: ");
        while(privateIndex >= 0){
            let getMyMsg = await talkInstance.get_my_msg.call(playerId2, privateIndex);
            let speakId = getMyMsg[0].toNumber();
            let speakerName = await characterTokenInstance.inquireInfo(speakId);
            let privateMessage = getMyMsg[1];
            
            // console.log("speakId =>");
            // console.log(speakId);
            // console.log("speakerName =>");
            // console.log(speakerName[0]);
            // console.log("message =>");
            // console.log(privateMessage);
            privateIndex--;
            
        }
        
        // assert.equal(playerId1, speakId, "privateMessage speakerID error!!");
        // assert.equal(_conversation, privateMessage, "privateMessage conversation error!!");
    });
});