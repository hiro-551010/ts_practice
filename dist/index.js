"use strict";
var hello = 'hello';
console.log(hello);
function add(a, b) {
    return a + b;
}
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
// 配列
const fruits = ['apple', 'banana', 'grape'];
// タプル
const book = [
    'business',
    1500,
    false
];
// enum 列挙型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
// union型
let unionType = 10;
let unionTypes = ['hello', 10];
// リテラル型
const apple = 'apple';
var clothSize = 'large';
const cloth = {
    color: 'white',
    size: 'medium'
};
// 何も返さない void型
function sayHello() {
    console.log('Hello');
}
let tmp;
let tmpNull;
const anotherAdd = add;
const doubleNumber = function (number) {
    return number * 2;
};
// const doubleNumber2 = number => number * 2;
const doubleNumber3 = number => number * 2;
// cb = callback関数
function doubleAndHandle(num, cb) {
    console.log(num * 2);
    const doubleNum = cb(num * 2);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
let unknownInput;
let text;
unknownInput = 'string';
unknownInput = 123;
unknownInput = true;
// これはできない 使うときに注意が必要
// text = unknownInput;
// これはできる unknownInputがstringなはずだから
if (unknownInput === 'string') {
    text = unknownInput;
}
