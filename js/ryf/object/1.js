function Cat(name,color){

    this.name = name;
    
    this.color = color;
    
}
Cat.prototype.type = "猫科动物";
    
Cat.prototype.eat = function(){alert("吃老鼠")};
const cat1 = new Cat('小花', '绿色');
const cat2 = new Cat('小红', '红色')