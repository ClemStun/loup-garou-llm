export class Message {
    constructor(
        public pseudo: string,
        public imgSrc: string,
        public wasDay: boolean,
        public message: string,
        public timer: string,
    ) { }
}