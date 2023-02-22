/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface NFTDutchAuction_ERC20BidInterface extends utils.Interface {
  functions: {
    "addressOfOwner()": FunctionFragment;
    "auctionEndBlock()": FunctionFragment;
    "auctionEnded()": FunctionFragment;
    "bid()": FunctionFragment;
    "currentPrice()": FunctionFragment;
    "erc20TokenAddress()": FunctionFragment;
    "erc721TokenAddress()": FunctionFragment;
    "initialPrice()": FunctionFragment;
    "nftTokenId()": FunctionFragment;
    "numBlocksActionOpen()": FunctionFragment;
    "reservePrice()": FunctionFragment;
    "winnerAddress()": FunctionFragment;
    "winningBidAmount()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addressOfOwner"
      | "auctionEndBlock"
      | "auctionEnded"
      | "bid"
      | "currentPrice"
      | "erc20TokenAddress"
      | "erc721TokenAddress"
      | "initialPrice"
      | "nftTokenId"
      | "numBlocksActionOpen"
      | "reservePrice"
      | "winnerAddress"
      | "winningBidAmount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addressOfOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "auctionEndBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "auctionEnded",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "bid", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "currentPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "erc20TokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "erc721TokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nftTokenId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numBlocksActionOpen",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reservePrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "winnerAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "winningBidAmount",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addressOfOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "auctionEndBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "auctionEnded",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "erc20TokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "erc721TokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nftTokenId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "numBlocksActionOpen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reservePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "winnerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "winningBidAmount",
    data: BytesLike
  ): Result;

  events: {};
}

export interface NFTDutchAuction_ERC20Bid extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NFTDutchAuction_ERC20BidInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addressOfOwner(overrides?: CallOverrides): Promise<[string]>;

    auctionEndBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    auctionEnded(overrides?: CallOverrides): Promise<[boolean]>;

    bid(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    currentPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    erc20TokenAddress(overrides?: CallOverrides): Promise<[string]>;

    erc721TokenAddress(overrides?: CallOverrides): Promise<[string]>;

    initialPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    nftTokenId(overrides?: CallOverrides): Promise<[BigNumber]>;

    numBlocksActionOpen(overrides?: CallOverrides): Promise<[BigNumber]>;

    reservePrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    winnerAddress(overrides?: CallOverrides): Promise<[string]>;

    winningBidAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  addressOfOwner(overrides?: CallOverrides): Promise<string>;

  auctionEndBlock(overrides?: CallOverrides): Promise<BigNumber>;

  auctionEnded(overrides?: CallOverrides): Promise<boolean>;

  bid(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  currentPrice(overrides?: CallOverrides): Promise<BigNumber>;

  erc20TokenAddress(overrides?: CallOverrides): Promise<string>;

  erc721TokenAddress(overrides?: CallOverrides): Promise<string>;

  initialPrice(overrides?: CallOverrides): Promise<BigNumber>;

  nftTokenId(overrides?: CallOverrides): Promise<BigNumber>;

  numBlocksActionOpen(overrides?: CallOverrides): Promise<BigNumber>;

  reservePrice(overrides?: CallOverrides): Promise<BigNumber>;

  winnerAddress(overrides?: CallOverrides): Promise<string>;

  winningBidAmount(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    addressOfOwner(overrides?: CallOverrides): Promise<string>;

    auctionEndBlock(overrides?: CallOverrides): Promise<BigNumber>;

    auctionEnded(overrides?: CallOverrides): Promise<boolean>;

    bid(overrides?: CallOverrides): Promise<string>;

    currentPrice(overrides?: CallOverrides): Promise<BigNumber>;

    erc20TokenAddress(overrides?: CallOverrides): Promise<string>;

    erc721TokenAddress(overrides?: CallOverrides): Promise<string>;

    initialPrice(overrides?: CallOverrides): Promise<BigNumber>;

    nftTokenId(overrides?: CallOverrides): Promise<BigNumber>;

    numBlocksActionOpen(overrides?: CallOverrides): Promise<BigNumber>;

    reservePrice(overrides?: CallOverrides): Promise<BigNumber>;

    winnerAddress(overrides?: CallOverrides): Promise<string>;

    winningBidAmount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    addressOfOwner(overrides?: CallOverrides): Promise<BigNumber>;

    auctionEndBlock(overrides?: CallOverrides): Promise<BigNumber>;

    auctionEnded(overrides?: CallOverrides): Promise<BigNumber>;

    bid(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    currentPrice(overrides?: CallOverrides): Promise<BigNumber>;

    erc20TokenAddress(overrides?: CallOverrides): Promise<BigNumber>;

    erc721TokenAddress(overrides?: CallOverrides): Promise<BigNumber>;

    initialPrice(overrides?: CallOverrides): Promise<BigNumber>;

    nftTokenId(overrides?: CallOverrides): Promise<BigNumber>;

    numBlocksActionOpen(overrides?: CallOverrides): Promise<BigNumber>;

    reservePrice(overrides?: CallOverrides): Promise<BigNumber>;

    winnerAddress(overrides?: CallOverrides): Promise<BigNumber>;

    winningBidAmount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addressOfOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    auctionEndBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    auctionEnded(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bid(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    currentPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    erc20TokenAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    erc721TokenAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nftTokenId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numBlocksActionOpen(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reservePrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    winnerAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    winningBidAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
