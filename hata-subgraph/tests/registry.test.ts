import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes } from "@graphprotocol/graph-ts"
import { PropertyAdded } from "../generated/schema"
import { PropertyAdded as PropertyAddedEvent } from "../generated/Registry/Registry"
import { handlePropertyAdded } from "../src/registry"
import { createPropertyAddedEvent } from "./registry-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let landlord = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let propertyID = Bytes.fromI32(1234567890)
    let folderCID = "Example string value"
    let title = "Example string value"
    let area = 123
    let newPropertyAddedEvent = createPropertyAddedEvent(
      landlord,
      propertyID,
      folderCID,
      title,
      area
    )
    handlePropertyAdded(newPropertyAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("PropertyAdded created and stored", () => {
    assert.entityCount("PropertyAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "PropertyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "landlord",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "PropertyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "propertyID",
      "1234567890"
    )
    assert.fieldEquals(
      "PropertyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "folderCID",
      "Example string value"
    )
    assert.fieldEquals(
      "PropertyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "title",
      "Example string value"
    )
    assert.fieldEquals(
      "PropertyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "area",
      "123"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
