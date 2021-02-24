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

export class XToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save XToken entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save XToken entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("XToken", id.toString(), this);
  }

  static load(id: string): XToken | null {
    return store.get("XToken", id) as XToken | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get mints(): Array<string> | null {
    let value = this.get("mints");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set mints(value: Array<string> | null) {
    if (value === null) {
      this.unset("mints");
    } else {
      this.set("mints", Value.fromStringArray(value as Array<string>));
    }
  }

  get redeems(): Array<string> | null {
    let value = this.get("redeems");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set redeems(value: Array<string> | null) {
    if (value === null) {
      this.unset("redeems");
    } else {
      this.set("redeems", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class MintEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MintEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MintEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MintEntity", id.toString(), this);
  }

  static load(id: string): MintEntity | null {
    return store.get("MintEntity", id) as MintEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get xToken(): string {
    let value = this.get("xToken");
    return value.toString();
  }

  set xToken(value: string) {
    this.set("xToken", Value.fromString(value));
  }

  get nftIds(): Array<BigInt> | null {
    let value = this.get("nftIds");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set nftIds(value: Array<BigInt> | null) {
    if (value === null) {
      this.unset("nftIds");
    } else {
      this.set("nftIds", Value.fromBigIntArray(value as Array<BigInt>));
    }
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class RedeemEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save RedeemEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RedeemEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RedeemEntity", id.toString(), this);
  }

  static load(id: string): RedeemEntity | null {
    return store.get("RedeemEntity", id) as RedeemEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get xToken(): string {
    let value = this.get("xToken");
    return value.toString();
  }

  set xToken(value: string) {
    this.set("xToken", Value.fromString(value));
  }

  get nftIds(): Array<BigInt> | null {
    let value = this.get("nftIds");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set nftIds(value: Array<BigInt> | null) {
    if (value === null) {
      this.unset("nftIds");
    } else {
      this.set("nftIds", Value.fromBigIntArray(value as Array<BigInt>));
    }
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}
