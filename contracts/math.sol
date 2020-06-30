pragma solidity >= 0.4.25;

library SafeMath {
    function add(uint a, uint b) internal pure returns (uint c) {
        c = a + b;
        require(c >= a, "Math error");
    }
    function sub(uint a, uint b) internal pure returns (uint c) {
        require(b <= a, "Math error");
        c = a - b;
    }
    function mul(uint a, uint b) internal pure returns (uint c) {
        c = a * b;
        require(a == 0 || c / a == b, "Math error");
    }
    function div(uint a, uint b) internal pure returns (uint c) {
        require(b > 0, "Math error");
        c = a / b;
    }
    function mod(uint a, uint b) internal pure returns (uint c) {
        require(b != 0, "Math error");
        c = a % b;
    }
}

library SafeMath8{
    function add(uint8 a, uint8 b) internal pure returns (uint8 c) {
        c = a + b;
        require(c >= a, "Math error");
    }
    function sub(uint8 a, uint8 b) internal pure returns (uint8 c) {
        require(b <= a, "Math error");
        c = a - b;
    }
    function mul(uint8 a, uint8 b) internal pure returns (uint8 c) {
        c = a * b;
        require(a == 0 || c / a == b, "Math error");
    }
    function div(uint8 a, uint8 b) internal pure returns (uint8 c) {
        require(b > 0, "Math error");
        c = a / b;
    }
    function mod(uint8 a, uint8 b) internal pure returns (uint8 c) {
        require(b != 0, "Math error");
        c = a % b;
    }
}

library SafeMath16 {
    function add(uint16 a, uint16 b) internal pure returns (uint16 c) {
        c = a + b;
        require(c >= a, "Math error");
    }
    function sub(uint16 a, uint16 b) internal pure returns (uint16 c) {
        require(b <= a, "Math error");
        c = a - b;
    }
    function mul(uint16 a, uint16 b) internal pure returns (uint16 c) {
        c = a * b;
        require(a == 0 || c / a == b, "Math error");
    }
    function div(uint16 a, uint16 b) internal pure returns (uint16 c) {
        require(b > 0, "Math error");
        c = a / b;
    }
    function mod(uint16 a, uint16 b) internal pure returns (uint16 c) {
        require(b != 0, "Math error");
        c = a % b;
    }
}