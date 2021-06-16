export {};
let message = "hello world";
console.log(message);
console.log(message);
// variable declaration

let x = 10;
const y = 50;

x = 20;
// VAriable type
let biggenet: boolean = true;
let toatal: number = 0;
let name: string = "Jatin";
let n: null = null;
let u: undefined = undefined;
let myArray: number[] = [1, 2, 3];
let myArray2: Array<number> = [1, 2, 3];
let tuple1: [string, number] = ["jatin", 2434];

enum Color {
  Res,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);
// not sure what type o value  use any
let randomValue: any = 10;
randomValue = "akajk";
randomValue = true;
// union of tupe
let multi: number | boolean;
// now we can assign variable in those 2 types
multi = 2;
// ///////////functions
// in js
function add(num1, num2) {
  return num1 + num2;
}
// in ts
function add2(num1: number, num2: string): string {
  return num1 + num2;
}

add2(1, "r");
//  features in function optional and default parameter
// with optional parameter
// 2nd variabel is now undefined
function add3(num1: number, num2?: string): string {
  return num1 + num2;
}
add3(2);
// with default parameter we pass a value
function add4(num1: number, num2: string = "10"): string {
  return num1 + num2;
}

// Interfaces
//  it is possible to assign type as an object in type script

// function fullName(persone: { firstname: string; lastname: string }) {
//   console.log(`${persone.firstname} ${persone.lastname}`);
// }

// let p = { firstname: "jatin", lastname: "chourasia" };
// fullName(p);

interface Persone {
  firstname: string;
  lastname?: string;
}

function fullName(persone: Persone) {
  console.log(`${persone.firstname} ${persone.lastname}`);
}

let p = { firstname: "jatin" };
fullName(p);

//  class and Access Modefires
// class

class Employee {
  public employeeName: string;
  //   private for class only
  //   protected for class only and drived class
  constructor(name: string) {
    this.employeeName = name;
  }
  greet() {
    console.log(`good morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("jatin");
console.log(emp1.employeeName);

emp1.greet();

// inheritance

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`manager delagating task `);
  }
}

let m1 = new Manager("jatin");

m1.delegateWork();
m1.greet();
