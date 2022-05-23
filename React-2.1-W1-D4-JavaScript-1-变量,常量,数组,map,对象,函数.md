# JavaScript小传
浏览器还不能支持所有 JavaScript 的最新特性。 基于这个事实，许多在浏览器中运行的代码需要从一个新版本的 JavaScript 转译到了一个更旧、更兼容的版本。

如今，最流行的转译方法是使用 Babel。

在使用 create-React-app 创建的 React 应用中转译是自动配置好的。

Node.js是一个基于谷歌的 chrome V8 引擎的 JavaScript 运行时环境，可以在任何地方工作，从服务端到移动端。 

让我们练习使用 Node 编写一些 JavaScript。 

代码文件以 .js结尾，通过 `node 文件名.js `命令以运行文件。

还可以将 JavaScript 代码编写到 Node.js 控制台(通过在命令行中键入 _node_ 打开)，或者浏览器的开发工具控制台中。
# 变量与常量

在 JavaScript 中有以下几种定义变量的方法:

```js
const x = 1
let y = 5

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = 'sometext'
console.log(x, y)   // 1, sometext are printed
x = 4               // causes an error
```

const实际上并没有定义一个变量，而是定义了一个常量，也就是其值不能再更改了。（对于数组而言，不是这样的）

相对应的，let定义了一个普通变量。

```js
const a = 6
let v =9
```

go中有`:=`，因为go是强类型，`:`用来声明`=`用来赋值。
js就不强调类型，只有`=`。


# 数组 Arrays
也是从0开始数。

```js
const b = [6,5,4,3,2,1]

b.push(5) //在数组b最后加上5

console.log(b)//输出[6, 5, 4, 3,2, 1, 5]

console.log(b.length) //b.length为b的长度

b.forEach( value => { console.log(value) } )  

```

即使将数组用 const 定义，也可以修改该数组中的内容。 

因为数组是一个对象，而数组变量总是指向这同一个对象。 

当添加新的元素时，数组的内容也将发生变化。

遍历元素的一种方法是使用 _forEach_ ，如示例中所示， _forEach_ 接收一个函数作为入参，这个函数用到了箭头语法。
forEach 为数组中的每个元素调用了这个函数，并总是将这单个项作为参数传递。
数组中每个元素都被当做value使用了一次。
```js
value => {
  console.log(value)
}
```

在React代码中，最好使用`concat`方法 ，因为它不向数组中添加元素，而是创建一个新数组，新数组中包含了旧数组和新的元素。

 `concat()` 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
 括号内可以是数组，也可以是普通的值
```js
const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arr3 = arr1.concat(arr2)

const arr4 = arr3.concat(5)

console.log(arr3)//输出[ 1, 2, 3, 4, 5, 6 ]
```

arr3.concat(5) 这种方法调用不会向旧数组添加新的元素，而是直接返回一个新数组，该数组除了包含旧数组的元素外，还包含新的元素。


# map是在数组中定义的，用于创建一个新数组

`map()` 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

`forEach`也是历遍，但没有创造数组。

```js
const arr1 = [4,5,9]
const arr2 = arr1.map(x => x+1)
console.log(arr2) //输出[ 5, 6, 10 ]
```

## Map 还可以将数组转换为完全不同的内容:

```js
const arr1 = [4,5,9]
const arr3 = arr1.map(x => ( `<h1>` + x + `</h1>` )  )
console.log(arr3) //输出[ 5, 6, 10 ]
```
输出`[ '<h1>4</h1>', '<h1>5</h1>', '<h1>9</h1>' ]`
里面是标签的数组。


**解构赋值**语法是一种 Javascript 表达式。通过**解构赋值,** 可以将属性/值从对象/数组中取出,赋值给其他变量。

即使将数组用 const 定义，也可以修改该数组中的内容。 

因为**数组是一个对象**，而数组变量总是指向这同一个对象。 

当添加新的元素时，数组的内容也将发生变化。

数组中的单个元素可以很容易地通过解构赋值赋给变量。

```js
const arr1 = [4,5,6,7,8,9]
const arr2 = [a,b,...rest] =arr1
console.log(a) //4
console.log(b) //5
console.log(rest)  //[ 6, 7, 8, 9 ]
```

`...rest`直接将剩下的都赋值到rest。
rest可以换成其他的字母单词。

# Objects

【对象】类似golang里的map，一些键值对组成的常量。

JavaScript 是**区分大小写**的，并使用 **Unicode** 字符集。所以可以用所有uni字符集的语言，来赋值，比如德语和中文。

标识符只能包含字母或数字或下划线（`_`）或美元符号（`$`），且不能以数字开头。标识符与字符串不同之处在于字符串是数据，而标识符是代码的一部分。在 JavaScript 中，无法将标识符转换为字符串，但有时可以将字符串解析为标识符。

**变量的名字又叫做标识符**

字面量是由语法表达式定义的常量；或，通过由一定字词组成的语词表达式定义的常量.
比如，数组字面量，布尔字面量......

定义对象有几种不同的方式。 一个非常常见的方法是使用对象字面量，就是通过在大括号中列出它的属性来实现的:

```js
const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}
```

属性的值可以是任何类型的，比如整数、字符串、数组、对象...。

对象的属性可以使用“句点”号或中括号 ` [ ] ` 进行引用:

```js
console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age'  //为age赋予别名fieldName，下面会用到
console.log(object1[fieldName])    // 35 is printed
```

也可以使用句点符号或括号来动态地往对象中添加属性:

```js
object1.address = 'Helsinki' //从key到value。
object1['secret number'] = 12341 //从key到value，要用中括号把key括起来，用点的话就认不出来了
```

后面的那个属性的添加必须通过使用中括号来完成，因为在使用点符号的话，带空格的_secret number_并不是一个合法的属性名。

当然，JavaScript 中的对象也可以包含方法。 但是，在这个课程中，我们并不需要定义带方法的对象，因此这里只是简单地提及它。




# Functions

【函数】

## 箭头函数

定义**箭头函数**的完整过程如下:
sum为函数名，p1p2是参数。
```js
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}
```

这个函数可以被如下方式调用:

```js
const result = sum(1, 5)
console.log(result)
```

如果只有一个参数，我们可以在定义中去掉括号,如果函数只包含一个表达式，则不需要写大括号。

ES6之前用**关键词`function`** 来定义函数。

## 关键词`function`
### 方法一
一种是在函数声明中给一个名字
**函数声明**定义一个具有指定参数的函数。

```js
function product(a, b) {
  return a * b
}
```


### 方法二

另一种定义函数的方法是使用函数表达式。 在这种情况下，没有必要为函数命名，定义可以放在代码的其它位置:

```js
const average = function(a, b) {
  return (a + b) / 2
}
```

