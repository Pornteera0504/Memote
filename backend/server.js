const express = require("express");
const app = express();
const cors = require('cors');

const apiRouter = require("./routers/apiRouter");

const jsonParser = express.json();
app.use(jsonParser);

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*'); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(apiRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`[Server] Listening on port ${port}`);
});
