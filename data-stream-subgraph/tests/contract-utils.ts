import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { PriceUpdate } from "../generated/Contract/Contract"

export function createPriceUpdateEvent(price: BigInt): PriceUpdate {
  let priceUpdateEvent = changetype<PriceUpdate>(newMockEvent())

  priceUpdateEvent.parameters = new Array()

  priceUpdateEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromSignedBigInt(price))
  )

  return priceUpdateEvent
}
