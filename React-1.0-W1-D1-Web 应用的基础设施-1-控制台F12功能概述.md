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

**HTTP header**（HTTP 首部，HTTP 头）表示在 HTTP 请求或响应中的用来传递附加信息的字段，修改所传递的消息（或者消息主体）的语义，或者使其更加精确。消息首部不区分大小写，开始于一行的开头，后面紧跟着一个 `':'` 和与之相关的值。字段值在一个换行符（CRLF）前或者整个消息的末尾结束。

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

有个重要的 header [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) 告诉我们，响应是[utf-8](https://en.wikipedia.org/wiki/UTF-8) 格式的文本文件，其内容已用 HTML 格式化。 

通过这种方式，浏览器知道响应是一个常规的 html 页面，并将它“像一个网页”一样渲染到浏览器中。

#### Response 标签页展示了响应数据
Response 标签页展示了响应数据，这是一个常规的 html 页面。body部分决定了其渲染在屏幕上的页面结构:
