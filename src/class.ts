class Person {
  // name: string;
  // private age: number;

  // constructor(initName: string, initAge: number) {
  //   this.name = initName;
  //   this.age = initAge;
  // }
  // 省略可

  static species = 'Homo sapiens';
  static isAdult (age: number) {
      if (age > 17) return true;
      return false;
  }

  constructor(public readonly name: string, protected age: number) {
  }

  greeting(this: Person) {
    console.log(`Hello! Im ${this.name}`);
    console.log(`Im ${this.age} years old`);
    if (Person.isAdult(this.age)){
      console.log('Im Adult');
      return false;
    }
    console.log('Im child');
  }

  incrementAge(add: number = 1) {
    this.age += add;
  }
}
const packman = new Person('packman', 10);
packman.incrementAge(15);
packman.greeting();

class Teacher extends Person {
  get subject(): string {
    return this._subject;
  }

  set subject(value: string){
    this._subject = value;
  }

  constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }

  // 親のメソッドと同じ名前のメソッドの時は返り値の型が同じでないとダメ
  greeting() {
    console.log(`Im ${this.name}`);
    console.log(`Im ${this.age} years old`);
    console.log(`Im teaching ${this.subject}`);
    return undefined;
  }
}

const osamu = new Teacher('Osamu', 30, 'Math');
osamu.subject = 'P.E.';
osamu.greeting();
console.log(Person.species);
console.log(Person.isAdult(20));
const manami = new Person('Manami', 10);
manami.greeting();