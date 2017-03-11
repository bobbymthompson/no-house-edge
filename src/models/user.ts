import { ISerializable } from './serializable'

export class User implements ISerializable<User> {
    id: string;
    name: string;
    picture: string

    constructor() {
    }

    deserialize(input) {
        this.id = input.id;
        this.name = input.name;
        this.picture = input.picture;
        return this;
    }

    get firstname(): string {
        return this.name.split(" ").shift();
    }
}