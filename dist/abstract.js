"use strict";
class Car {
    constructor(name, price, maxSpeed) {
        this.name = name;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}
class Honda extends Car {
    constructor(name, price, maxSpeed, _company) {
        super(name, price, maxSpeed);
        this.name = name;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this._company = _company;
    }
    explainCar() {
        console.log(`${this.name}は${this.maxSpeed}km/hが最高速です`);
        console.log(`価格は${this.price}万円です`);
    }
}
const gtx = new Honda('GT-X', 1000, 300, 'Honda');
gtx.explainCar();
