pragma solidity ^0.4.25;

import "./libraries/math.sol";
import "./libraries/OMD.sol";

library Address {
    function isContract(address account) internal view returns (bool) {
        uint256 size;
        assembly { size := extcodesize(account) }
        return size > 0;
    }
}

interface master{
    function inquire_location(address _address) external view returns(uint16, uint16);
    function inquire_slave_address(uint16 _slave) external view returns(address);
    function inquire_land_info(uint16 _city, uint16 _id) external view returns(uint8,uint8,uint8,uint8,uint8,uint8,uint8,uint8,uint8,uint8);
    function domain_attribute(uint16 _city,uint16 _id, uint8 _index) external;
    
    function inquire_tot_attribute(uint16 _slave, uint16 _domain) external view returns(uint8[5]);
    function inquire_owner(uint16 _city, uint16 id) external view returns(address);
}

interface newMaterialsInterface{
    //function control_burn(uint8 boxIndex, uint8 materialIndex, address target, uint256 amount) external;
    function burn(uint256 tokenIndex, address from, uint256 _amount)external;
}

interface chaTokenInterface{
    function getRandom() external returns(bytes32);
}

contract owned{
    address public manager;

    constructor() public{
        manager = msg.sender;
    }

    modifier onlymanager{
        require(msg.sender == manager);
        _;
    } 

    function transferownership(address _new_manager) public onlymanager {
        manager = _new_manager;
    }

}

contract landsMix is owned, setOperator{  
    event mix_result(address indexed player, bool result, uint16 rate); 

    //address arina_address = 0xac5abfa95fbf56f4bb77fd973bd16810b01b8099;
    //address master_address = 0x71cf30580368133796232fa515d3e39fd5112ceb;
    
    //address material_contract = 0x55ffe588dd6860a02719adf61d294fca86558fc3;  
    
    uint16[5] paramA;
    uint16[5] paramB; 
    uint16[5] paramC; 
    uint16[5] paramD;
    uint16[5] paramE; 
    uint16[5] paramF;
    
    constructor() public{
        paramA=[50,30,10,5,1];
        paramB=[100,50,30,10,5]; 
        paramC=[200,100,50,30,10];
        paramD=[300,150,100,50,30];
        paramE=[400,200,150,100,50];
        paramF=[500,300,200,150,100]; 

    } 
    
    using SafeMath for uint256;
    using SafeMath16 for uint16;
    using SafeMath8 for uint8;
    using Address for address;
    
    function materialMix(uint8 proIndex, uint[] mixArray) public {
        (uint16 _city, uint16 _id) = master(addr("master")).inquire_location(msg.sender);
        require(msg.sender == master(addr("master")).inquire_owner(_city, _id), "not owner!!!!");
        //_proIndex 要提升的屬性 
        uint8 attribute; 
        uint16 total;     //機率總和 
        uint16 random = uint16(keccak256(abi.encodePacked(now, getRandom(), mixArray.length)));

        //所在位置屬性提升機率
        total = require_local_chance(proIndex, mixArray, _city, _id); 

        for(uint8 j=0;j < mixArray.length; j++){                        //素材銷毀
            uint tokenId;
            tokenId = mixArray[j];
            // material(material_address).control_burn((proIndex-1),(mixArray[j]-1),msg.sender,1);
            newMaterialsInterface(addr("newMats")).burn(tokenId, msg.sender, 1);
        }  
        
        if((random%1000) <= total){
            master(addr("master")).domain_attribute(_city, _id, (proIndex-1));
            emit mix_result(msg.sender,true,total);
        } else{
            emit mix_result(msg.sender,false,total);
        }
    
    }//融合
    
    function getParam(uint index1,uint16 index2) private view returns(uint16){     
        if((index1>=2001 && index1<2006) || index1==2101 || index1==2102 || (index1>=2201 && index1<2206) || index1==2301 || index1==2302 || (index1>=2401 && index1<2406)){
            return paramA[index2];
        }else if((index1>=2006 && index1<2011) || index1==2103 || index1==2104 || (index1>=2206 && index1<2211) || index1==2303 || index1==2304 || (index1>=2406 && index1<2411)){
            return paramB[index2];
        }else if((index1>=2011 && index1<2016) || index1==2105 || index1==2106 || (index1>=2211 && index1<2216) || index1==2305 || index1==2306 || (index1>=2411 && index1<2416)){
            return paramC[index2];
        }else if((index1>=2016 && index1<2021) || index1==2107 || index1==2108 || (index1>=2216 && index1<2221)|| (index1>=2416 && index1<2421)){
            return paramD[index2];
        }else if((index1>=2021 && index1<2031) || index1==2109 || index1==2110 || index1==2307 || index1==2308){
            return paramF[index2];
        }else{
            return paramE[index2];
        }
    }
    
    function getRandom() public returns(bytes32){
        uint256[1] memory m;
        assembly {
            if iszero(staticcall(not(0), 0xC327fF1025c5B3D2deb5e3F0f161B3f7E557579a, 0, 0x0, m, 0x20)) {
                revert(0, 0)
            }
        }
        return keccak256(abi.encodePacked(m[0]));
    }
    
    function _index_chance(uint[]mixArray, uint8 index2) public view returns (uint16){
        uint16 total = 0;
        for(uint8 j=0;j<mixArray.length;j++){          //各個素材機率加總
            total = total.add(getParam(mixArray[j],index2));
        } 
        return total;
    }

    //原本土地屬性 + 祝福屬性
    function require_attribute(uint8 proIndex, uint16 city, uint16 id) public view returns (uint8){
        uint8 produce; //欲增加屬性(1~5)
        
        if(proIndex == 1){
            (produce,,,,,,,,,) = master(addr("master")).inquire_land_info(city,id);
        }else if(proIndex == 2){
            (,produce,,,,,,,,) = master(addr("master")).inquire_land_info(city,id);
        }else if(proIndex == 3){
            (,,produce,,,,,,,) = master(addr("master")).inquire_land_info(city,id);
        }else if(proIndex == 4){
            (,,,produce,,,,,,) = master(addr("master")).inquire_land_info(city,id);
        }else{
            (,,,,produce,,,,,) = master(addr("master")).inquire_land_info(city,id);
        }

        uint8 attribute = produce.add(master(addr("master")).inquire_tot_attribute(city,id)[(proIndex-1)]);//原本土地屬性 + 祝福屬性
        return attribute;
    }

    //成功機率總和
    function require_local_chance(uint8 proIndex, uint[]mixArray, uint16 city, uint16 id)public view returns(uint16){
        uint8 index2; //級距
        uint8 attribute = require_attribute(proIndex, city, id);//原本土地屬性 + 祝福屬性
        require(attribute>=0 && attribute < 10, "attribute out of range!!!");//屬性上限為10
        
        //依現有等級級距去找相呼應的機率index
        if( attribute < 2)
            {index2 = 0;}
        else if(attribute > 1 && attribute < 4)
            {index2 = 1; }
        else if(attribute > 3 && attribute < 6)
            {index2 = 2;}
        else if(attribute > 5 && attribute < 8)
            {index2 = 3;}
        else
            {index2 = 4;}

        uint16 total = _index_chance(mixArray, index2);
        return total;
    }
}

