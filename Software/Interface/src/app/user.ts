export class User{
    constructor(
        public userid: string,
        public password: string,
        public name: string,
        public email: string,
        public phone?: string,
        public productid?: string,

      ) {  }
}
