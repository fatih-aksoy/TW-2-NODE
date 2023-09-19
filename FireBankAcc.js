/*------------------------------------------------------------------*
const Person = class {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(`My name is ${this.name}`);
  }
};
//!Define a class named "BankAccount" derived from the Person class.
class BankAccount extends Person {
  #balance; //! private property

  constructor(name, balance = 0) {
    //! we will get name from constructor above. "super(name)"
    super(name);
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("The amount of deposit should be greater than 0.");
    } else {
      this.#balance = this.#balance + amount;
      console.log(
        `${amount} has been added to ${this.name}'s account. New balance:${
          this.#balance
        }`
      );
    }
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("The amount of withdrawal should be greater than 0, ");
    } else if (amount > this.#balance) {
      console.log(
        `Fund is not enought. ${this.name}'s account balance:${this.#balance}`
      );
    } else {
      this.#balance = this.#balance - amount;
      console.log(
        `${amount} has been withdrawn from ${this.name}'s account. New balance: ${
          this.#balance
        }`
      );
    }
  }
  toGetBalance() {
    return this.#balance;
  }
}
const person1= new Person("Inzar");
person1.sayName();

const account1 = new BankAccount("Inzar",5000);
account1.deposit(300);
account1.withdraw(5000);
/*------------------------------------------------------------------*/
class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`Benim ismim ${this.name}`);
  }
}

class BankAccount extends Person {
  #balance;

  constructor(name, balance) {
    super(name);
    this.#balance = balance;
  }
  deposit(value) {
    this.#balance += value;
    // console.log(`Bakiye : ${this.#balance}`);
  }
  withdraw(value) {
    if (value > this.#balance && this.#balance > 0) {
      console.log("bakiye yetersiz");
    } else {
      this.#balance -= value;
    //   console.log(`Bakiye : ${this.#balance}`);
    }
  }

  balance(){
    console.log(`Bakiye : ${this.#balance}`);
  }

}
// const semih = new Person("Semih")
const semihAccount = new BankAccount("semih", -500);
console.log("🚀 ~ file: oop.js:502 ~ semihAccount:", semihAccount)
semihAccount.deposit(200);
semihAccount.withdraw(500);
semihAccount.balance();



// let ahmet = {
//     name: "ahmet",
//     sayName: () => console.log(`Benim ismim ${this.name}`) }