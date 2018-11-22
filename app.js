import express from 'express';
import path from 'path';
import config from './config/app';
// import UserRepository from './app/Repositories/UserRepository';
import { ExceptionHandler, Exception } from '@nsilly/exceptions';
import { App } from '@nsilly/container';
import { RequestParser } from '@nsilly/support';

require('dotenv').config();

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Register all service that declared in /app/Configs/Providers
 */
config.providers.map(provider => {
  const instance = new provider();
  instance.register();
  if (instance.boot) {
    instance.boot();
  }
});

// const getUser = () => {
//   return new Promise(async resolve => {
//     const users = await App.make(UserRepository).get();
//     resolve(users);
//   });
// };

// getUser().then(function(data) {
//   console.log(data);
// });

app.use(function(req, res, next) {
  const reqd = App.make(RequestParser).createFromRequest(req, res, next);
  reqd.add(req);
  reqd.add(res);
  reqd._req = req;
  reqd.run(next);
});

app.use(ExceptionHandler);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  // res.render("error");
  throw new Exception(err.message, 404);
});

module.exports = app;
