pragma solidity ^0.4.25;

import "./libraries/math.sol";
import "./libraries/OMD.sol";

interface master{
    function owner_slave(uint _index) external view returns(address);
    function owner_slave_amount()external view returns(uint);
}

interface newMaterial{
    function mintable(uint256 _index, address target, uint256 mintedAmount) external;
    function burn(uint256 _index, address target, uint256 burnedAmount) external;
    function balanceOf(address _owner, uint256 tokenIndex)external view returns (uint256);
}

contract personCall is setOperator{ 
    uint randomTimes; 
    address[] public dungeons; 

    constructor() public{
        randomTimes = 0;
    } 

    function getRandom() public view returns(bytes32) {
        uint256[1] memory m;
        assembly {
            if iszero(staticcall(not(0), 0xC327fF1025c5B3D2deb5e3F0f161B3f7E557579a, 0, 0x0, m, 0x20)) {
                revert(0, 0)
            }
        }
        randomTimes += 1;
        return keccak256(abi.encodePacked(m[0], randomTimes));
    }

    function checkSlave() public view returns(bool){ 
        uint length = master(addr("master")).owner_slave_amount();
        for(uint i=1;i<=length;i++){
            address slave = master(addr("master")).owner_slave(i);
            if(msg.sender == slave){
                return true;
            }
        }
        return false;
        
    }
    
    function checkDungeons() public view returns(bool){ 
        for(uint i=0;i<dungeons.length;i++){
            if(msg.sender == dungeons[i]){
                return true;
            }
        }
        return false;
    }
    
    
    
    function callTreasureMin(uint256 index,address target, uint256 mintedAmount) public {    
        require(checkSlave() || checkDungeons(), "sender error");
        newMaterial(addr("newMats")).mintable(index, target, mintedAmount);
    }

 
    function callTreasureBurn(uint256 index, uint256 burnedAmount) public{       
        newMaterial(addr("newMats")).burn(index, msg.sender, burnedAmount);
    }
    
    function showtokenAmount(uint256 _index) public view returns (uint){         
        return newMaterial(addr("newMats")).balanceOf(msg.sender, _index);
    }

    
    
    function push_dungeons(address _dungeons_address) public onlyManager{               
        dungeons.push(_dungeons_address);
    }
    
    function change_dungeons_address(uint index,address _dungeons_address) public onlyManager{    
        dungeons[index] = _dungeons_address;
    }

}

