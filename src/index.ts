var hello: string = 'hello';
console.log(hello);

function add(a: number, b: number): number {
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
const fruits: string[] = ['apple', 'banana', 'grape'];

// タプル
const book: [string, number, boolean] = [
  'business',
  1500,
  false
];

// enum 列挙型
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}
const coffee = {
  hot: true,
  size: CoffeeSize.TALL
};

// union型
let unionType: number | string = 10;
let unionTypes: (number | string)[] = ['hello', 10];

// リテラル型
const apple: 'apple' = 'apple';
var clothSize: 'small' | 'medium' | 'large' = 'large';
// const cloth: {
//   color: string;
//   size: 'small' | 'medium' | 'large';
// } = {
//   color: 'white',
//   size: clothSize
// }

// エイリアス === 別名
type ClothSize = 'small' | 'medium' | 'large';
const cloth: {
  color: string;
  size: ClothSize;
} = {
  color: 'white',
  size: 'medium'
}

// 何も返さない void型
function sayHello(): void {
  console.log('Hello');
}

let tmp: undefined ;
let tmpNull: null;

const anotherAdd: (n1: number, n2: number) => number = add;

const doubleNumber = function (number: number) {
  return number * 2
};
// const doubleNumber2 = number => number * 2;
const doubleNumber3: (number: number) => number = number => number * 2;

// cb = callback関数
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  console.log(num * 2);
  const doubleNum = cb(num * 2);
}
doubleAndHandle(21, doubleNum => {
  return doubleNum
});

let unknownInput: unknown;
let text: string;
unknownInput = 'string';
unknownInput = 123;
unknownInput = true;
// これはできない 使うときに注意が必要
// text = unknownInput;
// これはできる unknownInputがstringなはずだから
if (unknownInput === 'string') {
  text = unknownInput;
}