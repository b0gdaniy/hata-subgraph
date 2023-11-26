import { PriceUpdate as PriceUpdateEvent } from "../generated/DataStream/DataStream"
import { PriceUpdate } from "../generated/schema"

export function handlePriceUpdate(event: PriceUpdateEvent): void {
  let entity = new PriceUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.price = event.params.price
  entity.blockTimestamp = event.block.timestamp

  entity.save()
}
