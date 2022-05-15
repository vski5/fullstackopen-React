# Single page app (SPA)

在我们的示例应用中，主页的工作方式类似于传统的网页: 所有的逻辑都在服务器上，浏览器只按照指示渲染 HTML。

Notes 页面的工作流程

浏览器上打开页面时会发生什么
![[1-浏览器上打开页面时会发生什么.png]]


-   浏览器使用 HTTP GET 请求从服务器获取定义内容和页面结构的 HTML 代码
    
-   Html 代码中的 Links 标签会让浏览器获取 CSS 样式表 main.css
    
-   以及 JavaScript 代码文件 main.js
    
-   浏览器执行 JavaScript 代码，代码向地址[https://studies.cs.helsinki.fi/exampleapp/data.json](https://studies.cs.helsinki.fi/exampleapp/data.json) 发出 HTTP GET 请求，请求返回了包含 note 的 JSON 数据。
    
-   获取数据后，浏览器执行一个_event handler 事件处理程序_, 使用 DOM-API 将 Note 渲染到页面

SPA 类型的网站不会像我们的示例应用那样从服务器上单独获取所有页面，而是只从服务器获取一个 HTML 页面，其内容由 JavaScript 在浏览器中执行操作。

单页应用版本可以在 [https://studies.cs.helsinki.fi/exampleapp/spa](https://studies.cs.helsinki.fi/exampleapp/spa) 中找到

Html 代码几乎完全相同，但 JavaScript 文件不同(spa.js) ，form 标签的定义方式有一个小小的变化:

```html
<form id="notes_form">
      <input type="text" name="note">
      <br>
      <input type="submit" value="Save">
</form>
```
表单没有_action_属性或_method_属性来定义如何以及往哪里发送输入数据。

填写表单的时候，
浏览器只向服务器发送了一个请求。
![[1-浏览器只向服务器发送了一个请求。.png]]
具体：
![[1-SPA具体请求.png]]
Post 请求到地址_new_note_spa_，包含新 Note 的 JSON 数据，其中既包含 Note 的内容(content) ，也包含时间戳(date) :

![[1-包含新 Note 的 JSON 数据.png]]

请求的 Content-Type 头信息告诉服务器，所包含的数据是以 JSON 格式表示的。如果没有这个头，服务器将不知道如何正确地解析数据。

服务器用创建的状态码[201](https://httpstatuses.com/201)进行响应。 这次服务器没有请求重定向，浏览器会保持在同一页面上，并且不再发送 http 请求。

![[1-请求的 Content-Type 头信息.png]]

这个应用的 SPA 版本并不以传统的方式发送表单数据，而是使用从服务器获取的 JavaScript 代码。 我们将稍微研究一下这段代码，虽然还没有必要理解它的所有细节。

那就只写一下流程：
1. 从页面提取form元素，并注册一个命令处理函数来处理表单提交事件
2. 默认处理会将数据发送到服务器并导致重定向（一次新的Get请求），所以，用事件处理函数防止默认处理。
3. 事件处理程序创建一个新的 Note，使用命令将其添加到 Note 列表中，并在页面上重新渲染了 Note 列表，最终向服务器发送了新建 Note 的请求。
4. 代码确定数据是通过 HTTP POST 请求发送的，数据类型是 JSON。 数据类型由 Content-type Header 确定。 然后，数据以 json 字符串的形式发送。


