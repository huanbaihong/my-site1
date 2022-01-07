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

