"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    greeting() {
        console.log(`Hello! Im ${this.name}`);
        console.log(`Im ${this.age} years old`);
        if (Person.isAdult(this.age)) {
            console.log('Im Adult');
            return false;
        }
        console.log('Im child');
    }
    incrementAge(add = 1) {
        this.age += add;
    }
}
// name: string;
// private age: number;
// constructor(initName: string, initAge: number) {
//   this.name = initName;
//   this.age = initAge;
// }
// 省略可
Person.species = 'Homo sapiens';
const packman = new Person('packman', 10);
packman.incrementAge(15);
packman.greeting();
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    get subject() {
        return this._subject;
    }
    set subject(value) {
        this._subject = value;
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
