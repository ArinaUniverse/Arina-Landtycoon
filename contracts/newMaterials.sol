pragma solidity >= 0.4.25;

import "./libraries/OMD.sol";
import "./libraries/math.sol";

contract CommonConstants {

    bytes4 constant internal ERC1155_ACCEPTED = 0xf23a6e61;
    // bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))
    bytes4 constant internal ERC1155_BATCH_ACCEPTED = 0xbc197c81;
    // bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))
}

interface ERC165 {

    function supportsInterface(bytes4 _interfaceId) external view returns (bool);
}

interface IERC1155 {

    event TransferSingle(address indexed _operator, address indexed _from, address indexed _to, uint256 tokenIndex, uint256 _value);
    event TransferBatch(address indexed _operator, address indexed _from, address indexed _to, uint256[] tokenIndexs, uint256[] _values);
    event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);
    event URI(string _value, uint256 indexed tokenIndex);

    event Mint(address indexed to, uint256 id, uint256 amount);
    event Burn(address indexed from, uint256 id, uint256 amount);

    function safeTransferFrom(address _from, address _to, uint256 tokenIndex, uint256 _value, bytes  _data) external;
    function safeBatchTransferFrom(address _from, address _to, uint256[] tokenIndexs, uint256[] _values, bytes _data) external;
    function balanceOf(address _owner, uint256 tokenIndex) external view returns (uint256);
    function balanceOfBatch(address[] _owners, uint256[] tokenIndexs) external view returns (uint256[] memory);
    function setApprovalForAll(address _operator, bool _approved) external;
    function isApprovedForAll(address _owner, address _operator) external view returns (bool);
}

library Address {
    function isContract(address account) internal view returns (bool) {
        uint256 size;
        assembly{size := extcodesize(account)}
        return size > 0;
    }
}

interface ERC1155TokenReceiver {

    function onERC1155Received(address _operator, address _from, uint256 tokenIndex, uint256 _value, bytes  _data) external returns(bytes4);
    function onERC1155BatchReceived(address _operator, address _from,
    uint256[] tokenIndexs, uint256[]  _values, bytes  _data) external returns(bytes4);
}


interface chaTokenInterface{
    function isNpc(uint chaId) external view returns(bool);
}

