import { Game } from './game'
import { User } from './user'
import { ISerializable } from './serializable'

export class Bet implements ISerializable<Bet> {  
    game: Game;
    proposer: User;
    acceptor: User;
    units: string;
    proposerPick: string;

    constructor(){
    }

    deserialize(input) {
        return this;
    }
}