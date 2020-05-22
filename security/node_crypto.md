
### cipher
Cipher类是Node.js的crypto模块的封装对象之一，与Hash类和Hmac类不同，Cipher类不是计算数据哈希值及密钥，而对数据本身进行加密的。创建Cipher类可以使用crypto模块的crypto.createCipher()和crypto. createCipheriv()两个方法。

- Cipher类的创建
- 使用Cipher类加密数据
- Cipher类使用示例

1. Cipher类的创建
创建Cipher类可以使用crypto模块的crypto.createCipher()和crypto.createCipheriv()方法。OpenSSL推荐使用pbkdf2来替换EVP_BytesToKey，因此在创建Cipher类时，建议使用 crypto.pbkdf2来派生key和iv，并使用createCipheriv()来创建加密流。

- crypto.createCipher(algorithm, password)：用给定的算法和密钥，创建并返回一个Cipher加密算法的对象。参数：algorithm算法是依赖OpenSSL库支持的算法, 例如: 'aes192'算法等，password是用来派生key和iv的，它必须是一个 'binary'二进制格式的字符串或者是一个Buffer。
- crypto.createCipheriv(algorithm, key, iv)：用给定的算法、密钥和向量，创建并返回一个Cipher加密算法的对象。参数：algorithm与createCipher方法相同，key密钥是一个被算法使用的原始密钥，iv是一个初始化向量。key密钥和iv向量必须是'binary'二进制格式的字符串或者是一个Buffer。

2. 使用Cipher类加密数据
Cipher加密对象是一个可读写的Stream流。可以使用Cipher类中的update方法写入纯文本的数据，数据输入完成后通过final方法返回加密后的数据。

- cipher.update(data, [input_encoding], [output_encoding])：更新Cipher类的加密数据。data：要更新的Cipher加密对象的数据，编码input_encoding可以是：'utf8'、'ascii'、'binary'。如果没有编码参数，那么data必须是一个Buffer。
参数 output_encoding指定加密数据的输出编码，可以是：'binary'、'base64' 或'hex'，如果未设置这个参数，将会返回一个Buffer。
- cipher.final([output_encoding])：返回加密后的内容，output_encoding为：'binary'、'base64'或'hex'。 如果没有提供编码格式，如果未设置这个参数，将会返回一个Buffer。
注意：调用final()后不能再用Cipher对象
- cipher.setAutoPadding(auto_padding=true)：设置输入数据自动填充到块大小功能，这个函数必须在cipher.final之前调用。如果auto_padding是false，那么整个输入数据的长度必须是加密器的块大小的整倍数，否则final会失败。这对非标准的填充很有用，例如：使用0x0而不是PKCS的填充。
- cipher.setAuthTag(buffer)：加密认证模式（目前支持：GCM），这个方法返回经过计算的认证标志 Buffer。必须在使用final方法完成加密后调用。
- cipher.setAAD(buffer)：对于加密认证模式（目前支持：GCM），用这个方法设置附加认证数据（ AAD ）。

Cipher类使用示例
当前文件夹下有文件file1，文件内容为：abcdef。读取文件内容，并用Cipher类对文件内容进行加密：
```
var crypto = require('crypto');
var fs = require('fs');

var cipher = crypto.createCipher('aes192', 'my password');

var s = fs.ReadStream('./file1');
s.on('data', function(d) {
  cipher.update(d);
});

s.on('end', function() {
  var d = cipher.final('hex');
  console.log(d);
});
```
以上代码被保存为crypto.js文件，node crypto.js执行文件，输出如下：
```
4e093a744183d741677d4c56c5d725c8
```

orginal article: https://itbilu.com/nodejs/core/EJOj6hBY.html
reference: http://nodejs.cn/api/crypto/class_cipher.html
### decipher
orginal article: https://itbilu.com/nodejs/core/4ySMqlUF.html