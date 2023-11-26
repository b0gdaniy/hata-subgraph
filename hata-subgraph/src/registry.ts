import { PropertyAdded as PropertyAddedEvent } from "../generated/Registry/Registry"
import { PropertyAdded } from "../generated/schema"

export function handlePropertyAdded(event: PropertyAddedEvent): void {
  let entity = new PropertyAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.landlord = event.params.landlord
  entity.propertyID = event.params.propertyID
  entity.folderCID = event.params.folderCID
  entity.title = event.params.title
  entity.area = event.params.area

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
