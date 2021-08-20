const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const clubRouter = require("./routers/club");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(clubRouter);

module.exports = app;
