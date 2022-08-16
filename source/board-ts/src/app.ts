import express from 'express';
import api from './api';

import ExpressError from './model/ExpressError';
import { cookieParser } from './service/cookieParser';
// import { morgan as logger } from './service/morgan';
// import { httpErrors as createError } from './service/httpErrors';

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(api);

// catch 404 and forward to error handler
// app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
//   res.status(400);
//   res.send('not found');
// });

// error handler
app.use(function (req: express.Request, res: express.Response) {
  // set locals, only providing error in development
  // res.locals.message = (err.message !== "") ? err.message : '';
  // res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  console.log('res', res);
  console.log('req', req);
  res.status(500);
  res.send({ message: 'error', status: 500 });
});

app.listen('3000', () => {
  console.log(`Server listening on port: 3000`);
});

module.exports = app;
