"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "hello world";
console.log(message);
console.log(message);
// variable declaration
var x = 10;
var y = 50;
x = 20;
// VAriable type
var biggenet = true;
var toatal = 0;
var name = "Jatin";
var n = null;
var u = undefined;
var myArray = [1, 2, 3];
var myArray2 = [1, 2, 3];
var tuple1 = ["jatin", 2434];
var Color;
(function (Color) {
    Color[Color["Res"] = 0] = "Res";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
// not sure what type o value  use any
var randomValue = 10;
randomValue = "akajk";
randomValue = true;
// union of tupe
var multi;
// now we can assign variable in those 2 types
multi = 2;
// ///////////functions
// in js
function add(num1, num2) {
    return num1 + num2;
}
// in ts
function add2(num1, num2) {
    return num1 + num2;
}
add2(1, "r");
//  features in function optional and default parameter
// with optional parameter
// 2nd variabel is now undefined
function add3(num1, num2) {
    return num1 + num2;
}
add3(2);
// with default parameter we pass a value
function add4(num1, num2) {
    if (num2 === void 0) { num2 = "10"; }
    return num1 + num2;
}
function fullName(persone) {
    console.log(persone.firstname + " " + persone.lastname);
}
var p = { firstname: "jatin" };
fullName(p);
//  class and Access Modefires
// class
var Employee = /** @class */ (function () {
    //   private for class only
    //   protected for class only and drived class
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("good morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("jatin");
console.log(emp1.employeeName);
emp1.greet();
// inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("manager delagating task ");
    };
    return Manager;
}(Employee));
var m1 = new Manager("jatin");
m1.delegateWork();
m1.greet();
