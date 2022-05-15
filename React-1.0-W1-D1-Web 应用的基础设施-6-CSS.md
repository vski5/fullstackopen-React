# CSS
HTML等如何被渲染成我们在浏览器上看到的东西，这取决于层叠样式表CSS。

**层叠样式表 (Cascading Style Sheets，缩写为 CSS）**，是一种 样式表 语言，用来描述 HTML 或 XML（包括如 SVG、MathML、XHTML 之类的 XML 分支语言）文档的呈现。CSS 描述了在屏幕、纸质、音频等其它媒体上的元素**应该如何被渲染的问题**。

CSS 是开放网络的核心语言之一，由 W3C 规范 实现跨浏览器的标准化。CSS节省了大量的工作。 样式可以通过定义保存在外部.css文件中，同时控制多个网页的布局，这意味着开发者不必经历在所有网页上编辑布局的麻烦。CSS 被分为不同等级：CSS1 现已废弃， CSS2.1 是推荐标准， CSS3 分成多个小模块且正在标准化中。

## 类 Classes

类是用于创建对象的模板。他们用代码封装数据以处理该数据。 JS中的类建立在原型上，但也具有某些语法和语义未与ES5类相似语义共享。

实际上，类是“特殊的函数”，就像你能够定义的函数表达式和函数声明一样，类语法有两个组成部分：**类表达式**和**类声明**。

## 类属性和类选择器 Class selectors

 **类属性**被定义为一个以空格分隔的列表项，也就是说：类属性中的内容，每一项之间以空格隔开，这些内容被称为类名，有任意一类名与类选择器中的类名完全匹配，则 样式声明 生效

**类选择器**语法为：`.类名 {样式声明 }`或者`[class~=类名] {样式声明 }`

例子中的main.css长这样：
```css
.container {
  padding: 10px;
  border: 1px solid
}

.notes {
  color: blue;
}
```

可以看到 CSS和类选择器格式看起来很像。

# CSS 属性可以在控制台的 element 标签上查看:
![[1-CSS 属性可以在控制台的 element 标签上查看.png]]

这里可以看到，每一行HTML的CSS属性是怎样的，可以看到 CSS和类选择器很像，都是选择符合条件的类目，然后统一渲染。

整个HTML而言，最外面的 div 元素有 class 属性 ，值为 container ，包含 notes 列表的 ul 元素也有 class 属性 ，名为 notes。

可以用CSS选出来 class 属性中值为某某某的，然后，统一规定有这些属性的怎么处理。

此处的CSS 规则定义了值为container的 class 属性（也可称为container 类的元素），将用一个像素宽的边框 [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)勾勒出来。 它还为该元素设置了 10 个像素的填充 [padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)。 这会在元素内容和边框之间增加一些空白。
```css
.container {
  padding: 10px;
  border: 1px solid
}
```
第二个 CSS 规则将文本颜色设置为蓝色。
```css
.notes {
  color: blue;
}
```

Html 元素也可以有 class 以外的其他属性。 包含 Note 的 div 元素有一个 id 属性。 JavaScript 代码使用 id 来查找元素。

# 控制台的 Elements 选项卡可用于更改元素的样式。
一样，不是永久的。
可以在这里改：
![[1-CSS 属性可以在控制台的 element 标签上查看.png]]


此处标注了CSS选择出来的部分在哪。
HTML描述网页，CSS描述如何渲染（排列HTML的元素，改变HTML的元素里大小粗细等样式）
![[1-此处标注了CSS选择出来的部分在哪.png]]



