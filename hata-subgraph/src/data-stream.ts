import { PriceUpdate as PriceUpdateEvent } from "../generated/DataStream/DataStream"
import { PriceUpdate } from "../generated/schema"

export function handlePriceUpdate(event: PriceUpdateEvent): void {
  let entity = new PriceUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
