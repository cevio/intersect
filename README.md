# intersect

区别2个数组的新增、相同、删除部分

# Usage

```bash
npm install --save @evio/intersect
```

# Run it

```javascript
const intersect = require('@evio/intersect');
const a = [1,2,3,4];
const b = [2,3,6,7];
const result = intersect(a, b);
```

从数组`a`到数组`b`的变化结果：

```javascript
{
  removes: [1,4],
  commons: [2,3],
  adds: [6,7]
}
```