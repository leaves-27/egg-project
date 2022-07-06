# my-midway-project

## QuickStart

<!-- add docs here for user -->

see [midway docs][midway] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.


[midway]: https://midwayjs.org

# issue
1.用户登录接口
  username,password

  sqlite: userId、username、password

  1.定义用户表的结构
  2.定义模型
  3.数据传输对象

  4.控制器
    (1)向数据库插入一条测试数据;
    (2)接口接受数据传输对象
    (3)进行登录生成token

