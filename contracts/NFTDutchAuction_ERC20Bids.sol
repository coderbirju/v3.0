// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


import 'hardhat/console.sol';
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NFTDutchAuction_ERC20Bid {
    IERC721 public erc721TokenAddress;
    IERC20 public erc20TokenAddress;
    uint256 public nftTokenId;
    address payable public addressOfOwner;
    address payable public winnerAddress;
    uint256 public auctionEndBlock;
    uint256 public reservePrice;
    uint256 public numBlocksActionOpen;
    uint256 offerPriceDecrement;
    uint startBlockNumber;
    uint public winningBidAmount;
    bool public auctionEnded;
    bool confirmed;
    uint public initialPrice;
    uint public currentPrice;

    constructor(
        address _erc20TokenAddress,
        address _erc721TokenAddress, 
        uint256 _nftTokenId, 
        uint256 _reservePrice, 
        uint256 _numBlocksAuctionOpen, 
        uint256 _offerPriceDecrement
        ) {
        erc20TokenAddress = IERC20(_erc20TokenAddress);
        erc721TokenAddress = IERC721(_erc721TokenAddress);
        nftTokenId = _nftTokenId;
        // don't transfer the nft to this contract
        // erc721TokenAddress.transferFrom(msg.sender, address(this), _nftTokenId);
        reservePrice = _reservePrice;
        numBlocksActionOpen = _numBlocksAuctionOpen;
        offerPriceDecrement = _offerPriceDecrement;
        addressOfOwner = payable(erc721TokenAddress.ownerOf(_nftTokenId));
        startBlockNumber = block.number;
        auctionEndBlock = block.number + numBlocksActionOpen;
        initialPrice = _reservePrice + (_offerPriceDecrement * _numBlocksAuctionOpen);
        currentPrice = initialPrice;
        auctionEnded = false;
    }

    function bid() public payable returns(address) {
        // if(auctionEnded && winnerAddress != address(0) && msg.sender != winnerAddress) {
        //     address payable refundCaller = payable(msg.sender);
        //     refundCaller.transfer(address(this).balance);
        //     return winnerAddress;
        // }
        // check if the auction has ended
        require(!auctionEnded, "Auction has ended");
        // check if the block number is within the time limit
        require(block.number < auctionEndBlock, "Auction has ended");
        updatePrice();
        // check if the bid is higher than the reserve price
        require(msg.value >= currentPrice, "Bid is lower than current price");
        require(winnerAddress == address(0), "Auction has already been won");
	    // if the bid value is higher end the auction and transfer the funds to the owner
        auctionEnded = true;
        winnerAddress = payable(msg.sender);
        erc20TokenAddress.approve(address(this), msg.value);
        erc20TokenAddress.transferFrom(msg.sender, addressOfOwner, msg.value);
        // addressOfOwner.transfer(msg.value);
        erc721TokenAddress.transferFrom(addressOfOwner, winnerAddress, nftTokenId);
        winningBidAmount = msg.value;
        return winnerAddress;
    }
    
    function updatePrice() internal {
        // if (block.number >= auctionEndBlock) {
        //     auctionEnded = true;
        //     return;
        // }
        currentPrice = initialPrice - (offerPriceDecrement * (block.number - startBlockNumber));
    }
}
