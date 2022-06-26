// type = T
function copy<T extends {name: string}, U extends keyof T>(value: T, key: U): T {
  console.log(value[key]);
  return value;
}
console.log(copy({ name: 'Quill', age: 20}, 'name').name);

type K = keyof {
  name: string;
  age: number;
};


class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }
  get() {
    return this.data;
  }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('aaa');
stringLightDatabase.add('bbb');
stringLightDatabase.remove('aaa');
console.log(stringLightDatabase.get());

interface TmpDatabase<T> {
  id: number;
  data: T[];
}
const tmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32]
}

interface Todo {
  title: string;
  text: string
}
type Todoable = Partial<Todo>;
type ReadTodo = Readonly<Todo>;

const fetchData: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve('hello');
  }, 3000);
})
fetchData.then(data => {
  data.toUpperCase();
})
const vegetables: Array<string> = ['Tomato', 'Broccoli', 'Asparagus'];

interface ResponseData<T extends { message: string} = any> {
  data: T;
  status: number;
}
let tmp2: ResponseData;

interface Vegetables {
  tomato: string;
  pumpkin: string;
}
type MappedTypes = {
  -readonly [P in keyof Vegetables]-?: string
}

type ConditionalTypes = 'tomato' extends string ? number : boolean
type ConditionalTypesInfer = { tomato: 'tomato'} extends { tomato: infer R } ? R : boolean;
type DistributiveCondionalTypes<T> = T extends 'tomato' ? number : boolean;
let tmp3: DistributiveCondionalTypes<'tomato' | 'pumpkin'>
let tmp4: NonNullable<string | null>;
// let tmp5: ReturnType<>