# Anti-pattern: Array Indexes as Keys

【反模式: 将数组的索引作为键】



```js
notes.map(note1 =>
  <li key={note1.id}>{note1.content}</li>
)
```
它（这个回调函数）生成一个li标签，包含KEY，包含每个笔记(note)对象的content内容。

可以通过使用 数组索引 作为 键(KEY) 来使控制台中的错误信息消失。
通过向map方法的回调函数传递第二个参数，可以拿到索引。
```js
notes.map((note1, i) => ...)
```
当这样调用时，i被分配为笔记所在的数组中的索引值。
```js
<ul>
notes.map(note1,i) =>
  <li key={i}>{note1.content}</li>
)
</ul>
```

