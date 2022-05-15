# Manipulating the document-object from console

Html 文档 DOM 树的最顶层节点称为文档_document_对象。 我们可以使用 DOM-API 在网页上执行各种操作。 您可以通过在控制台中键入 document 来访问文档对象。

还是和教程不一样，一个在warning，一个在error。
![[1-控制台中键入 document 来访问文档对象.png]]

找到了，在控制台最底下输入：
![[1-document.png]]

一个在document中输入，从控制台向页面添加一个新的 Note 的例子：
首先，我们从页面中获得 Note 列表，该列表位于页面的第一个 ul 元素中:

```js
list = document.getElementsByTagName('ul')[0];
```

然后创建一个新的 li 元素并添加一些文本内容:

```js
newElement = document.createElement('li');
newElement.textContent = 'Page manipulation from console is easy';
```

并将新的 li 元素添加到列表中:

```js
list.appendChild(newElement);
```

总结一下：获取列表，添加新元素和元素内的内容，最后将新的元素和内容添加到列表所在元素中。

这不是永久性的。


