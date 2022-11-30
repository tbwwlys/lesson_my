/* //拷贝数组
let arr = [1, 2, 3];
let arr1 = [1,...arr];
console.log(arr1);
// 合并数组
let arr2 = [4, 5, 6];
console.log(arr2);
//合并对象
let obj = {name: 'zzz'};
let obj1 = {age: 18};
let obj2 = {...obj, ...obj1};
console.log(obj2);
let params = {
    name: 'zzz',
    age: 18,
    type: 1
}
let {type, ...nameAge} = params;
console.log(nameAge); */
const name = 'zzz', age =18, city = 'ja';
const userInfo = {
    name: name,
    age: age,
    city: city
}
console.log(userInfo);
const obj = {a: 1, b: 2,c: 3};
const keys = Object.keys(obj);
const values = Object.values(obj);
const entries = Object.entries(obj);
console.log(keys);
console.log(values);
console.log(entries);
let message = 1;
let body = 2;
let data = 3;
// const info = message?.body?.data?.obj; //左侧的值不为null和undefined的时候就会取到右侧的值
// const info = (obj && obj.a ) || null;
const info = obj?.a?.b || null;
console.log(info);
const myInfo = `myname is ${name},my age is ${age}.`;
const result = `${name} ${age > 18 ? '成年了' : '未成年'}`;
console.log(myInfo);
console.log(result);