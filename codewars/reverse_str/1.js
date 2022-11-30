// const reverse = () => {
// }
// Object.prototype.toString.call([1,2,3]) 输出类型
// 匿名函数 
function fun() {
    console.log('好的');
}
const reverse = function (str) {
    let reverseStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        reverseStr += str[i];
    }
    return reverseStr;
    return str.split('').reverse().join('');
}
console.log(reverse('hello'));
// aba 回文字符串 对称性
// js 变量或常量的类型由值来决定
// split 切割 reverse 反转 join 连接
// toUpperCase toLowerCase
//"A BC".toLowerCase().replace(/[\W/_]g, '') /  /两个斜杠代表：正则表达式 \w 表示字符 \W 表示非字符 '1'表示替换成 1
//     /d 是数字 g 表示一直匹配 [\W/_] 包括了非字符 和 _ (非字符不包括_)
console.log(fun());

