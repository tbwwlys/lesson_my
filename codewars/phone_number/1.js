function createPhoneNumber(numbers) {
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
    // return '(' + numbers[0] + numbers[1] + numbers[2] + ')' + numbers[3] + numbers[4] +numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9];
    // (123)456-7890
}
numbers = createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let num = nums.join('');
let a = num.slice(0,2);
console.log(a);
// console.log(numbers);
// console.log('(' + [1,2,3].join('') + ')' + ' ' +[4,5,6].join('') + '-' + [7,8,9,0].join(''));
