# Forms and HTTP POST
突然忘了Note是什么：

最开始的那个HTML，提到了note。
最开始的那个HTML页面包含一个 div 元素，该元素又包含一个标题、一个指向 notes 页面的链接，以及一个 img 标签，并显示了创建 note 的数量。

我们可以试着直接通过浏览器访问 [https://studies.cs.helsinki.fi/exampleapp/data.json](https://studies.cs.helsinki.fi/exampleapp/data.json) 地址

在这里我们找到了以 JSON 格式展示的 Note ，这就是Note的 “原始数据”。Note 列表里有 JSON 数据。

上面 [notes 页面](https://studies.cs.helsinki.fi/exampleapp/notes) 的 JavaScript 代码会下载包含 Note 列表的的 JSON 数据，并利用 Note 的内容构建出一个符号列表

此处的Note就像是元素一样。

看看添加 Note 是如何完成的，其实在从控制台中操作文档对象中就看过了。
[[React-1.0-W1-D1-Web 应用的基础设施-5-从控制台中操作文档对象]]


# Forms 介绍
HTML表单是用户和web站点或应用程序之间交互的主要内容之一。
它们允许用户将数据发送到web站点。

大多数情况下，数据被发送到web服务器，但是web页面也可以自己拦截它并使用它。

HTML表单是由一个或多个小部件组成的。

这些小部件可以是文本字段(单行或多行)、选择框、按钮、复选框或单选按钮。大多数情况下，这些小部件与描述其目的的标签配对——正确实现的标签能够清楚地指示视力正常的用户和盲人用户输入表单所需的内容。

## 设计表单，表单的案例，大概就长这样
![[1-roughsketchforms.png]]
我们的表单将包含三个文本字段和一个按钮。我们要求用户提供他们的姓名，电子邮件和他们想要发送的消息。

点击按钮会将其数据发送到Web服务器。

# Notes 页面包含一个 form 元素。
![[1-Notes页面包含一个form元素.png]]
当单击表单上的按钮时，浏览器将向服务器发送用户的输入。

(“网络（Network）”选项卡能够显示浏览器和服务器之间是如何通信的。)

打开 Network 标签页，看看提交表单时发生了什么:
提交表单总共会导致 5 个 HTTP 请求。
![[1-看看提交表单时发生了什么.png]]
## 第一个是表单提交事件。
![[1-第一个是表单提交事件.png]]

它是对服务器 /new_note地址发送的` HTTP POST`请求。 服务器用 HTTP 状态码 302 进行响应。 这是一个URL 重定向，服务器通过这个 URL 重定向，请求浏览器执行一个新的` HTTP GET `请求，该请求定义在 Header 的 Location (即 /notes 地址)中。

浏览器向服务器发出 HTTP GET 请求，以获取页面的 HTML 代码

因此，浏览器重新加载 Notes 页面。 重新加载会导致另外三个 HTTP 请求: 获取样式表(main.css)、 JavaScript 代码(main.js)和 notes 的原始数据(data.json)。

Network选项卡还显示了与表单一起提交的表单数据:
但我只在负载里找到了表单数据，跟教程上的不一样
![[1-负载里找到了表单数据.png]]
教程里是：![[1-Network选项卡还显示了与表单一起提交的表单数据.png]]

Form 标签具有属性 action 和 method，它们定义了将表单作为一个 HTTP POST 请求提交到地址 _/new_note_。
```html
<form action="/exampleapp/new_note" method="POST">
      <input type="text" name="note"><br>
      <input type="submit" value="Save">
</form>
```



# HTTP POST
**HTTP `POST` 方法** 发送数据给服务器. 请求主体的类型由`Content-Type`首部指定.

(**`Content-Type`** 实体头部用于指示资源的MIME类型 media type)

`PUT` 和`POST`方法的区别是:
1. PUT方法是幂等的：连续调用一次或者多次的效果相同（无副作用）。
2. 连续调用同一个POST可能会带来额外的影响，比如多次提交订单。

一个 `POST` 请求通常是通过HTML 表单发送, 并返回服务器的修改结果。

在这种情况下, content type 是通过在 `<form>` 元素中设置正确的 `enctype` 属性, 或是在 [`<input>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input) 和 [`<button>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button) 元素中设置 [`formenctype`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-formenctype) 属性来选择的:

（**HTML `<form>` 元素**表示文档中的一个区域，此区域包含交互控件，用于向 Web 服务器提交信息。）
(`enctype`中文为编码方式)

当 POST 请求是通过除 HTML 表单之外的方式发送时, 例如使用 [`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest), 那么请求主体可以是任何类型.按HTTP 1.1规范中描述，POST为了以统一的方法来涵盖以下功能：

-   注释已有的资源
-   在公告板，新闻组，邮件列表或类似的文章组中发布消息;
-   通过注册新增用户;
-   向数据处理程序提供一批数据，例如提交一个表单;
-   通过追加操作，扩展数据库数据.