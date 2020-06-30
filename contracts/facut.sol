contract fauct {
    function() external {
        uint256 value = 0.1e18;
        (msg.sender).transfer(value);
    }
}
