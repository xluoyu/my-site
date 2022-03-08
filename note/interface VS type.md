## interface VS type

### 相同点
1. 都可以用来描述一个对象或函数
```ts
// interface
interface User{
  name: string;
  age: number;
}

interface SetUser {
  (name: string, age: number): void;
}

// type
type User = {
  name: string;
  age: number;
}

type SetUser = (name: string, age: number) => void;
```


2. 都允许拓展(extends)

```ts
// interface
interface Name {
  name: string;
}

interface User extends Name{
  age: number;
}

// type
type Name = {
  name: string
}

type User = Name & {age: number}
```

```ts
// interface extends type
type Name = {
  name: string;
}

interface User extends Name {
  age: number;
}

// type extends interface
interface Name {
  name: string
}
type User = Name & {age: number}
```

### 不同点
1. type能做到的
```ts
type myString = string //声明基础类型别名

type Pet = Dog | Cat // 联合类型

type myType = typeof User // typeof 操作符定义类型

type Pet = [Dog, Cat] // 元组类型
```

2. interface能做到的
```ts
// 合并重复声明

interface User {
  name: string
}

interface User {
  age: number
}

const user1: User{
  name: '小明',
  age: 15
}
```