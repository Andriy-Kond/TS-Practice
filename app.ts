class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    // this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];
  // protected key: Key;

  constructor(protected key: Key) {
    // this.key = key;
  }

  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error('Door is close');
    }

    this.tenants.push(person);
    console.log('Person inside');
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (this.key.getSignature() !== key.getSignature())
      throw new Error('This key not for this door');
    return (this.door = true);
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
