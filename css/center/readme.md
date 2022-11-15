CSS Rule
    1. 盒子模型 content + padding + border + margin
    2. 背景颜色调试大法
    3. css 布局方式的一种 float
        - 离他最近的position relative 元素定位 
        - 如果没有就一直往外找 直到body  
    4. block 块级元素 盒子能力 占整个一行， 设置宽高 把兄弟元素挤下去
    5. inline 行类元素 没有盒子 自身内容撑起来的 不能设置宽高
    6. inline-block 既能设置宽高 又不会把兄弟元素挤
    下去。
    7. display: flex; 弹性布局
- 垂直居中
    1. 父子元素
        父元素 relative(不是必须的)
        子元素 absolute
    2. 要不要先确定子元素的大小 
        transform rotate | translate | scale
        变基 
- 定位方法
    - 定位 + margin 负值
        父元素 一定要得到大小 (不如 transform)
    - 定位 + transform
        相对于自身移动
    - calc 将父元素的50% 减去 子元素的50%, 缺点就是性能不好，需要计算
    - 弹性布局
        不用定位 
        缺点是太新了，兼容性不行






