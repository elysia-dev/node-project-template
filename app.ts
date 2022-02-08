import { userRouter } from './app/http/router/userRouter';
// const serverless = require('serverless-http');
import express from 'express';
// import cors from 'cors';
import * as core from 'express-serve-static-core';

const app: core.Express = express();
// const corsOptions = {
//   origin: process.env.WHITE_LIST,
//   credentials: true,
// };
// app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('port', 3000);
app.use('/user', userRouter);

// console.log(`app : env : ${process.env.NODE_ENV}`);
// module.exports.app = app;
export { app };

// if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'dev') {
//   app.listen(app.get('port'), () => {
//     console.log(`Server running on ${app.get('port')} port`);
//   });
//   module.exports.app = serverless(app);
// } else {
//   module.exports.app = app;
// }
