- 搞清楚js 实例的生成过程
    1. js 类的构建比较独特
        - Person 构造函数
            JS是基于对象的面向对象
            模板 
            // JS 没有类  对象   Object   {} 
            var Person = {
                name: '....',
                age: '...'
            } 
            // 空对象
            js 实例化过程不是血缘关系， new Person()
            师徒关系 
            var aTao = {};  // Object  __proto__
            aTao 基于 Person 
            aTao.name = '阿涛'
            aTao.age = 17
            n 个人  繁琐
        - 封装  用函数
            function Person() { // constructor 
                this.
            }   
            // 血缘关系 ？js 却不是
            let aTao = new Person();
            // 基于对象的构建过程  new  本质
            // 基于原型式的面向对象
            function Person(name, age) {
                <!-- this.name = name -->
                var o = {}; // 基于对象  Object 空对象 o.__proto__ 
                o.name = name;
                o.age = age ;
                <!-- o.sayHi = function() {

                } -->
                o.__proto__ = Person.prototype 
                return o 
            }
            o.__proto__ == Person.prototype 
            // 共享 
            Person.prototype = {
                sayHi() {

                }
            }

            let aTo = Person();
            let aTo = new Person();
            aTo.sayHi();

    2. JS 本没有类， 基本上都是对象（除了简单数据类型） 
        - es6 以前没有class 关键字
        - 一切皆对象  基于对象   任何对象都有原型， 默认是Object.prototype 
        - js 函数可以封装类， 完全可以实现基于对象的构建 


    3. js 为了实现基于对象式的类的构建， 蛮拼 
        - 用函数作为类的申明（首字母大写）， 特别
            封装了 实例的构建过程
            this（new）  指向实例 ， 函数运行  完成给实例添加基于对象一样的属性  
        - 实例的方法 不要放到构造函数里申明， 因为给每个实例都分配一个函数
            内存是吃不消的（千千万）
            js 设计了 prototype 属性   函数也是对象 （外面）
            function Person() {
                this.name 
                this.
                <!-- new  Pserson() -->
                <!-- constructor  -->
            }
            //外面  有了原型  js 不在是传统的面向对象， 而是基于对象的  
            Person.prototype = {
                sayHi() {

                }
            }
        - 实例调用 所有实例共享的方法时 
            let aTao = new Person(); 
            aTao.__proto__ = Person.prototype 
            aTao.sayHi() // 基于原型的面向对象

- new 的过程发生了什么？
    