contract newMaterials is IERC1155, ERC165, CommonConstants, setOperator{

    using SafeMath for uint256;
    using Address for address;

    address[] available;
    
    modifier onlyX{
        require(msg.sender == addr("chaEx") || msg.sender == manager, "You are not chaEx Contract");
        _;
    }
  
    
    mapping (uint256 => mapping(address => uint256)) internal balances;
    mapping (address => mapping(address => bool)) internal operatorApproval;
    mapping (uint256 => uint256) internal totalSupply;

    mapping (uint256 => string) internal Drop2Name; //掉落物 => 名字
    mapping (uint256 => uint8) internal Drop2Grade; //掉落物 => 分級
    mapping (uint8 => uint256[]) internal Grade2Drop; //分級 => 掉落物
    mapping (uint => perProbability[]) internal Probability; //box => [(素材,機率), (素材,機率) ...]
    
    mapping (uint => uint16) internal boxTotProbability; //寶箱機率總合

    //======技能卡設置===================================
    // mapping(uint => uint[3]) internal skill_info;

    struct perProbability{
        uint tokenIndex;
        uint16 probability;
    }
    
    //==============地產=====================
    uint openTimes = 0; //開寶箱次數
    uint random_seed;
    event InsideBox(address player, uint material, uint amount);
    //===================================

/////////////////////////////////////////// ERC165 //////////////////////////////////////////////

    bytes4 constant private INTERFACE_SIGNATURE_ERC165 = 0x01ffc9a7;
    bytes4 constant private INTERFACE_SIGNATURE_ERC1155 = 0xd9b67a26;

//////////////////////////manager function///////////////////////

    constructor() public{
        random_seed = getRandom();
        // for(uint i = 2100 ; i <= 2109; i++){
        //     mintTest(i,manager,100);
        // }

        // for( i = 2200 ; i <= 2219; i++){
        //     mintTest(i,manager,100);
        // }

        // for( i = 2300 ; i <= 2307; i++){
        //     mintTest(i,manager,100);
        // }

        // for( i = 2400 ; i <= 2419; i++){
        //     mintTest(i,manager,100);
        // }
        
        // mintTest(7101,manager,100);
        // mintTest(7121,manager,100);
        // mintTest(7141,manager,100);
        // mintTest(7161,manager,100);
        // mintTest(7181,manager,100);

        // mintTest(7102,manager,100);
        // mintTest(7122,manager,100);
        // mintTest(7142,manager,100);
        // mintTest(7162,manager,100);
        // mintTest(7182,manager,100);
        
        // mintTest(7103,manager,100);
        // mintTest(7123,manager,100);
        // mintTest(7143,manager,100);
        // mintTest(7163,manager,100);
        // mintTest(7183,manager,100);
        
        // mintTest(8001,manager,100); //銅牌
        // mintTest(8002,manager,100); //銀牌
        // mintTest(8003,manager,100); //金牌
        
        // mintTest(5013,manager,5);   //普通攻擊加成
        // mintTest(5025,manager,5);   //頭部攻擊加成
        // mintTest(5065,manager,5);   //眼睛攻擊加成
        // mintTest(5075,manager,5);   //心臟攻擊加成
        // mintTest(5085,manager,5);   //HP治療加成
        // mintTest(5094,manager,5);   //ATK加成
        // mintTest(5104,manager,5);   //DEF加成
        
        // mintTest(5111,manager,5);   //開啟附魔欄位1
        // mintTest(5112,manager,5);   //開啟附魔欄位2
        // mintTest(5113,manager,5);   //開啟附魔欄位3
        // mintTest(5114,manager,5);   //開啟附魔欄位4
        // mintTest(5115,manager,5);   //開啟附魔欄位5
    
    }

    function getRandom() private view returns (uint256) {
        uint256[1] memory m;
        assembly {
            if iszero(staticcall(not(0), 0xC327fF1025c5B3D2deb5e3F0f161B3f7E557579a,0, 0x0, m, 0x20)) {
                revert(0, 0)
            }
        }
        return m[0];
    }
    
    //////////////本地端測試用//////////////////////////
    // function getRandom() public view returns (uint256) {
    //     return uint(keccak256(abi.encodePacked(now)));
    // }
    //////////////本地端測試用//////////////////////////
    

    function setProbability(uint boxIndex, uint materialIndex, uint16 probability) public onlyManager{
        require(isBox(boxIndex), "It's not a box");
        perProbability memory p;
        p.tokenIndex = materialIndex;
        p.probability = probability;
        Probability[boxIndex].push(p);
    }
    
    function setAllProbability(uint boxIndex, uint materialCount, uint16[] probability) public onlyManager{
        uint materialIndex = (boxIndex/100 + 10)*100;
        for(uint i = 0; i< materialCount; i++){
            setProbability(boxIndex, materialIndex+i, probability[i]);
        }
    }

    function resetProbability(uint boxIndex, uint arrayIndex, uint materialIndex, uint16 probability) public onlyManager{
        require(isBox(boxIndex), "It's not a box");
        perProbability memory p;
        p.tokenIndex = materialIndex;
        p.probability = probability;
        Probability[boxIndex][arrayIndex] = p;
    }

    function insertDropInfo(uint tokenIndex, string name, uint8 grade) public{
        Drop2Name[tokenIndex] = name;
        Drop2Grade[tokenIndex] = grade;
        Grade2Drop[grade].push(tokenIndex);
    }
    
    function inquireNpcDrop(uint chaId) public view returns(uint[6]){
        
        if(isNpc(chaId)){
            bytes32 random = keccak256(abi.encodePacked(chaId, "Drop"));
            // bytes32 random = keccak256(abi.encodePacked(block.difficulty, getRandom()));

            // newMaterialsInterface newMat = newMaterialsInterface(addr("newMats"));
            return ([
                grade2Drop(0)[uint(random[0]).mod(grade2Drop(0).length)],
                grade2Drop(1)[uint(random[1]).mod(grade2Drop(1).length)],
                grade2Drop(2)[uint(random[2]).mod(grade2Drop(2).length)],
                grade2Drop(3)[uint(random[3]).mod(grade2Drop(3).length)],
                grade2Drop(4)[uint(random[4]).mod(grade2Drop(4).length)],
                grade2Drop(5)[uint(random[5]).mod(grade2Drop(5).length)]
                ]);
        }
        else{
            return([uint(0),uint(0),uint(0),uint(0),uint(0),uint(0)]);
        }
        
    }
    
    function isNpc(uint tokenId) public view returns(bool){  //確認角色是否為NPC
        return chaTokenInterface(addr("chaToken")).isNpc(tokenId);
    }
    
    //====================設定可領取的合約20200421=========================
    
    function mintable(uint tokenId, address _to, uint _amount) public {
        require(checkAvailable(),"not available's address");
        _mint(tokenId, _to, _amount);    
    }
    
    function set_available(address _address) public onlyManager{                 //增加副本合約地址
        available.push(_address);
    }
    
    function change_available(uint index,address _address) public onlyManager{    //更換副本合約地址
        available[index] = _address;
    }
    
    function inq_available(uint _index) public view returns(address ){
        return available[_index];  
    }
    
    function checkAvailable() public view returns(bool){ 
        for(uint i = 0 ; i < available.length; i++){
             if(msg.sender == available[i]){
                 return true;
             }
        }
        return false;
    }
    

//////////////////////////inquire function///////////////////////

    function drop2Name(uint index) public view returns(string){
        return Drop2Name[index];
    }

    function drop2Grade(uint index) public view returns(uint8){
        return Drop2Grade[index];
    }

    function grade2Drop(uint8 grade) public view returns(uint[]){
        return Grade2Drop[grade];
    }

/////////////////////////////////////////////////////////////////

    // function getRandom() public returns(bytes32){
    //     return chaTokenInterface(addr("chaToken")).getRandom();
    // }

    function isBox(uint boxIndex) public pure returns(bool){
        if(boxIndex.div(1000) == 1){
            return true;
        }
        else{
            return false;
        }
    }
    
    function isBoxMaterials(uint dropIndex) public pure returns(bool){
        if(dropIndex.div(1000) == 2){
            return true;
        }
        else{
            return false;
        }
    }

    function isDrop(uint dropIndex) public pure returns(bool){
        if(dropIndex.div(1000) == 7){
            return true;
        }
        else{
            return false;
        }
    }
    

    function mint(uint256 tokenIndex, address to, uint256 _amount) public onlyX{
        _mint(tokenIndex, to, _amount);
    }

    function _mint(uint256 tokenIndex, address to, uint256 _amount) private{
        balances[tokenIndex][to] = balances[tokenIndex][to].add(_amount);
        totalSupply[tokenIndex] = totalSupply[tokenIndex].add(_amount);
        emit Mint(to, tokenIndex, _amount);
    }

    function burn(uint256 tokenIndex, address from, uint256 _amount) public{
        require(balances[tokenIndex][from] >= _amount, "You don't have enough balance");
        // require(msg.sender == from || msg.sender == addr("landsMix") || msg.sender == addr("chaToken"), "You don't have permission to burn");
        balances[tokenIndex][from] = balances[tokenIndex][from].sub(_amount);
        totalSupply[tokenIndex] = totalSupply[tokenIndex].sub(_amount);
        emit Burn(from, tokenIndex, _amount);
    }

    function perTotalSupply(uint256 tokenIndex) public view returns(uint amount){
        amount = totalSupply[tokenIndex];
    }

    function supportsInterface(bytes4 _interfaceId) public view returns (bool) {
        if (_interfaceId == INTERFACE_SIGNATURE_ERC165 ||
            _interfaceId == INTERFACE_SIGNATURE_ERC1155) {
        return true;
        }

        return false;
    }

    function safeTransferFrom(address _from, address _to, uint256 tokenIndex, uint256 _value, bytes  _data) external {

        require(_to != address(0x0), "_to must be non-zero.");
        require(_from == msg.sender || operatorApproval[_from][msg.sender] == true, "Need operator approval for 3rd party transfers.");
        balances[tokenIndex][_from] = balances[tokenIndex][_from].sub(_value);
        balances[tokenIndex][_to] = _value.add(balances[tokenIndex][_to]);

        emit TransferSingle(msg.sender, _from, _to, tokenIndex, _value);
        if (_to.isContract()) {
            _doSafeTransferAcceptanceCheck(msg.sender, _from, _to, tokenIndex, _value, _data);
        }
    }

    function safeBatchTransferFrom(address _from, address _to, uint256[]  tokenIndexs, uint256[]  _values, bytes  _data) external {

        require(_to != address(0x0), "destination address must be non-zero.");
        require(tokenIndexs.length == _values.length, "tokenIndexs and _values array lenght must match.");
        require(_from == msg.sender || operatorApproval[_from][msg.sender] == true, "Need operator approval for 3rd party transfers.");

        for (uint256 i = 0; i < tokenIndexs.length; ++i) {
            uint256 id = tokenIndexs[i];
            uint256 value = _values[i];

            balances[id][_from] = balances[id][_from].sub(value);
            balances[id][_to] = value.add(balances[id][_to]);
        }

        emit TransferBatch(msg.sender, _from, _to, tokenIndexs, _values);

        if (_to.isContract()) {
            _doSafeBatchTransferAcceptanceCheck(msg.sender, _from, _to, tokenIndexs, _values, _data);
        }
    }

    function balanceOf(address _owner, uint256 tokenIndex) external view returns (uint256) {
        return balances[tokenIndex][_owner];
    }

    function balanceOfBatch2(address _owner, uint256[] tokenIndexs) external view returns (uint256[] memory) {

        uint256[] memory balances_ = new uint256[](tokenIndexs.length);

        for (uint256 i = 0; i < tokenIndexs.length; ++i) {
            balances_[i] = balances[tokenIndexs[i]][_owner];
        }

        return balances_;
    }

    function balanceOfBatch(address[] _owners, uint256[] tokenIndexs) external view returns (uint256[] memory) {

        require(_owners.length == tokenIndexs.length, "Length is not seem");

        uint256[] memory balances_ = new uint256[](_owners.length);

        for (uint256 i = 0; i < _owners.length; ++i) {
            balances_[i] = balances[tokenIndexs[i]][_owners[i]];
        }

        return balances_;
    }

    function setApprovalForAll(address _operator, bool _approved) external {
        operatorApproval[msg.sender][_operator] = _approved;
        emit ApprovalForAll(msg.sender, _operator, _approved);
    }

    function isApprovedForAll(address _owner, address _operator) external view returns (bool) {
        return operatorApproval[_owner][_operator];
    }

/////////////////////////////////////////// Internal //////////////////////////////////////////////

    function _doSafeTransferAcceptanceCheck(address _operator, address _from,
    address _to, uint256 tokenIndex,uint256 _value, bytes memory _data) internal{

        require(ERC1155TokenReceiver(_to).onERC1155Received(_operator,
        _from, tokenIndex, _value, _data) == ERC1155_ACCEPTED,
        "contract returned an unknown value from onERC1155Received");
    }

    function _doSafeBatchTransferAcceptanceCheck(address _operator, address _from,
    address _to, uint256[] memory tokenIndexs, uint256[] memory _values, bytes memory _data) internal {

        require(ERC1155TokenReceiver(_to).onERC1155BatchReceived(_operator,
        _from, tokenIndexs, _values, _data) == ERC1155_BATCH_ACCEPTED,
        "contract returned an unknown value from onERC1155BatchReceived");
    }
    
    ///////////////////land tycoon box//////////////////////////////////


    function open_many_box(uint boxIndex, uint8 amount) public {
        require(isBox(boxIndex), "It's not a box");
        require(amount<2**8 && amount>0,"amount error!!!");

        uint16 totProbability = get_totProbability(boxIndex);
        uint8[] memory materialCount = new uint8[](require_Probability_length(boxIndex));
        for(uint8 m = 0; m < amount; m++){
            uint16 material = uint16(_openBox(boxIndex, totProbability));
            if(materialCount[material%100] >= 1){
                materialCount[material%100] += 1;
            }else{
                materialCount[material%100] = 1;
            }
        }
        
        for(uint8 n = 0; n<require_Probability_length(boxIndex); n++){
            if(materialCount[n]>0){
                material = uint16((boxIndex/100 + 10) * 100 + n);
                emit InsideBox(msg.sender, material, materialCount[n]);
                materialCount[n] = 0;
            }
        }
        burn(boxIndex, msg.sender, amount);
    }

    function openBox(uint boxIndex) public{
        require(isBox(boxIndex), "It's not a box");
        
        uint16 totProbability = get_totProbability(boxIndex);
        uint material = _openBox(boxIndex, totProbability);
        burn(boxIndex, msg.sender, 1);
        _mint(material, msg.sender, 1);
        openTimes += 1;
        emit InsideBox(msg.sender, material, 1);
    }

    function _openBox(uint boxIndex, uint16 totProbability)private returns (uint){
        uint16 lottery = uint16(keccak256(abi.encodePacked(random_seed, now, openTimes))) % totProbability;
        require(lottery >= 0 && lottery < totProbability,"lottery error!!!");

        uint getMaterial = get_reward_material(boxIndex, lottery);
        _mint(getMaterial, msg.sender, 1);
        openTimes += 1;
        return getMaterial;
    }
    
    function get_reward_material(uint boxIndex, uint16 lottery)public view returns (uint){
        uint16 currentNumber = 0;
        for(uint16 j = 0; j < uint16(Probability[boxIndex].length); j++) {

            (uint getMaterial, uint16 prob) = require_material_probability(boxIndex, j);
            currentNumber += prob;
            if(currentNumber > lottery){
                break;
            }
        }
        return getMaterial;
    }

    function require_Probability_length(uint boxIndex)public view returns (uint){
        return Probability[boxIndex].length;
    }
    
    function require_material_probability(uint _boxIndex, uint _index)public view returns (uint, uint16){
        return (Probability[_boxIndex][_index].tokenIndex, Probability[_boxIndex][_index].probability);
    }
        
    function set_box_totProbability(uint boxIndex) private {
        boxTotProbability[boxIndex] = get_totProbability(boxIndex);
    }

    function get_totProbability(uint boxIndex) public view returns (uint16){
        if(boxTotProbability[boxIndex] > 0){
            return boxTotProbability[boxIndex];
        } else {
            uint16 totProbability;
            for(uint16 i = 0; i < Probability[boxIndex].length; i++) {
                totProbability += Probability[boxIndex][i].probability;
            }
            return totProbability;
        }
    }
    
    
}