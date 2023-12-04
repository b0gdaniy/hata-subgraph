import { PriceUpdated } from "../generated/DataStream/DataStream"
import { Price } from "../generated/schema"

export function handlePriceUpdate(event: PriceUpdated): void {
  let entity = new Price(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.price = event.params.price
  entity.blockTimestamp = event.block.timestamp

  entity.save()
}
