const express = require("express");
const bodyParser = require("body-parser");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(bodyParser.json());

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
