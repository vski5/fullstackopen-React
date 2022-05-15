# Document Object Model or DOM
文档对象模型或DOM

## 文档对象模型 (DOM)
**文档对象模型 (_DOM)_** 将 web 页面与到脚本或编程语言连接起来。

通常是指  JavaScript，但将 HTML、SVG 或 XML 文档建模为对象并不是 JavaScript 语言的一部分。

DOM模型用一个逻辑树来表示一个文档，树的每个分支的终点都是一个节点(node)，每个节点都包含着对象(objects)。

DOM的方法(methods)让你可以用特定方式操作这个树，用这些方法你可以改变文档的结构、样式或者内容。

节点可以关联上事件处理器，一旦某一事件被触发了，那些事件处理器就会被执行。

我们可以将 html 页面看作隐式树结构。

在控制台Elements（元素）选项卡中可以看到相同的树状结构。

浏览器的功能就是基于这种，把 HTML元素描述成一棵树的想法。

**文档对象模型 (_DOM)** 是一个应用编程接口(Application Programming Interface，API) ，它支持对 web 页面对应的元素树进行编程修改。

上一部分中介绍的 JavaScript 代码就是使用 DOM-API 向页面添加 Note 列表。
```js
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(this.responseText);
    console.log(data);

    var ul = document.createElement('ul');
    ul.setAttribute('class', 'notes');

    data.forEach(function(note) {
      var li = document.createElement('li');

      ul.appendChild(li);
      li.appendChild(document.createTextNode(note.content));
    });

    document.getElementById('notes').appendChild(ul);
  }
};

xhttp.open('GET', '/data.json', true);
xhttp.send();
```


下面的代码为变量 ul 创建了一个新节点，并向其添加一些子节点:

```js
var ul = document.createElement('ul');

data.forEach(function(note) {
  var li = document.createElement('li');

  ul.appendChild(li);
  li.appendChild(document.createTextNode(note.content));
});
```

最后，ul 变量的树分支被接到了整个页面的 HTML 树中的适当位置:

```js
document.getElementById('notes').appendChild(ul);
```
