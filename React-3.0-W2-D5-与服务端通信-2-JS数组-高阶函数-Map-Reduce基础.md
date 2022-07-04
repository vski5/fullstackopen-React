# JavaScript Arrays

【JavaScript 数组】

```js
// 'fruits' array created using array literal notation.
const fruits = ['Apple', 'Banana'];
console.log(fruits.length);
// 2

// 'fruits' array created using the Array() constructor.
const fruits = new Array('Apple', 'Banana');
console.log(fruits.length);
// 2

// 'fruits' array created using String.prototype.split().
const fruits = 'Apple, Banana'.split(', ');
console.log(fruits.length);
// 2
```

索引号来访问数组中的项
```js
const fruits = ['Apple', 'Banana'];

// The index of an array's first element is always 0.
fruits[0]; // Apple

// The index of an array's second element is always 1.
fruits[1]; // Banana

// The index of an array's last element is always one
// less than the length of the array.
fruits[fruits.length - 1]; // Banana

// Using a index number larger than the array's length
// returns 'undefined'.
fruits[99]; // undefined
```



# 高阶函数
js函数是值，可以将代码编写为更小的简单函数的组合，函数可以是输入值等等。
并用高阶函数把他们组合在一起。
## 本次示例用了`filter`和`reject`。
`filter`用于筛选并历遍，此处是筛选所有符合return后面条件的数组中的元素，类似push到数组。
`reject`类似`filter`但是会取`filter`里面没有的值制造一个数组。
```js
var animals =[
{name:'1',species:'a'},
{name:'2',species:'b'},
{name:'3',species:'a'},
{name:'4',species:'a'},
{name:'5',species:'c'}
]
var isa = function(animals){
	return animals.species ==='a'
}

var alla = animals.filter(isa)
var otheranimals = animals.reject(isa)

console.log(alla)
console.log(otheranimals)

```

# Map
map一样是回调函数，类似filter。会返回任何对象，可以用来创造，所以这里可以用+来创造。以前讲过的。

下面的例子是要返回所有的name。
```js
var animals =[
    {name:'1',species:'a'},
    {name:'2',species:'b'},
    {name:'3',species:'a'},
    {name:'4',species:'a'},
    {name:'5',species:'c'}
    ]

var names = animals.map(   
	function(ani){
	    return ani.name
})

var names2 = animals.map(   
	function(ani2){
	    return ani2.name + 'is' + ani2.species
})

console.log(names)
console.log(names2)
```
箭头函数重写：
```js
var animals =[
    {name:'1',species:'a'},
    {name:'2',species:'b'},
    {name:'3',species:'a'},
    {name:'4',species:'a'},
    {name:'5',species:'c'}
    ]

var names = animals.map(  (ani)=>{return ani.name}  )

console.log(names)
```

# Reduce 基础
reduce减少。
上面的都是列表转换函数，reduce可以都干了。
**`reduce()`** 方法对数组中的每个元素按序执行一个由您提供的 **reducer** 函数，每一次运行 **reducer** 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。否则，数组索引为 0 的元素将被作为初始值 _initialValue_，迭代器将从第二个元素开始执行（索引为 1 而不是 0）。
例如
```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4

const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);
//从0开始，下一个循环会从上一次循环的结果开始，第一次历遍没有上次的结果，所以要自己设定。
console.log(sumWithInitial);
// expected output: 10
```
数组索引不为零的时候。
```js
const array1 = [1, 2, 3, 4];

// 10 + 1 + 2 + 3 + 4

const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  10
);

console.log(sumWithInitial);
// expected output: 20
```


总结所有的金额
```js
var orders =[
    {amount:250},
    {amount:400},
    {amount:100},
    {amount:325}
]

var total = orders.reduce(function(sum,order){
    console.log(sum,order)
    return sum + order.amount

},0)//从0开始，下一个循环会从上一次循环的结果开始，第一次历遍没有上次的结果，所以要自己设定。
```
输出：
	0 { amount: 250 }
	250 { amount: 400 }
	650 { amount: 100 }
	750 { amount: 325 }

拆分一下，成为几个简单函数的总和：
```js
var orders =[
    {amount:250},
    {amount:400},
    {amount:100},
    {amount:325}
]

var zhi = function(sum,order){
    console.log(sum,order)
    return sum+order.amount
}
var total = orders.reduce(
    zhi,0
)


```