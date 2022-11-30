# 小程序 云开发

## 现代开发方式 
    1. 小程序 界面直接手机打开 4s店做一款试驾应用
    2. 选择技术方案
        Android  IOS
        小程序 
    3. 数据库不需要安装 云端
    4. 不需要部署 一键发布到云端
## 小程序开发知识点
    1. 开发一个个page
        /pages
    2. page结构
        wxml 结构
            动态模板
        wxss 样式
            vw vh 适配所有手机
            绝对居中
            page 在小程序每个页面隐藏的 选用标签选择器 
            .container {} 类选择器 
            选择器优先级
                1.id选择器（#myid）
                2.类选择器（.myclassname）
                3.标签选择器（div,h1,p）
                4.子选择器（ul < li）
                5.后代选择器（li a）
                6.伪类选择（a:hover,li:nth-child）
            page 相对定位 relative 100vm 100vh
            container absolute
                top 50% left 50% 中心点
            transform:translate(-50%, -50%)
        js 逻辑
            page({
                data:{
                    //可以绑定的数据
                    title: '',
                    image: ''
                }
            })