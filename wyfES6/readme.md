# let 命令
- {
    let a = 10;
    var b = 1;
}
    a // ReferenceError: a is not defined.
    b // 1
- let声明的变量只在它所在的代码块有效。
    
-  var a = [];
        for (var i = 0; i < 10; i++) {
            a[i] = function () {
            console.log(i);
            };
        }
        a[6](); // 10

- 变量i是 var 命令声明的，在全局范围内都有效，所以全局只有一个变量i。每一次循环，变量i的值都会发生改变，而循环内被赋给数组a的函数内部的console.log(i)，里面的i指向的就是全局的i。也就是说， 所有数组a的成员里面的 i ，指向的都是同一个 i ，导致运行时输出的是最后一轮的 i 的值，也就是 10。

    - var 会发生变量提升但是 let 不会发生变量提升
        - // var 的情况
        console.log(foo); // 输出undefined
        var foo = 2;
        // let 的情况
        console.log(bar); // 报错ReferenceError
        let bar = 2;

    - 暂时性死区
        - 代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”
        - var tmp = 123;
            if (true) {
                tmp = 'abc'; // ReferenceError
                let tmp;
            }
        - if (true) {
            // TDZ开始
            tmp = 'abc'; // ReferenceError
            console.log(tmp); // ReferenceError
            let tmp; // TDZ结束
            console.log(tmp); // undefined
            tmp = 123;
            console.log(tmp); // 123
        }
        - 上面代码中，在let命令声明变量tmp之前，都属于变量tmp的“死区”。
    - 
# const 命令
- const 声明一个只读的常量
    1. 一但声明常量值就不能改变，
    2. 一但声明就必须立即初始话，不能留到以后赋值
    3. const 作用域与 let 相同只在块级作用域内有效
    4. const 与 let 一样必须声明的常量是不提升的  有暂时性死区 只能在声明位置后使用
    5. 和let 一样不可重复声明
- const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动












