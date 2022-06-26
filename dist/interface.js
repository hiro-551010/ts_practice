"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
const human = {
    name: 'Quill',
    // nickName: 'Q',
    age: 38,
    greeting(message) {
        console.log(message);
    }
};
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log(message);
    }
}
const user = new Developer('Quill', 38, 3);
user.greeting();
