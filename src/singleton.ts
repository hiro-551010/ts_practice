
class Parent {
  private static instance: Parent;
  private constructor(public name: string,public age: number) {}

  static getInstance() {
    if (Parent.instance) {
      return Parent.instance;
    }
    return Parent.instance = new Parent('Humie', 30);
  }
}

// シングルトンパターンではnewでインスタンスを作ることはできない
// コンストラクタにprivateを使用することで、それができるようになる
// それはインスタンスを一つしか作れないという決まり
// const smith = new Parent('Smith', 30);

const parents = Parent.getInstance();
const parents2 = Parent.getInstance();
console.log(parents, parents2);