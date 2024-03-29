---
title: 课后练习——Numeric
date: 2024-03-29 14:55:10
isOriginal: true
category:
     - homework
tag:
     - python
     - 练习题
icon: python
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---

## 1. 小试牛刀

下面程序输出上面结果？

```python
x = 4.5
y = 2
print(x // y)
```

- [x] 2.0
- [ ] 2
- [ ] 2.25
- [ ] 0.25
- [ ] 0.5

## 2. 练习

### 2.1 选择题

1. 在 Python 中，执行 `3.5 + 4` 的结果是什么类型？

    A. 整数

    B. 浮点数✅

    C. 字符串

    D. 布尔值

2. 以下哪个运算符用于取余？

    A. `+`

    B. `-`

    C. `*`

    D. `%`✅

3. 在 Python 中，执行 `9 // 2` 的结果是多少？

    A. 4.5

    B. 4✅

    C. 5

    D. 4.0

4. `1.0 == 1` 在 Python 中的结果是什么？

    A. True

    B. False✅

    C. 报错

    D. 无法确定

5. `2 + 3 * 4` 的结果是多少？

    A. 20

    B. 14✅

    C. 24

    D. 12

6. 在 Python 中，`10 / 3` 的结果是什么？

    A. 3

    B. 3.3333✅

    C. 4

    D. 3.3

7. 执行 `7 // 2` 的结果是多少？

    A. 3✅

    B. 3.5

    C. 4

    D. 2

8. 在 Python 中，以下哪个操作会返回浮点数？

    A. `2 * 3`

    B. `4 + 2`

    C. `9 / 2`✅

    D. `5 // 2`

9. `4 ** 0.5` 的结果是多少？

    A. 2

    B. 4

    C. 16

    D. 0.5

    E. 2.0✅

10. 执行 `3 >= 3` 的结果是什么？

    A. True✅

    B. False

    C. 报错

    D. 无法确定

11. 执行 `4 != 4` 的结果是什么？

    A. True

    B. False✅

    C. 报错

    D. 无法确定

12. 在 Python 中，`5 + 2 * 3` 的结果是什么？

    A. 21

    B. 11✅

    C. 14

    D. 7

13. 执行 `6 / 2` 的结果是什么类型？

    A. 整数

    B. 浮点数✅

    C. 字符串

    D. 布尔值



### 2.2 填空

1. 在 Python 中，执行 `2 ** 3` 的结果是 `___8___`。
2. 执行表达式 `9 % 4` 会得到 `___1___` 作为结果。
3. 如果 `a = 5`，那么执行 `a *= 2` 之后，`a` 的值是 `___10___`。
4. 在 Python 中，`3 == 2.9999` 的结果是 `___False___`。
5. 执行 `5 <= 5` 的结果是 `___True___`。
6. 如果 `b = 3`，执行 `b /= 2` 后，`b` 的值是 `___1.5___`。
7. 执行 `4 % 3` 的结果是 `___1___`。
8. 如果 `c = 10`，执行 `c //= 3` 后，`c` 的值是 `___3___`。
9. 在 Python 中，`7 == 7.0` 的结果是 `___False___`。
10. 执行 `8 / 2` 的结果是 `___4.0___`。

### 2.3 编程题

::: tip 提示

测试部分代码，没有任何输出没有报错，则视为作答正确。

但是要编写符合题目要求的输出。

:::

#### 2.3.1 数字和与差：

编写一段 Python 代码，创建两个数字 `a` 和 `b`，计算并打印出它们的和以及 `a` 减去 `b` 的结果。

**代码模版**

```python
##
## your code here
##


# 测试
assert sum_result == a + b
assert difference == a - b
```

**输出示例：**

```python
Sum: 8
Difference: 2
```



#### 2.3.2 数字的乘法和除法

编写一段 Python 代码，创建两个数字 `x` 和 `y`，计算并打印出它们的乘积和除法结果。

**代码模版**

```python
##
## your code here
##


# 测试
assert product == x * y
assert division == x / y
```

**输出示例：**

```python
Product: 12
Division: 3.0
```



#### 2.3.3 求余和幂运算

编写一段 Python 代码，创建两个数字 `m` 和 `n`，计算并打印出 `m` 对 `n` 取余的结果和 `m` 的 `n` 次幂。

**代码模版**

```python
##
## your code here
##


# 测试
assert remainder == m % n
assert power == m ** n
```

**输出示例：**

```python
Remainder: 1
Power: 81
```



#### 2.3.4 比较运算

编写一段 Python 代码，输入两个数字 `p` 和 `q`，比较它们的大小并打印出相应的比较结果（大于、小于、等于）。

**代码模版**

```python
##
## your code here
##

if ______:
    print(f"{p} is greater than {q}")
    assert p > q
elif ______:
    print(f"{p} is less than {q}")
    assert p < q
else:
    print(f"{p} is equal to {q}")
    assert p == q

```

**输出示例：**

```python
4 is less than 5
```

## 有疑问的题目

```pyt
6.
```

## 做错的题目

```python
xu'a4. True （只是类型不同，并不是大小不同）
填空9. 同4
```

