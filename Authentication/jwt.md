## Jwt  json web tokens



### structure of jwt
- header
- payload
- signature 

it's a long string which is separated by . into three part 


#### header 
header is a json object 
alg: algorithm of signature
typ: type of the token 
```
{
  "alg": "HS256",
  "typ": "JWT"
}
```
then using Base64URL algorithm to translate it into string 

#### payload 
payload is a json object as well
there are 7 offical feilds
- iss (issuer)：签发人
- exp (expiration time)：过期时间
- sub (subject)：主题
- aud (audience)：受众
- nbf (Not Before)：生效时间
- iat (Issued At)：签发时间
- jti (JWT ID)：编号

you can define private fileds like this: 
```
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```
notice that Jwt is not encypted, so do not put senstive information into this section

then using Base64URL algorithm to translate it into string 

#### signature 
sign for the pervious two parts 

first, server need a secret which is not public for user.
then useing the algorithm assgined in Header (default HMAC SHA256) sign the header and payload 

```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

### base64URL 
soemtime token is placed into url, base64URL omit '=', change '+' into '-', change '/' into '_'

### how to use 
client could save JWT in cookie or localStorage
then take this JWT when make request.
client side could put JWT in cookie, however it could not cors.
or put it into POST body.
the better way is to put jwt in Authorization in HTTP Header
```
Authorization: Bearer <token>
```

### characteristic 
- jwt default is not encypted, but you can use screct to encypt it 
- do not put senstive data into jwt when it's not encypetd 
- the disadvantage is server can not reject or change the authority of a token once it is not expried. 
- for safety, set the exprie time as short as possiable 
- for lower the risk of leak, need using under https.



### when to use 
- native side:  mobile side is not frendly to support cookie so token is good a choice
- need cors: session cors is way more complecate
- 