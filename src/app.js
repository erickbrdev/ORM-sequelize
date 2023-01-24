const express = require('express');
const userRouter = require('./routes/userRouter');
const postRouter = require('./routes/postRouter');
const categorieRouter = require('./routes/categorieRouter');
const loginRouter = require('./routes/loginRouter')

const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/category', categorieRouter)
app.use('/login', loginRouter)

module.exports = app;