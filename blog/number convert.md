

## String to number

1. Number(str)
2. parseInt(str,radix)
3. ( + str )
4. Math.floor()
5. Math.round()

### Number(str)

- 转换字符为数字，当字符串混有字母，纯字母，字母+数字这样的方式，将会返回NaN
- 空字符串会转换为0

``` js
Number('123')     // 123
Number('12.3')    // 12.3
Number('')        // 0
Number('0x11')    // 17
Number('foo')     // NaN
Number('100a')    // NaN
```

### parseInt,parseFloat

- parseInt忽略第一个点号，解析到第二点号之前，可以传入基数
- parseFloat会忽略第二个点
- 空字符串会转换为NaN
- 两者均忽略前面的0

``` js
parseInt('123')       // 123
parseInt('123.1')     // 123
parseInt('123.1.2')   // 123
parseInt('0123.1')    // 123
parseInt('0101' ,2)   // 5
parseInt('0101' ,10)  // 101
parseInt('')          // NaN   
parseFloat('')        // NaN   
parseFloat('123.1')   // 123.1   
parseFloat('123.1.2') // 123.1   

```


### + str


``` js
var a = + '11'; // 11  

```

### Math.floor(), Math.round()

- 自动转换为10进制数字
- 传入字符串的话也是返回NaN,这一点与Number()一样


``` js
Math.floor('12')        // 12
Math.floor('12.1')      // 12
Math.round('12.1')       // 12
Math.round('12.1a')       // NaN
Math.round('deda')       // NaN

```

### Reference
- [SO](https://stackoverflow.com/questions/1133770/how-do-i-convert-a-string-into-an-integer-in-javascript/1133814#1133814)
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
