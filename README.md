# vue-filter-eric

## 安装

```shell
npm install --save vue-filter-eric
```

### 全局引入

```js
/* in main.js */
import Vue from "vue";
import filters from "vue-filter-eric";

Vue.use(filters);
```

### 按需引入

```js
import { thousand } from "vue-filter-eric";

Vue.filter("thousand", thousand);
```

## 说明

### Date

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Params</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>dateFormat</td>
      <td>_format</td>
      <td>String | 'YYYY-MM-DD'</td>
      <td>日期格式化</td>
    </tr>
  </tbody>
</table>

### Math

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Params</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>abs</td>
      <td>-</td>
      <td>-</td>
      <td>绝对值</td>
    </tr>
    <tr>
      <td>cos</td>
      <td>-</td>
      <td>-</td>
      <td>余弦</td>
    </tr>
    <tr>
      <td>acos</td>
      <td>-</td>
      <td>-</td>
      <td>反余弦值</td>
    </tr>
    <tr>
      <td>asin</td>
      <td>-</td>
      <td>-</td>
      <td>反正弦值</td>
    </tr>
    <tr>
      <td>atan</td>
      <td>-</td>
      <td>-</td>
      <td>以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值</td>
    </tr>
    <tr>
      <td>ceil</td>
      <td>-</td>
      <td>-</td>
      <td>上舍入</td>
    </tr>
  </tbody>
</table>

### Number

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Params</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>thousand</td>
      <td>_symbol</td>
      <td>String | ' '</td>
      <td>千位分隔</td>
    </tr>
    <tr>
      <td>percent</td>
      <td>_decimals</td>
      <td>Number | 2</td>
      <td>百分比，保留x位有效小数</td>
    </tr>
    <tr>
      <td>toFixed</td>
      <td>_decimals</td>
      <td>Number | 2</td>
      <td>四舍五入，保留x位有效小数</td>
    </tr>
  </tbody>
</table>

### Object

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Params</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan=2>getLabelByValue</td>
      <td>list</td>
      <td>Array | []</td>
      <td rowspan=2>在list中找到对应value的label值</td>
    </tr>
    <tr>
      <td>label</td>
      <td>String | 'label'</td>
    </tr>
  </tbody>
</table>

### String

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Params</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan=3>strReplace</td>
      <td>regArr</td>
      <td>Array | []</td>
      <td rowspan=3>字符替换，隐藏手机号或者身份证号等
      replaceStr('18819322663',[3,5,3],0)  //188*****663
      ecDo.replaceStr('asdasdasdaa',[3,5,3],1) //***asdas***
      ecDo.replaceStr('1asd88465asdwqe3',[5],0)//*****8465asdwqe3
      ecDo.replaceStr('1asd88465asdwqe3',[5],1,'+')//1asd88465as+++++
      </td>
    </tr>
    <tr>
      <td>type</td>
      <td>Number | 0</td>
    </tr>
    <tr>
      <td>replaceText</td>
      <td>String | '*'</td>
    </tr>
    <tr>
      <td rowspan=2>strReplace</td>
      <td>size</td>
      <td>Number | 3</td>
      <td>格式化处理字符串,stringFormat('1234asda567asd890',4,'-') //"1-234a-sda5-67as-d890"</td>
    </tr>
    <tr>
      <td>delimiter</td>
      <td>String | ','</td>
    </tr>
  </tbody>
</table>

