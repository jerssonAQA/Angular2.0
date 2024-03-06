

export class Person{
    // public name:string;
    // private address:string;

    constructor(
        public name:string, 
        private address:string ='No Address'
        ){
        // this.name=name;
        // this.address=address;
    }
}

export class Hero extends Person{
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string
    ){
        super()
    }
} 

// const ironman = new Person('Alexander');
const ironman = new Hero('Alexander',45,'Tony');

console.log(ironman)
