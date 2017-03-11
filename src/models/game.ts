import { ISerializable } from './serializable'

export class Game implements ISerializable<Game> {
    homeTeam: string;
    awayTeam: string;
    favorite: string;
    underdog: string;
    line: string;
    underdogLine: string;
    overUnder: string;
    date: Date;
    time: string;

    constructor() {
    }

    deserialize(input) {
        this.homeTeam = input.homeTeam;
        this.awayTeam = input.awayTeam;
        this.favorite = input.favorite;
        this.underdog = input.underdog;
        this.line = input.line;
        this.underdogLine = input.underdogLine;
        this.overUnder = input.overUnder;
        this.date = input.date;
        this.time = input.time;
        return this;
    }
}