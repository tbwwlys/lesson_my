const arr = [1,2,3];
Array.prototype.push2 = function() {
    // console.log('2222222222222222');
    for(let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    console.log(typeof arguments, Object.prototype.toString.call(arguments));
    console.log(this.length);
    return this.length;
}
arr.push2(4,5);
console.log(arr);