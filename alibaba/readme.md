<<<<<<< HEAD
# 阿里巴巴双十一界面开发
- 设计稿
    750px 像素  一种尺寸 移动页面
    iPhone的小尺寸 375pt retina 屏幕 设计的标准
- 前端使命
    html + css + js 1 像素不差的还原设计稿
    - 交互
    - css 实现视觉效果 css 动画
    - 设计稿是静态的， 我们要做动态的
    - 兼容性 阿里 兼容性达到恐怖的 99.99%
- css reset 
    1. 抹平不同浏览器的预设样式，从零出发 ， 在所有浏览器上表现一致
    2. 利用 css inherit 继承 body font-size font-family ... 默认字体大小16像素
- rem 单位
    1. 在移动端，为了兼容少用甚至不用px 
    2. 先给html标签设置font-size
        37.5px 固定？
        等比例 1/10 去做栅格系统 布局
        如何在不同的设备上让 1rem = 设备宽度/10
    3. html 的font-size 要动态设置
        w = window.innerWidth 拿到设备宽度
        document.documentElement.style.fontSize = w + 'px';
=======
# 阿里巴巴双十一界面开发
- 设计稿
    750px 像素  一种尺寸 移动页面
    iPhone的小尺寸 375pt retina 屏幕 设计的标准
- 前端使命
    html + css + js 1 像素不差的还原设计稿
    - 交互
    - css 实现视觉效果 css 动画
    - 设计稿是静态的， 我们要做动态的
    - 兼容性 阿里 兼容性达到恐怖的 99.99%
- css reset 
    1. 抹平不同浏览器的预设样式，从零出发 ， 在所有浏览器上表现一致
    2. 利用 css inherit 继承 body font-size font-family ... 默认字体大小16像素
- rem 单位
    1. 在移动端，为了兼容少用甚至不用px 
    2. 先给html标签设置font-size
        37.5px 固定？
        等比例 1/10 去做栅格系统 布局
        如何在不同的设备上让 1rem = 设备宽度/10
    3. html 的font-size 要动态设置
        w = window.innerWidth 拿到设备宽度
        document.documentElement.style.fontSize = w + 'px';
>>>>>>> master
    