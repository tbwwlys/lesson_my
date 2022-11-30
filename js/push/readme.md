<<<<<<< HEAD
# JS 
- push 
    数组的功能
    哪两种数据结构的什么操作？
    线性和非线性
    [] 或 链表 队列FIFO / 栈 FIFO
    [{value: 1,next:},{value: 2,next:},{value: 3, next:}]
    [1, 2, 3]  初始的地址， a[0],a[1],a[2] 连续的
    物理地址？内存 浪费和溢出
    a[i] = &arr + (i - 1)* 2
- js 和其他语言不同的地方
    原型的概念
    1. 声明数组的多种方法
        const arr = [1, 2, 3]
        const arr1 = new Array(1, 2, 3);
    2. 数组对象实例添加一个公有的方法
        js 里面，Array 类 prototype 原型 添加一个公共的方法
        Array.prototype.push1 = function () {}
    3. 对象方法中，this 指向实例后的对象
        arguments 指向形参
=======
# JS 
- push 
    数组的功能
    哪两种数据结构的什么操作？
    线性和非线性
    [] 或 链表 队列FIFO / 栈 FIFO
    [{value: 1,next:},{value: 2,next:},{value: 3, next:}]
    [1, 2, 3]  初始的地址， a[0],a[1],a[2] 连续的
    物理地址？内存 浪费和溢出
    a[i] = &arr + (i - 1)* 2
- js 和其他语言不同的地方
    原型的概念
    1. 声明数组的多种方法
        const arr = [1, 2, 3]
        const arr1 = new Array(1, 2, 3);
    2. 数组对象实例添加一个公有的方法
        js 里面，Array 类 prototype 原型 添加一个公共的方法
        Array.prototype.push1 = function () {}
    3. 对象方法中，this 指向实例后的对象
        arguments 指向形参
>>>>>>> master
        arr.length-- 表示数组减一 如果是 [1,2,3] 变成 [1,2]