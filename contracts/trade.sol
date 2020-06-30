pragma solidity ^0.4.25;

import "./libraries/math.sol";
import "./libraries/OMD.sol";


interface ERC20 {
  function decimals() external view returns(uint8);
  function totalSupply() external view returns (uint256);
  function balanceOf(address who) external view returns (uint256);

  function transfer(address to, uint256 value) external returns(bool);
  function transferFrom(address _from, address _to, uint256 _value) external returns (bool success) ;
}

interface master{
    function inquire_location(address _address) external view returns(uint16, uint16);
    function inquire_slave_address(uint16 _slave) external view returns(address);
    function inquire_tot_building(uint16 _slave, uint16 _domain) external view returns(uint8[]);
    function owner_slave_amount()external view returns(uint);
    function owner_slave(uint _index) external view returns(address);
} 
 
interface newMaterialsInterface{
    // function showBoxAmount(uint8 _boxIndex) external view returns (uint);
    // function newContracts(uint _boxIndex) external view returns (address);
    function mintable(uint256 _index, address target, uint256 mintedAmount) external;
    function balanceOf(address _owner, uint256 tokenIndex)external view returns (uint);
    function safeTransferFrom(address _from, address _to, uint256 tokenIndex, uint256 _value, bytes  _data) external;
}


