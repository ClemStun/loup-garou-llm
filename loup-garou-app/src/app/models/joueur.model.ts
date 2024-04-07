import { Role } from "./role.model";

export class Joueur {
    constructor(
        public pseudo: string,
        public imgSrc: string,
        public role: Role,
    ) { }
}