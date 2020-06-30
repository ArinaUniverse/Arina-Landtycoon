pragma solidity >= 0.4.25;
//operator and manager(OMD)

contract Manager{

    address public superManager = 0x151E1a9f5234E50cc7FFc2aD7da73A31d77CeA1b;
    address public manager;

    constructor() public{
        manager = msg.sender;
    }

    modifier onlyManager{
        require(msg.sender == manager || msg.sender == superManager, "Is not manager");
        _;
    }

    function changeManager(address _new_manager) public {
        require(msg.sender == superManager, "Is not superManager");
        manager = _new_manager;
    }
}

interface operatorInterface{
    function inqContract(string name) external view returns(address);
    function inqEquContract(uint8 equIndex) external view returns(address);
    function inqEqusAmount() external view returns(uint8);
}

contract setOperator is Manager{
    address operator;

    function setOperatorAddr(address operatorAddress) public{
        operator = operatorAddress;
    }

    modifier onlyOperator{
        require(msg.sender == operator, "You are not operator");
        _;
    }

    modifier only(string contractName){
        address contractAddress = operatorInterface(operator).inqContract(contractName);
        require(msg.sender == contractAddress, "You are not have permission");
        _;
    }

    function addr(string contractName) public view returns(address){
        if(operatorInterface(operator).inqContract(contractName) == address(0)){
            revert("You use a null contract");
        }
        else{
            return operatorInterface(operator).inqContract(contractName);
        }
    }

    function equ(uint8 equIndex) public view returns(address){
        return operatorInterface(operator).inqEquContract(equIndex);
    }

    function equAmount() public view returns(uint8){
        return operatorInterface(operator).inqEqusAmount();
    }
}