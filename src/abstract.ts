abstract class Car{
  constructor(public name: string, public price: number, public maxSpeed: number) {}

  abstract explainCar(): void;
}

class Honda extends Car {
  constructor(
    public name: string,
    public price: number,
    public maxSpeed: number,
    private _company: string
  ) {
    super(name, price, maxSpeed);
  }

  explainCar(): void {
    console.log(`${this.name}は${this.maxSpeed}km/hが最高速です`);
    console.log(`価格は${this.price}万円です`);
  }
}

const gtx = new Honda('GT-X', 1000, 300, 'Honda');
gtx.explainCar();

