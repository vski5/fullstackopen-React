# Traditional web applications

从server获取网站 ，就是获取HTML 文档的详细页面结构，以及文本内容。

这个网站可能是有关保存好的静态文本文件，也可能是服务器根据应用的代码动态构建的 HTML 文档，比如，数据可能是来自数据库的。

示例是动态的HTML代码，因为它包含已创建 Note 的数量信息。

先不去理解细节：
```html

<!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <div class='container'>
          <h1>Full stack example app</h1>
          <p>number of notes created 100</p>
          <a href='/exampleapp/notes'>notes</a>
          <img src='kuva.png' width='200' />
        </div>
      </body>
    </html>

```
但是课上的代码是这样的：
```html

const getFrontPageHtml = noteCount => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <div class='container'>
          <h1>Full stack example app</h1>
          <p>number of notes created ${noteCount}</p>
          <a href='/notes'>notes</a>
          <img src='kuva.png' width='200' />
        </div>
      </body>
    </html>
`;
};

app.get('/', (req, res) => {
  const page = getFrontPageHtml(notes.length);
  res.send(page);
});

```

Html 页面的内容被保存为 template 模板字符串，或者说是一个能够运行的字符串，因为它其中包含有变量。

在模板字符串中，页面中动态更改的那部分内容——已保存 Note 的数量（即代码中的 _noteCount_），被动态地替换为了 Note 的当前数量（即代码中的 _notes.length_）

### <template>：内容模板元素

HTML 内容模板（<template>）元素是一种用于保存客户端内容机制，该内容在加载页面时不会呈现，但随后可以 (原文为 may be) 在运行时使用 JavaScript 实例化。

将模板视为一个可存储在文档中以便后续使用的内容片段。虽然解析器在加载页面时确实会处理<template>元素的内容，但这样做只是为了确保这些内容有效；但元素内容不会被渲染。

这个样例使用了 Node.js 中的 [Express](https://expressjs.com/)。

本课程都将会使用 Node.js 和 Express 来创建 Web 服务器。











