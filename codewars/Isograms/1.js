function isIosgrams(str) {
    if(str === ''){
        return true;
    }
    str = str.toLowerCase();
    let arr = str.split('');
    arr.sort();
    for(let i = 0; i < arr.length; i++){
        let char = arr[i];
        for(let x = 0; x < arr.length; x++){
            if(arr.indexOf(char) == x){
                continue;
            }else if(char == arr[x]){
                
                return false;
            }
            else{
            }                      
        }
        /* for(let j = i+1; j < arr.length; j++){
            if(char == arr[j]){
                return false;
            }
        } */
    }
}
function isIsogram(str){
    if(str === ''){
          return true;
      }
    str = str.toLowerCase();
    let arr = str.split('');
    let answer;
    for(let i = 0; i < arr.length; i++){
        let char = arr[i];
        for(let x = 0; x < arr.length; x++){
            if(arr.indexOf(char) == x){
                continue;
            }else if(char == arr[x]){
                answer = false;
                return false;
            }
            else{
              answer = true;
            }                      
        }
    }
    return answer;
  }
// function isIsogram(str){
//   // 解法 
//   if (str === '') return true;
//   str = str.toLowerCase();
//   let arr = str.split(''); // 字母数组 
//   let answer;
//   for (let i = 0; i < arr.length; i++) {
//     // 外层循环 当前字符 
//     let char = arr[i];
//     for (let x = 0; x < arr.length; x++) {
//         // 内层循环  当前下标
//         // 当前字符串是 第一次在数组中出现的， 而且位置为x   x变化的？ 
//         // x 变化的时候， 只可能有两种情况  arr[x] == char  !=char 
//         if (arr.indexOf(char) == x) { 
//             continue;
//         } else if (char != arr[x]) {
//             answer = true;
//         } else {
//             answer = false;
//             return false 
//         }
//     }
//     // for (j = i + 1; j < arr.length; j++) {
//     //     if (arr[j] == char) {
//     //         return false
//     //     }
//     // }
//   }
//   return answer
// //   console.log(str);
//   // 暴力解法  O(n^2)

// }
// str => arr => sort 
function isIsogram(str){
    if (str === '') return true;
    str = str.toLowerCase();
    let arr = str.split('');
    arr.sort();
    console.log(arr);
}

isIsogram('moOse');
console.log(isIosgrams('aba'));
function isIsogram(str){
    if(str === '') return true;
    str = str.toLowerCase();
    let arr = str.split('');
    let obj = {};
    let answer;
    for(let i = 0; i < arr.length; i++){
        if(obj[char] == 1){
            answer = false;
             return false;
        } else{
            obj[char] = 1;
        }
    }
    return answer;
}