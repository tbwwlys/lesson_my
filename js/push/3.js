const arr = [1,2,3];
Array.prototype.pop1 = function () {
    const temp = this[this.length-1];

    // this[this.length - 1] = null;
   this.length--;
    return temp;
}
arr.pop1();
console.log(arr);
