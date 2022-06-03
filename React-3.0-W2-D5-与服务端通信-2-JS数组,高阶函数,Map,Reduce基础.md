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

```


# Map
# Reduce 基础