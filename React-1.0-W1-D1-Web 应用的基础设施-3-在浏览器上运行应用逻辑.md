# Running application logic on the browser
notes示例：
https://studies.cs.helsinki.fi/exampleapp/notes

还是先用F12。
肯定有document对象，这里面有页面的HTML代码。
但是，页面里的HTML代码不含Note列表的数据。

Html 的 head部分 包含一个 script 标签

**HTML head 元素** 规定文档相关的配置信息（元数据），包括文档的标题，引用的文档样式和脚本等。

**HTML `<script>` 元素**用于嵌入或引用可执行脚本。这通常用作嵌入或者指向 JavaScript 代码。

它会让浏览器去 获取一个名为 main.js 的 JavaScript 文件。

长这个样子：
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

此处穿插代码也就图一乐，第一章才教写代码。本章节的示例代码实际上与本课程所要讲的编码技术毫无关系。

在获取到 script 标签后，浏览器便立即开始执行 script 的代码。

最后两行定义了让浏览器对服务器地址 /data.json 执行一个 HTTP GET 请求:

```js
xhttp.open('GET', '/data.json', true);
xhttp.send();
```

这是“Network”选项卡上显示 request 信息的最低要求，响应头来自哪，最起码得有一个GET的过程吧。

在网址后加上/data.json，尝试直接访问。可以看到，以 JSON 格式展示的 Note ，这就是Note的 “原始数据”。

# 现在打开控制台上的 Console（控制台） 标签:
在这个里面这么干：
https://studies.cs.helsinki.fi/exampleapp

![[1-控制台上的 Console（控制台） 标签.png]]

不出意料，跟教程不一样。

控制台上能输出内容是因为代码中的 console.log 命令:

```js
const data = JSON.parse(this.responseText);
console.log(data);
```

因此，在从服务器接收到数据之后，代码将其打印到了控制台。

在整个课程中，你会经常用到 Console 选项卡和 Console.log 命令。

# 事件处理和回调函数
Event handlers and Callback functions
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
简化一下：
```js
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
//something
};
xhttp.open('GET', '/data.json', true);
xhttp.send();
```

可见，先写出来了处理相应的代码，再写发送到服务器的请求。

`xhttp.onreadystatechange = function() {//something}`
xhttp是用于请求的对象，onreadystatechange这个函数就是作用再xhttp上面。
onreadystatechange这个函数做了什么：检查了 [readyState](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState) 是否等于 4(它描述了操作已完成的状态) ，以及响应的 HTTP 状态码是否为 200。

**XMLHttpRequest.readyState** 属性返回一个 XMLHttpRequest  代理当前所处的状态。一个 XHR 代理总是处于下列状态中的一个：

![[1-readyState属性.png]]

事件处理函数被称为回调函数（[callback](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) functions（被作为实参传入另一函数，并在该外部函数内被调用，用以来完成某些任务的函数，称为回调函数。）） 

应用代码并不直接调用函数本身，而是运行时环境（浏览器）会在事件发生时的适当时间调用函数。

