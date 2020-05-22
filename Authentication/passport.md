### configure
```
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
```
### verify callback 

```
return done(null, false, { message: 'Incorrect password.' });
```
  - first arg:  database error.   set null or err 
  - seond arg:  user entity.  set user or false
  - third arg: flash message. optional 
