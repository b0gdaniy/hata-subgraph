import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import { PropertyAdded } from "../generated/Registry/Registry"

export function createPropertyAddedEvent(
  landlord: Address,
  propertyID: Bytes,
  folderCID: string,
  title: string,
  area: i32
): PropertyAdded {
  let propertyAddedEvent = changetype<PropertyAdded>(newMockEvent())

  propertyAddedEvent.parameters = new Array()

  propertyAddedEvent.parameters.push(
    new ethereum.EventParam("landlord", ethereum.Value.fromAddress(landlord))
  )
  propertyAddedEvent.parameters.push(
    new ethereum.EventParam(
      "propertyID",
      ethereum.Value.fromFixedBytes(propertyID)
    )
  )
  propertyAddedEvent.parameters.push(
    new ethereum.EventParam("folderCID", ethereum.Value.fromString(folderCID))
  )
  propertyAddedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  propertyAddedEvent.parameters.push(
    new ethereum.EventParam(
      "area",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(area))
    )
  )

  return propertyAddedEvent
}
