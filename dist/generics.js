"use strict";
// type = T
function copy(value, key) {
    console.log(value[key]);
    return value;
}
console.log(copy({ name: 'Quill', age: 20 }, 'name').name);
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add('aaa');
stringLightDatabase.add('bbb');
stringLightDatabase.remove('aaa');
console.log(stringLightDatabase.get());
const tmpDatabase = {
    id: 3,
    data: [32]
};
const fetchData = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
});
fetchData.then(data => {
    data.toUpperCase();
});
const vegetables = ['Tomato', 'Broccoli', 'Asparagus'];
let tmp2;
let tmp3;
let tmp4;
// let tmp5: ReturnType<>
