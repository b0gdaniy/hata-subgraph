import { ListingCreated } from "../generated/Marketplace/Marketplace"
import { Property } from "../generated/schema"

export function handleActiveProperty(event: ListingCreated): void {
	let property = Property.load(event.params._propertyID)

	if (property === null) {
		property = new Property(event.params._propertyID)
	} else {
		property.isActive = true
	}


	property.save()
}
