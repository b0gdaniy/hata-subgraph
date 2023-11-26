import { PropertyAdded } from "../generated/Registry/Registry"
import { Property } from "../generated/schema"

export function handlePropertyAdded(event: PropertyAdded): void {
  let property = Property.load(event.params.propertyID)
  if (property === null) {
    property = new Property(event.params.propertyID)
  }

  property.landlord = event.params.landlord
  property.propertyID = event.params.propertyID
  property.folderCID = event.params.folderCID
  property.title = event.params.title
  property.area = event.params.area

  property.save()
}
