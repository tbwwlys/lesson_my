// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }
// 构数函数
`use strict`;
var name = 'z';
var age = 18;
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function() {
    console.log(`hi,我是${this.name},今年${this.age}岁`);
    console.log('hi,我是'+ this.name + ',今年' + this.age + '岁');
}
const person = new Person('张',18);
person.sayHello();