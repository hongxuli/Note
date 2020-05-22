### express validator 

it's a middleware usually is placed between route and controller to validate user post request 

example:
```
// 增加验证过后的接口
// 用户注册接口
router.post('/register', [
  check('username').isLength({ min: 6 }),
  check('email').isEmail(),
  check('password').isLength({ min: 6 })
], (req, res) => {

  // ------------------- handler after validator ------------------------
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  // ------------------- handler after validator ------------------------
 
  // ------------------- controller ------------------------
  
    User.findOne({ //查找是否存在
      username: req.body.username,
    },(err, user)=>{
        if (err) {
            res.send('server or db error');
        } else {
            if (user === null) {
                const insertObj = {
                  username: req.body.username,
                  password: md5(req.body.password + MD5_SUFFIX),
                  email: req.body.email,
                  role: 10.0
                };
                const newUser = new User(insertObj);
                newUser.save(insertObj, (err, doc) => {
                    if (err) {
                        res.json({ result: false, msg: '用户注册失败' });
                    } else {
                        console.log(doc);
                        res.json({ result: true, msg: '用户注册成功' });
                    }
                });
            } else {
                res.json({ result: false, msg: '用户名已存在'});
            }
        }
    });
// ------------------- controller ------------------------
});

```

#### result of validationResult(req)

```
{
    isEmpty: [Function], // check the if there is error happend during validation
    array: [Function],  //return infor in array
    mapped: [Function], //return infor in object 
    formatWith: [Function], 
    throw: [Function]  //  alternative method for isEmpty 
}

```

```
// isEmpty
errors.isEmpty() ====> false // 返回的是bool值，表示结果
errors.array()
[ 
    { 
        location: 'body',
        param: 'username',
        value: 'aaa',
        msg: 'Invalid value,
    },
    { 
        location: 'body',
        param: 'password',
        value: 'aaa',
        msg: 'Invalid value' 
    } 
]

```


### API 
--------

#### check([filed,message])
more specific in fileds  
##### check API
- body([fileds, message])
- cookie([fileds, message])
- header([fileds, message])
- param([fileds, message])
- query([fileds, message])


### validation chain 

```
// 检验weekday字段是否不在['sunday', 'saturday']内。
check('weekday').not().isIn(['sunday', 'saturday'])

```
### withMessage 
```
[
    body('username').isArray().withMessage('username类型不正确'), 
    body('password').isArray().withMessage('password类型不正确')
 ]
```
custom error message 