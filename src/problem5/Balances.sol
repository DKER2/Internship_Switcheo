// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;
interface IERC20 {
    // Standard Interface of Token deployed in ETH Chain
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);

    function transfer(address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);


    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}
contract Balances {
    struct BalanceJSON{
        address token;
        uint balance;
    }
    function getBalance(address ADDRESS, address[] memory TOKENS) public view returns(BalanceJSON[] memory){
        BalanceJSON[] memory BalancesJSON = new BalanceJSON[](TOKENS.length);
        for(uint i = 0; i < TOKENS.length; i++){
            // Get Balance from Chain using Interface IERC20 through BalanceOf function IERC20({ContractAddress}).BalanceOf({WalletAddress})
            BalanceJSON memory tmp = BalanceJSON({token: TOKENS[i],balance: uint(IERC20(TOKENS[i]).balanceOf(ADDRESS)) });
            BalancesJSON[i] =  tmp;
        }
        return BalancesJSON;
    }
}