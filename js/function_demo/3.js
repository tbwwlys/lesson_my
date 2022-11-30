// 变量的作用域
var name = '新';
function func() {
    var y = 1;
    var name = 'z';
    {
        let name = '喜';
        let x = 1;
        console.log(x,y)
    }
    
}
func();
console.log(y)