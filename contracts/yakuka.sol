pragma solidity ^0.4.25;

import "./libraries/OMD.sol";

contract ERC20Basic {
    uint256 public totalSupply;
    function balanceOf(address who) public constant returns (uint256);
    function transfer(address to, uint256 value) public returns(bool);
}

/////遊戲合約/////
contract yakuka is Manager, setOperator{

//初始設定
    bool public stop = false;
    
    mapping (address => string) lastResult;
    mapping (address => uint) readyTime;
    uint public airdrop_Arina = 500*10**8 ;  //Arina幣為6位小數
    uint public RewardAmount = 10*10**8;

    uint public total_airdrop_Arina = 84000000*10**8; //Arina發送上限為8400萬顆 (小數點6位)
    uint24 public Probability = 1000000;  /////中獎機率1/1000000

    event Play_game(address indexed from, uint8 player, uint8 comp, uint8 record);
    //紀錄遊戲結果
    

//管理權限

    function stop_game()onlyManager public{
        stop = true ;
    }
    
    function start_game()onlyManager public{
        stop = false ;
    }
    
    function withdraw_Arina(uint _amount)onlyManager public{
        require(ERC20Basic(addr("arina")).transfer(manager, _amount*10**8));
    }
    
    function withdraw_eth()onlyManager public{
        manager.transfer(address(this).balance);
    }

//來猜拳!!!
    function () payable public{
        if (msg.value == 0){
        play_game(0);
        }
    }

    function play_paper()public{
        play_game(0);
    }

    function play_scissors()public{
        play_game(1);
    }

    function play_stone()public{
        play_game(2);
    }

    function play_game(uint8 player) internal{
        require(stop == false,"stop == false!!!");
        require(player <= 2,"player selection errror!!!");
        //檢查遊戲次數未小於限制次數
        
        uint8 comp = uint8(getRandom())%3;
        uint8 result = compare(player, comp);
        
        if (result == 2){ //玩家贏
            require(ERC20Basic(addr("arina")).transfer(msg.sender, RewardAmount),"transfer failed!!!");
            lastResult[msg.sender] = "Win!!!";
        }
        else if(result == 1){ //平手
            lastResult[msg.sender] = "Lose!!!";
        }
        else if(result == 0){ //玩家輸
            lastResult[msg.sender] = "Draw!!!";
        } 
        else revert();
        emit Play_game(msg.sender, player, comp, result);
    }

//判斷用function
    function compare(uint8 _player,uint _comp) pure internal returns(uint8 result){
        // input     0 => 布   1 => 剪刀   2 => 石頭
        // output    0 => 輸   1 => 平手   2 => 贏
        uint8 _result;

        if (_player==0 && _comp==2){  //布贏石頭 (玩家贏)
            _result = 2;
        }
        else if(_player==2 && _comp==0){ //石頭輸布(玩家輸)
            _result = 0;
        }
        else if(_player == _comp){ //平手
            _result = 1;
        }
        else{
            if (_player > _comp){ //玩家贏 (玩家贏)
                _result = 2;
            }
            else{ //玩家輸
                _result = 0;
            }
        }
        return _result;
    }
    
//查詢
    function Arina_balance() view public returns(uint _balance){
        return ERC20Basic(addr("arina")).balanceOf(this);
    }
    
    function view_readyTime(address _address) view public returns(uint _readyTime){
        if (block.timestamp >= readyTime[_address]){
            return 0 ;
        }
        else{
            return readyTime[_address] - block.timestamp ;
        }
    }
    function self_readyTime() view public returns(uint _readyTime){
        return view_readyTime(msg.sender);
    }

    function getRandom() public returns(uint){
        uint256[1] memory m;
        assembly {
            if iszero(staticcall(not(0), 0xC327fF1025c5B3D2deb5e3F0f161B3f7E557579a, 0, 0x0, m, 0x20)) {
                revert(0, 0)
            }
        }
        return m[0];
    }

    function require_lastResult(address player) view public returns(string){
        return lastResult[player];
    }

}