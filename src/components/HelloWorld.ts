export class HelloWorld {
    name:string
    constructor(name:string) {
        this.name = name;
    }

    greet():string {
        return `Hola mundo, Webpack con ${this.name}`;
    }
}