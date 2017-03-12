import { Game } from './game'
import { User } from './user'
import { ISerializable } from './serializable'

export class Proposal implements ISerializable<Proposal> {
    game: Game;
    proposedBy: User;
    proposedByPick: string;
    proposedTo: User
    units: string;
    maxUnits: string;
    line: string;
    pick: string;

    constructor() {
        this.units = '1';
        this.maxUnits = '1';
        this.proposedByPick = 'Favorite';
    }

    deserialize(input) {
        this.game = new Game().deserialize(input.game);
        this.proposedByPick = input.proposedByPick;
        this.proposedBy = new User().deserialize(input.proposedBy);
        this.proposedTo = new User().deserialize(input.proposedTo);
        this.units = input.units;
        return this;
    }
}