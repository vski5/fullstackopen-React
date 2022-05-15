# Loading a page containing JavaScript - review

浏览器上打开页面 [https://studies.cs.helsinki.fi/exampleapp/notes](https://studies.cs.helsinki.fi/exampleapp/notes) 时会发生什么。

浏览器上打开页面时会发生什么
![[1-浏览器上打开页面时会发生什么.png]]


-   浏览器使用 HTTP GET 请求从服务器获取定义内容和页面结构的 HTML 代码
    
-   Html 代码中的 Links 标签会让浏览器获取 CSS 样式表 main.css
    
-   以及 JavaScript 代码文件 main.js
    
-   浏览器执行 JavaScript 代码，代码向地址[https://studies.cs.helsinki.fi/exampleapp/data.json](https://studies.cs.helsinki.fi/exampleapp/data.json) 发出 HTTP GET 请求，请求返回了包含 note 的 JSON 数据。
    
-   获取数据后，浏览器执行一个_event handler 事件处理程序_, 使用 DOM-API 将 Note 渲染到页面