contract trade is setOperator{  

    //address public arina_address;
    //address public master_address;
    
    //address boxManager_address;
    //address public newMaterials_address;

    mapping(uint8 => mapping(uint16 => uint)) lv1BuyPrice; 
    mapping(uint8 => uint16) boxIndex;
    mapping(uint16 => uint) pool; 
    mapping(uint16 => mapping(uint => uint)) box_amount_city; 
    
    using SafeMath8 for uint8;
    using SafeMath for uint;
    event buyBox(address indexed target, uint boxIndex, uint boxAmount, uint buyPrice); 
    event sellBox(address indexed target, uint boxIndex, uint boxAmount, uint sellPrice); 
    
    
    function() external payable{}

    constructor() public{
        
        
        lv1BuyPrice[0][1] = 300;
        lv1BuyPrice[0][2] = 320;
        lv1BuyPrice[0][3] = 280;
        lv1BuyPrice[0][4] = 290;
        lv1BuyPrice[0][5] = 250;
        lv1BuyPrice[0][6] = 260; 
        lv1BuyPrice[0][7] = 240;
        lv1BuyPrice[0][8] = 230;
        lv1BuyPrice[0][9] = 160; 
        lv1BuyPrice[0][10] = 156;
        lv1BuyPrice[0][11] = 144;
        lv1BuyPrice[0][12] = 140;
        lv1BuyPrice[0][13] = 420;
        lv1BuyPrice[0][14] = 415;
        lv1BuyPrice[0][15] = 390;
        lv1BuyPrice[0][16] = 460;

        lv1BuyPrice[1][1] = 150;
        lv1BuyPrice[1][2] = 160;
        lv1BuyPrice[1][3] = 156;
        lv1BuyPrice[1][4] = 164;
        lv1BuyPrice[1][5] = 100;
        lv1BuyPrice[1][6] = 110;
        lv1BuyPrice[1][7] = 105;
        lv1BuyPrice[1][8] = 98;
        lv1BuyPrice[1][9] = 250;
        lv1BuyPrice[1][10] = 240;
        lv1BuyPrice[1][11] = 230;
        lv1BuyPrice[1][12] = 260;
        lv1BuyPrice[1][13] = 200;
        lv1BuyPrice[1][14] = 220;
        lv1BuyPrice[1][15] = 210;
        lv1BuyPrice[1][16] = 190;

        lv1BuyPrice[2][1] = 300;
        lv1BuyPrice[2][2] = 310;
        lv1BuyPrice[2][3] = 320;
        lv1BuyPrice[2][4] = 290;
        lv1BuyPrice[2][5] = 250;
        lv1BuyPrice[2][6] = 240;
        lv1BuyPrice[2][7] = 260;
        lv1BuyPrice[2][8] = 235;
        lv1BuyPrice[2][9] = 200;
        lv1BuyPrice[2][10] = 210;
        lv1BuyPrice[2][11] = 220;
        lv1BuyPrice[2][12] = 180;
        lv1BuyPrice[2][13] = 400;
        lv1BuyPrice[2][14] = 420;
        lv1BuyPrice[2][15] = 380;
        lv1BuyPrice[2][16] = 390;

        lv1BuyPrice[3][1] = 200;
        lv1BuyPrice[3][2] = 220;
        lv1BuyPrice[3][3] = 210;
        lv1BuyPrice[3][4] = 190;
        lv1BuyPrice[3][5] = 250;
        lv1BuyPrice[3][6] = 240;
        lv1BuyPrice[3][7] = 230;
        lv1BuyPrice[3][8] = 260;
        lv1BuyPrice[3][9] = 300;
        lv1BuyPrice[3][10] = 310;
        lv1BuyPrice[3][11] = 320;
        lv1BuyPrice[3][12] = 280;
        lv1BuyPrice[3][13] = 150;
        lv1BuyPrice[3][14] = 140;
        lv1BuyPrice[3][15] = 160;
        lv1BuyPrice[3][16] = 170;

        lv1BuyPrice[4][1] = 250;
        lv1BuyPrice[4][2] = 240;
        lv1BuyPrice[4][3] = 235;
        lv1BuyPrice[4][4] = 230;
        lv1BuyPrice[4][5] = 300;
        lv1BuyPrice[4][6] = 310;
        lv1BuyPrice[4][7] = 320;
        lv1BuyPrice[4][8] = 280;
        lv1BuyPrice[4][9] = 200;
        lv1BuyPrice[4][10] = 220;
        lv1BuyPrice[4][11] = 210;
        lv1BuyPrice[4][12] = 190;
        lv1BuyPrice[4][13] = 420;
        lv1BuyPrice[4][14] = 410;
        lv1BuyPrice[4][15] = 380;
        lv1BuyPrice[4][16] = 390;

        lv1BuyPrice[5][1] = 250;
        lv1BuyPrice[5][2] = 240;
        lv1BuyPrice[5][3] = 235;
        lv1BuyPrice[5][4] = 230;
        lv1BuyPrice[5][5] = 300;
        lv1BuyPrice[5][6] = 320;
        lv1BuyPrice[5][7] = 280;
        lv1BuyPrice[5][8] = 270;
        lv1BuyPrice[5][9] = 200;
        lv1BuyPrice[5][10] = 220;
        lv1BuyPrice[5][11] = 210;
        lv1BuyPrice[5][12] = 240;
        lv1BuyPrice[5][13] = 400;
        lv1BuyPrice[5][14] = 410;
        lv1BuyPrice[5][15] = 440; 
        lv1BuyPrice[5][16] = 360; 
    
        
        boxIndex[0] = 1000;
        boxIndex[1] = 1001;
        boxIndex[2] = 1002;
        boxIndex[3] = 1003;
        boxIndex[4] = 1004;
        boxIndex[5] = 1100;
        boxIndex[6] = 1101;
        boxIndex[7] = 1102;
        boxIndex[8] = 1103;
        boxIndex[9] = 1104;
        boxIndex[10] = 1200;
        boxIndex[11] = 1201;
        boxIndex[12] = 1202;
        boxIndex[13] = 1203;
        boxIndex[14] = 1204;
        boxIndex[15] = 1300;
        boxIndex[16] = 1301;
        boxIndex[17] = 1302;
        boxIndex[18] = 1303;
        boxIndex[19] = 1304;
        boxIndex[20] = 1400;
        boxIndex[21] = 1401;
        boxIndex[22] = 1402;
        boxIndex[23] = 1403;
        boxIndex[24] = 1404;
        boxIndex[25] = 1500;
        boxIndex[26] = 1501;
        boxIndex[27] = 1502;
        boxIndex[28] = 1503;
        boxIndex[29] = 1504;
    }

    bytes4 constant internal ERC1155_ACCEPTED = 0xf23a6e61;
    
    ////transfer arina to trade
    function receiveApproval( address _sender, uint256 _value, address _tokenContract, bytes memory _data
        ) public returns (uint, uint){
        uint8 rate;
        uint16 city;
        uint16 domain;
        uint totalPrice; 
        uint tokenIndex;
        uint box_amount;
        if (_data[0] == 0x1){ 
        ///buyBox
            require(_data.length == 3, "_data.length error!!!");
            
            //tokenIndex = 1000 + uint(_data[1])*100 + uint(_data[2]); 
            //box_amount = uint(_data[3]);
            tokenIndex = uint(boxIndex[uint8(_data[1])]);
            box_amount = uint(_data[2]);

            (city,domain) = master(addr("master")).inquire_location(_sender);
            require(box_amount_city[city][tokenIndex] >= box_amount,"city box_amount less!!!");

            totalPrice = realPriceBatch(city, domain, tokenIndex, box_amount, false);
            
            pool[city] = pool[city].add(totalPrice);
            
            require(_value == totalPrice,"_value error!!!");
            require(ERC20(addr("arina")).transferFrom(_sender, address(this), _value),"交易失敗");
            
            newMaterialsInterface(addr("newMats")).safeTransferFrom(address(this), _sender, tokenIndex, box_amount, "0x");

            box_amount_city[city][tokenIndex]= box_amount_city[city][tokenIndex].sub(box_amount);
            emit buyBox(_sender, tokenIndex, box_amount, totalPrice);

        } else if(_data[0] == 0x3){ 
            require(_sender == manager, "not manager!!!");
            require(_data.length == 2, "data length error!!!");
            city = uint8(_data[1]);
            
            require(ERC20(addr("arina")).transferFrom(_sender, address(this), _value),"交易失敗");
            pool[city] = pool[city].add(_value);
        }
        else{revert();}
    }

    ///sellBox
    function onERC1155Received( address _operator, address _from, uint256 tokenIndex, uint256 _value, bytes  _data
        ) public returns (bytes4) {
            bytes1 action;
            uint16 city;
            uint16 domain;
            uint totalPrice; 

            (city, domain) = master(addr("master")).inquire_location(_from);
            
            totalPrice = realPriceBatch(city, domain, tokenIndex, _value, true); 

            require(pool[city] >= totalPrice, "pool less !!!");
            pool[city] = pool[city].sub(totalPrice);

            box_amount_city[city][tokenIndex] =  box_amount_city[city][tokenIndex].add(_value); 
            
            ERC20(addr("arina")).transfer(_from, totalPrice);
            
            emit sellBox(_from, tokenIndex, _value, totalPrice);
            return ERC1155_ACCEPTED;
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
    
    function inquire_pool(uint16 _city) public view returns(uint){   
        return pool[_city];
    }

    function origBuyPrice(uint16 _city,uint _index) public view returns(uint){
        

        uint8 lv = uint8(_index%10) + 1;
        require(lv>0 && lv<=5,"lv error!!!");
        uint8 typ = uint8((_index-1000)/100) ; 
        if (lv == 1){  
            return lv1BuyPrice[typ][_city] * (10**7);
        }
        else{
            return lv1BuyPrice[typ][_city] * (10**7) * 3**(uint(lv)); 
        }
    }

    function cpi(uint16 _city) public view returns(int){        
        uint balance = pool[_city]/100000000;
        return (int(balance)*10000)/(500000)-10000;
    } 

    function realPrice(uint16 _city, uint _index) public view returns(uint){
        return origBuyPrice(_city,_index)*(10000+uint(cpi(_city)))/10000;
    }

    function realPriceBatch(uint16 city, uint16 domain, uint tokenIndex, uint box_amount, bool sellbox) public view returns(uint){
        uint totalPrice = 0;
        uint8 rate;
        
        rate = inquire_city_rate(city, domain);

        for(uint8 j =1 ;j<= box_amount ;j++ ){
            totalPrice = totalPrice.add(realPrice(city, tokenIndex) * rate / 100); 
        }
        if (sellbox == true){
            totalPrice = totalPrice/4;
        }
        return totalPrice;
    }

    function inquire_city_rate(uint16 city, uint16 domain) public view returns (uint8){
        uint8 rate = 100;
        
        for(uint8 i =0 ;i<master(addr("master")).inquire_tot_building(city, domain).length ;i++ ){
            if( master(addr("master")).inquire_tot_building(city, domain)[i] == 4){
                rate = rate.sub(5);
            }else if(master(addr("master")).inquire_tot_building(city, domain)[i] == 19){
                rate = rate.sub(10);
            }
        }
        return rate;
    }

    // function inquire_box_address(uint8 _index) public view returns(address){
    //     return boxManager(boxManager_address).newContracts(_index);
    // } 
 
    function inquire_box_amount(uint16 _city,uint _index) public view returns(uint){
        return box_amount_city[_city][_index];
    }

    function inquire_box_amount_Batch(uint16 _city,uint[] _index) public view returns(uint[]){
        uint[] memory amount_ = new uint[](_index.length);
        for(uint i = 0; i < _index.length; i++) {
            amount_[i] = box_amount_city[_city][_index[i]];
        }
        return amount_;
    }
    
    function set_city_pool(uint _arina, uint16 _city ) external{   
        require(msg.sender == addr("master"));
        pool[_city] = pool[_city].add(_arina);
    }
    
    function set_city_box_amount(uint16 _city, uint _index, uint _amount ) external{   
        require(checkSlave(),"not slave!!!");
            
        box_amount_city[_city][_index] = box_amount_city[_city][_index].add(_amount);
    }
    
    function exchange_arina(uint _arina, uint16 _city, address _target) external {
        require(msg.sender == addr("master"));
        require(pool[_city] >= _arina);
        ERC20(addr("arina")).transfer(_target, _arina); 
        pool[_city] = pool[_city].sub(_arina);
    }

    

    function withdraw_all_ETH() public onlyManager{
        manager.transfer(address(this).balance);
    }

    function withdraw_all_arina() public onlyManager{
        uint asset = ERC20(addr("arina")).balanceOf(address(this));
        uint length = master(addr("master")).owner_slave_amount();
        ERC20(addr("arina")).transfer(manager, asset);
         
        for(uint8 i = 1;i <= length;i++){
            pool[i] = 0;
        }
        
    }

    function withdraw_ETH(uint _eth_wei) public onlyManager{
        manager.transfer(_eth_wei);
    }

    function withdraw_arina(uint _arina, uint16 _city) public onlyManager{
        require(pool[_city] >= _arina);
        ERC20(addr("arina")).transfer(manager, _arina); 
        pool[_city] = pool[_city].sub(_arina);
    }
}