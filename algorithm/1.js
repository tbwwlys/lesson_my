function divide(dividend, divisor){
    //定义一个被除数
    var dividend = dividend;
    //定义一个除数
    var divisor = divisor;

     //将除数和被除数统一 设置为 正数
     var negative = 2;
     if(dividend < 0) {
        negative--;
        dividend = -dividend;
     }
     if(divisor < 0) {
        negative--;
        divisor = -divisor;
     }
     //接收计算下来的值
     var result = divideCore(dividend, divisor);
     // 利用三元运算符 确定结果的正负
     return negative == 1 ? -result : result;
}
function divideCore(dividend, divisor) {
    var dividend = dividend;
    var divisor = divisor;
    var result = 0;
    //如果 dividend 大于 divisor 进行下一步计算 否则直接返回 result = 0
    while(dividend >= divisor) {
        var value = divisor;
        //设定一个系数quotient确定 能够大于多少个divisor 即商
        var quotient = 1; 
        //如果大于两倍的value 则系数加倍，并且将value翻倍 直到while循环结束 
        while(dividend >= value + value) {
            quotient += quotient;
            value += value;
        }
        //将quotient 全部加起来得到 最后的商 结果
        result += quotient;
        dividend -= value;
    }
    //将计算结果返回
    return result;
}
console.log(divide(-7, 3));
