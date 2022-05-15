# 控制台F12功能概述
[本次使用的例子](https://studies.cs.helsinki.fi/exampleapp/)


 ## “网络（Network）”选项卡能够显示浏览器和服务器之间是如何通信的。
 
保存日志（Preserve log）: 它能够在重新加载页面时保存应用所打出日志

禁用缓存  (Disable cache) : 先勾选上


当你重新加载页面(在浏览器中按 F5 键或者 ↺ 按钮) ，控制台会显示两个事件:

-   浏览器会从服务器中获取_studies.cs.helsinki.fi/exampleapp_ 页面的内容
-   然后下载图像 _kuva.png_
![[1-理论显示.png]]
当然，我这里显示的更多，又是我最讨厌的意外情况。
![[1-实际显示.png]]

点击第一个事件会显示更多关于本次请求的细节，当然我根本就没有第一个事件，但是有同为document类型的事件。

Document类型可以表示HTML页面或者其他基于XML的文档。不过，最常见的应用还是作为HTMLDocument实例的document对象

万幸，事件里面的内容是一样的。

### 上半部分，General（常规） 中的内容：

说明了浏览器使用 [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) 方法向地址 [https://studies.cs.helsinki.fi/exampleapp/](https://studies.cs.helsinki.fi/exampleapp/) 发送了一个请求（虽然在截图的时候还不是这个地址），并且请求成功，因为服务器响应的状态码为 200。
本次请求的细节（常规）
![[1-本次请求的细节（常规）.png]]
### 下半部分：请求头（Request headers ） 和 响应头（Response headers ）：
浏览器的请求（request）和服务器的响应（response）有一些[HTTP header（HTTP 头）](https://developer.mozilla.org/zh-CN/docs/Glossary/HTTP_header)信息:

#### HTTP header（HTTP 首部，HTTP 头）

**HTTP header**（HTTP 首部，HTTP 头）表示在 HTTP **请求**或**响应**中的用来传递附加信息的字段，修改所传递的消息（或者消息主体）的语义，或者使其更加精确。消息首部不区分大小写，开始于一行的开头，后面紧跟着一个 `':'` 和与之相关的值。字段值在一个换行符（CRLF）前或者整个消息的末尾结束。

按照惯例，可以把消息首部分为几类，尽管这种划分不存在于任何一份规范文档中：

-   [General header](https://developer.mozilla.org/zh-CN/docs/Glossary/General_header)：可以应用于请求和响应中，但是与在消息主体中的数据无关。
-   [Request header](https://developer.mozilla.org/zh-CN/docs/Glossary/Request_header)：含有与所要获取的资源或者客户端自身相关的附加信息。
-   [Response header](https://developer.mozilla.org/zh-CN/docs/Glossary/Response_header)：含有与响应相关的附加信息，比如它的位置或者与服务器相关的信息（名称、版本号等）。
-   [Entity header](https://developer.mozilla.org/zh-CN/docs/Glossary/Entity_header): 含有与消息主体相关的附加信息，比如长度或者MIME类型。

一个仅包含一个首部的请求：

>GET /example.http HTTP/1.1
Host: example.com

重定向请求中必须包含 ([`Location`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Location)) 首部：

>302 Found
Location: /NewPage.html

一些典型的首部：
```eg
304 Not Modified
Access-Control-Allow-Origin: *
Age: 2318192
Cache-Control: public, max-age=315360000
Connection: keep-alive
Date: Mon, 18 Jul 2016 16:06:00 GMT
Server: Apache
Vary: Accept-Encoding
Via: 1.1 3dc30c7222755f86e824b93feb8b5b8c.cloudfront.net (CloudFront)
X-Amz-Cf-Id: TOl0FEm6uI4fgLdrKJx0Vao5hpkKGZULYN2TWD2gAWLtr7vlNjTvZw==
X-Backend-Server: developer6.webapp.scl3.mozilla.com
X-Cache: Hit from cloudfront
X-Cache-Info: cached
```


### 响应头（Response headers ）部分
响应头（Response headers ）告诉我们一些信息，例如，响应的大小(以字节为单位)和响应的具体时间。 

含有与所要获取的资源或者客户端自身相关的附加信息。

有个重要的 header [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) 告诉我们，响应是[utf-8](https://en.wikipedia.org/wiki/UTF-8) 格式的文本文件，其内容已用 HTML 格式化。 

通过这种方式，浏览器知道响应是一个常规的 html 页面，并将它“像一个网页”一样渲染到浏览器中。
![[响应头（Response headers ）.png]]

#### 响应头（Response headers ）部分里的Response（响应） 标签页展示了响应数据
Response 标签页展示了响应数据，这是一个常规的 html 页面。

body部分决定了其渲染在屏幕上的页面结构:

![[Response（响应） 标签页.png]]
页面包含一个 div（内容划分元素）元素，该div元素又包含一个标题、一个指向 notes 页面的链接，以及一个 img 标签，并显示了创建 note 的数量。

div：HTML 文档分区元素是一个通用型的流内容容器，在不使用CSS的情况下，其对内容或布局没有任何影响。

##### img 标签

由于有一个 img 标签，浏览器会执行第二个 http 请求，从服务器获取图像 kuva.png。

![[从服务器获取图像 kuva.png]]

给图片所在地址发送的请求，
回到上一个HTML语句：
```html
<body>
        <div class='container'>
          <h1>Full stack example app</h1>
          <p>number of notes created 100</p>
          <a href='/exampleapp/notes'>notes</a>
          <img src='kuva.png' width='200' />
        </div>
 </body>
      ```

其中与图片位置有关的部分：
```html
<img src='kuva.png' width='200' />
```
本次用的网站网址是：
https://studies.cs.helsinki.fi/exampleapp/
直接在后面加上src等于的内容
就是图片所在的网址
https://studies.cs.helsinki.fi/exampleapp/kuva.png
。

它的类型是 HTTP GET。 响应头告诉我们，响应大小为 89350 字节，其Content-type为 image/png，因此它是一个 png 图像。 浏览器使用这些信息将图像正确地渲染到屏幕上。

#####  **`Content-Type`** 实体头部

**`Content-Type`** 实体头部用于指示资源的MIME类型 media type。

在响应中，Content-Type标头告诉客户端实际返回的内容的内容类型。

浏览器会在某些情况下进行MIME查找，并不一定遵循此标题的值; 为了防止这种行为，可以将标题 `X-Content-Type-Options`设置为 **nosniff**。

在请求中 (如[`POST`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST) 或 [`PUT`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/PUT))，客户端告诉服务器实际发送的数据类型。

调用链条：
浏览器向服务器发出 HTTP GET 请求，以获取页面的 HTML 代码。 Html 中的 img 标签提示浏览器还要去获取图像 kuva.png。 浏览器将 HTML 页面和图像渲染到屏幕上。

尽管很难观察到，但 HTML 页面在从服务器获取图像之前就已经开始渲染了。
![[调用链条.png]]


