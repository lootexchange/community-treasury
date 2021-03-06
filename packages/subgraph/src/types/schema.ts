// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Vote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Vote entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Vote entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Vote", id.toString(), this);
  }

  static load(id: string): Vote | null {
    return store.get("Vote", id) as Vote | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get voter(): string {
    let value = this.get("voter");
    return value.toString();
  }

  set voter(value: string) {
    this.set("voter", Value.fromString(value));
  }

  get proposalId(): BigInt {
    let value = this.get("proposalId");
    return value.toBigInt();
  }

  set proposalId(value: BigInt) {
    this.set("proposalId", Value.fromBigInt(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get support(): boolean {
    let value = this.get("support");
    return value.toBoolean();
  }

  set support(value: boolean) {
    this.set("support", Value.fromBoolean(value));
  }
}
