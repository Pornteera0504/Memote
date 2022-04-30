const express = require("express");
const app = express();
const cors = require('cors');

const apiRouter = require("./routers/apiRouter");

const jsonParser = express.json();
app.use(jsonParser);

app.use(cors());

app.use(apiRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`[Server] Listening on port ${port}`);
});
