const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("./models/user");
const app = express();

// req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 注册功能
app.post("/api/sign-up", (req, res) => {
  // 1. 接收到用户名与密码 username \ password
  let username = req.body.username;
  let password = req.body.password;

  password = bcrypt.hashSync(password, 10);

  const user = new UserModel({
    username,
    password
  });

  user
    .save()
    .then(() => {
      res.send({
        code: 0,
        msg: "ok"
      });
    })
    .catch(() => {
      res.send({
        code: -1,
        msg: "不成功"
      });
    });
});

// 登录功能
app.post("/api/sign-in", async (req, res) => {
  // 1. 获取用户名与密码
  let username = req.body.username;
  let password = req.body.password;

  // 2. 使用  username 去到数据库查询
  let data = await UserModel.findOne({
    username
  });

  // 3. 判断 data 是否存在
  if (!data) {
    res.send({
      code: -1,
      msg: "用户名或密码不正确"
    });
    return;
  }

  // 4. 校验密码是否正确
  if (!bcrypt.compareSync(password, data.password)) {
    // 登录失败
    res.send({
      code: -1,
      msg: "用户名或密码不正确"
    });
    return;
  }

  // 5. 生成 token
  let userInfo = {
    userId: data._id,
    avatar: data.avatar,
    username: data.username
  };
  let token = jwt.sign(
    {
      // 令牌中隐藏的信息
      ...userInfo
    },
    "MYGOD"
  );
  res.send({
    code: 0,
    msg: "登录成功",
    data: {
      userInfo,
      token
    }
  });
});

// 获取余额
app.post("/api/getMoney", async (req, res) => {
  // 1. 从请求头中获取 token
  let token = req.get("Access_Token");
  // 2. 判断 token 是否存在
  if (!token) {
    res.status(403).send("不允许访问");
    return;
  }

  // 3. 判断 token 的有效性
  jwt.verify(token, "MYGOD", (err, payload) => {
    if (err) {
      // 校验失败
      res.status(401).send("token过期");
    } else {
      // 检验成功
      res.send({
        code: 0,
        msg: "ok",
        data: {
          money: "100万"
        }
      });
    }
  });
});

app.listen(9090);

// http://localhost:9090/api/sign-in

// 正向代理之后
// http://localhost:8080/api/sign-in