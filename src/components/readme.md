# Avatar

<img 
    src = "https://raw.githubusercontent.com/huanbaihong/learnVuemdReadMe/master/Avata.png" 
    alt = "img-2022010601"
    style = "zoom: 50%"
/>

### 属性

| 属性名 |  含义  |     类型    |   必填     |默认值|
| ----- | ------ | --------- |  --------| ------ |
|   url  | 头像图片路径 |  String  |   是   |   无  |
|   size  | 头像尺寸，宽高相等 |  Number |  否  | 50  |


# Icon

图标组件
<img src = "https://raw.githubusercontent.com/huanbaihong/learnVuemdReadMe/master/Icon1.png"/>
图标来自【阿里巴巴矢量库】

### 属性

| 属性名 |  含义  |     类型    |   必填     |默认值|
| ----- | ------ | --------- |  --------| ------ |
| style | 图标名  |   String   |  是     |   无  |

有效图标如下：
<img src ="https://raw.githubusercontent.com/huanbaihong/learnVuemdReadMe/master/Icon2.png" alt = "icon-2022010602"/>


# Pager

<img src = "https://raw.githubusercontent.com/huanbaihong/learnVuemdReadMe/master/Pager.png" />

### 属性

| 属性名 |     含义   |    类型   |   必填     | 默认值  |
| ----- | --------- | --------- |  --------  | ------ |
| total  |  总数据量  |   Number |    否      |  0   |
| current | 当前页码    |  Number  |     否     |  1   |
| limit   |  页容量 | Number | 否    |   10 |
|visibleNumber| 可见页码量| Number | 否 | 10 |

### 事件

| 事件名 |   含义   |   事件参数  |  参数类型  |
| ----- | -------- | --------- |  -------- |
| pageChange | 页码变化 | 新的页码 | Number |

# Empty

<img src = "https://raw.githubusercontent.com/huanbaihong/learnVuemdReadMe/master/Empty.png" alt = "empty" style = "zoom: 20%"/>  
<br/>该组件需要在外层容器中横向居中，使用时父元素需要设置定位

### 属性
| 属性名 |     含义   |    类型   |   必填     | 默认值  |
| ----- | --------- | --------- |  --------  | ------ |
| text  | 显示的内容  |  String   |   否    |   无数据   |


# ImageLoader

组件可以实现一个渐进式图片
![alt tag](https://raw.githubusercontent.com/huanbaihong/learnVuemdReadMe/master/20201115132049.gif)

### 属性
| 属性名    |     含义   |    类型   |   必填     | 默认值  |
| -----    | --------- | --------- |  --------  | ------ |
| src       | 原始图片的路径| String |    是      |  无     |
|placeholder| 占位图片的路径| String |    是      |   无    |
|duration   | 原始图片加载完成后，切换到原始图片需要的毫秒数| Number  |  否   |  500 |

### 事件
| 事件名 |   含义   |   事件参数  |  参数类型  |
| ----- | -------- | --------- |  -------- |
| load  | 图片加载完成 |   无     |    无    |

# Menu

![menu img](https://raw.githubusercontent.com/huanbaihong/learnVuemdReadMe/master/menu.png)

组件祖耀横向充满容器，背景透明
每个菜单的信息如下：
> **首页**
>
> 链接地址：/
>
> 选中条件：路径等于 /
>
> **文章**
>
> 链接地址：/blog
>
> 选中条件：路径以`/blog`开头
>
> **关于我**
>
> 链接地址：/about
>
> 选中条件：路径等于`/about`
>
> **项目&效果**
>
> 链接地址：/project
>
> 选中条件：路径等于`/project`
>
> **留言板**
>
> 链接地址：/message
>
> 选中条件：路径等于`/message`

# Contact

<img src="http://mdrs.yuanjin.tech/img/20201130165641.gif" alt="iShot2020-11-30下午04.55.47" style="zoom:40%;" />

该组件需要横向撑满容器，背景色透明

> 1. 如何实现点击弹出QQ对话？
>
>    设置超链接为：tencent://message/?Menu=yes&uin=要对话的QQ号&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45
>
> 2. 如何实现点击弹出发送邮件？
>
>    设置超链接为：mailto:邮件地址