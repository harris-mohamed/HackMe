export class User{
    constructor(
        private userid: string,
        private name: string,
        private email: string,
        private phone?: string
      ) {  }
}