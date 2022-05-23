# Object methods and "this"

【对象方法以及“ this”关键字】

箭头函数和使用function关键字的函数，在涉及到 this 关键字（指向对象本身）的行为上，有很大的不同。

`this`关键字：用于引用本处(比如一个小范围代码块的定义的值)的上下文。
一个例子：
```js
const test1 = {
  prop1: 42,
  func: function() {
    return this.prop1;
  },
};

console.log(test1.func());
// expected output: 42
```

**`arguments`** (对象)是一个对应于传递给函数的参数的类数组对象。
比如：
```js
function func1(a,b,c){
	console.log(arguments[0]);
	console.log(arguments[1]);
	console.log(arguments[2]);
} 
//这里的arguments有点指输入值的意思
fucn1(1,2,3)

```

我们可以通过给一个对象定义函数属性，来给对象分配方法：
(这里的对象指的是map(go里的叫法，就是键值对)前面的key也就是greet，定义函数属性指的是冒号后面的function())

```js
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {    console.log('hello, my name is ' + this.name)  },} //此处的name是键值对中第一个元素

arto.greet()  // "hello, my name is Arto Hellas" gets printed

```
方法甚至可以在对象创建之后再赋值给对象:
（就是后期往里面插入值为function()函数的键值对）
```js
arto.lastone=function(){
	this.age +=1
}

console.log(arto.age)   // 35 is printed
arto.lastone() //用新加的函数操作一下键值对内的元素
console.log(arto.age)   // 36 is printed

```

稍微修改一下对象

```js
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
  doAddition: function(a, b) {    console.log(a + b)  },}

arto.doAddition(1, 4)        // 5 is printed

const referenceToAddition = arto.doAddition
referenceToAddition(10, 15)   // 25 is printed
```

现在对象有了 doAddition 方法，该方法将传递给他的参数进行求和。 该方法通常使用对象的 _arto.doAddition(1, 4)_ 来调用，或者通过赋值给变量的 _方法引用_  ，_referenceToAddition(10, 15)_来调用该方法

如果我们用同样的方式调用_greet_函数，我们就会遇到一个问题:

```js
arto.greet()       // "hello, my name is Arto Hellas" gets printed

const referenceToGreet = arto.greet
referenceToGreet() // prints "hello, my name is undefined"
```

当通过引用调用referenceToGreet() 方法时，该方法已经**不认识原始的this是什么了**。

greet用的参数是用this定义的，重命名的话就会失效，失去对this 关键字的追踪，小范围的上下文变成全局变量。

避免使用this关键字来避免这些问题。

例如，当我们使用setTimeout方法，让arto对象1秒钟后调用greet。
当 setTimeout 调用该方法时，实际上是JavaScript引擎在调用该方法，此时的this是指向的是全局对象。
```js
setTimeout(arto.greet, 1000)
```

有几种机制可以保留这种原始的 this 。 

其中一个是使用`bind`方法:

```js
setTimeout(arto.greet.bind(arto), 1000)
```

调用 _arto.greet.bind(arto)_ 创建了一个新函数，它将 _this_ 绑定指向到了 Arto，这与方法的调用位置和方式无关。

# Classes类
```js
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name)
  }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()
```

在css里可以筛选类再经行操作。

class用于类的定义。

理解为特殊的键值对。



