pragma solidity >= 0.4.25;

contract tool{
    function addressToString(address _addr) public pure returns(string memory) {
        bytes32 value = bytes32(uint256(_addr));
        bytes memory alphabet = "0123456789abcdef";
    
        bytes memory str = new bytes(42);
        str[0] = '0';
        str[1] = 'x';
        for (uint i = 0; i < 20; i++) {
            str[2+i*2] = alphabet[uint(uint8(value[i + 12] >> 4))];
            str[3+i*2] = alphabet[uint(uint8(value[i + 12] & 0x0f))];
        }
        return string(str);
    }

    function uintToString(uint _u) public pure returns (string memory str) {
        uint maxlength = 100;
        bytes memory reversed = new bytes(maxlength);
        uint i = 0;
        while (_u != 0) {
            uint remainder = _u % 10;
            _u = _u / 10;
            reversed[i++] = byte(uint8(48 + remainder));
        }
        bytes memory s = new bytes(i + 1);
        for (uint j = 0; j <= i; j++) {
            s[j] = reversed[i - j];
        }
        str = string(s);
    }
    
    function strConcat(string memory _a, string memory _b) public pure returns (string memory){
        bytes memory _ba = bytes(_a);
        bytes memory _bb = bytes(_b);
        string memory ret = new string(_ba.length + _bb.length);
        bytes memory bret = bytes(ret);
        uint k = 0;
        for (uint i = 0; i < _ba.length; i++) bret[k++] = _ba[i];
        for (uint j = 0; j < _bb.length; j++) bret[k++] = _bb[j];
        return string(ret);
    }

    function strConcat(string memory _a, string memory _b, string memory _c) public pure returns (string memory){
        bytes memory _ba = bytes(_a);
        bytes memory _bb = bytes(_b);
        bytes memory _bc = bytes(_c);
        string memory ret = new string(_ba.length + _bb.length + _bc.length);
        bytes memory bret = bytes(ret);
        uint l = 0;
        for (uint i = 0; i < _ba.length; i++) bret[l++] = _ba[i];
        for (uint j = 0; j < _bb.length; j++) bret[l++] = _bb[j];
        for (uint k = 0; k < _bc.length; k++) bret[l++] = _bc[k];
        return string(ret);
    }
}

contract debug is tool{

    function check(uint a) internal pure{
        string memory str;
        str = strConcat("[debug]", uintToString(a));
        
        revert(str);
    }

    function check(uint a, uint b) internal pure{
        string memory str;
        str = strConcat("[debug]",uintToString(a), ",");
        str = strConcat(str, uintToString(b));

        revert(str);
    }

    function check(uint a, uint b, uint c) internal pure{
        string memory str;
        str = strConcat("[debug]",uintToString(a), ",");
        str = strConcat(str, uintToString(b), ",");
        str = strConcat(str, uintToString(c));

        revert(str);
    }

    function check(address x) internal pure{
        string memory str;
        str = strConcat("[debug]",addressToString(x));

        revert(str);
    }

    function check(address x, uint b) internal pure{
        string memory str;
        str = strConcat("[debug]",addressToString(x), ",");
        str = strConcat(str, uintToString(b));

        revert(str);
    }

    function check(address x, uint b, uint c) internal pure{
        string memory str;
        str = strConcat("[debug]",addressToString(x), ",");
        str = strConcat(str, uintToString(b), ",");
        str = strConcat(str, uintToString(c));

        revert(str);
    }

    
}