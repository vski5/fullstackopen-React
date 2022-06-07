# Key-attribute

【Key-属性】

```js
const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <li>{note.content}</li>)}
      </ul>
    </div>
  )
}
```

列表项，即 map 方法生成的每个元素，都必须有一个唯一的键值: 一个名为_key_ 的属性。

让我们添加上key:
```js
<ul>
{notes.map(note =><li key={note.id}>{note.content}</li>)}
</ul>
```

React 引入了 `key` 属性。当子元素拥有 key 时，React 使用 key 来匹配原有树上的子元素以及最新树上的子元素。以下示例在新增 `key` 之后，使得树的转换效率得以提高：

```js
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

现在 React 知道只有带着 `'2014'` key 的元素是新元素，带着 `'2015'` 以及 `'2016'` key 的元素仅仅移动了。

实际开发中，编写一个 key 并不困难。你要展现的元素可能已经有了一个唯一 ID，于是 key 可以直接从你的数据中提取：

```js
<li key={item.id}>{item.name}</li>
```

当以上情况不成立时，你可以新增一个 ID 字段到你的模型中，或者利用一部分内容作为哈希值来生成一个 key。这个 key 不需要全局唯一，但在列表中需要保持唯一。