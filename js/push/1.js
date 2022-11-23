// const arr = [1,2,3];
// arr.push(4);

Array.prototype.push1 = function(num) {
    this[this.length] = num;
    return this.length;

}
const arr1 = Array(1, 2, 3);
console.log(arr1);
arr1.push1(4);
console.log(arr1);


/* 第一步 增长数组 

*/