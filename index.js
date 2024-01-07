// const { log } = require("console");
const express = require("express");
// const http = require("http");
const hostname = "localhost";
const port = 3000;
const app = express();
app.get("/", (req, res) => {
  console.log(req.header);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});
app.get("/about", (req, res) => {
  console.log("heelo");
  (res.status = 200), res.setHeader("Content-Type", "text/html");
  res.end(
    "<html><body><h1>Here is Content of about uis page</h1></body></html>"
  );
});
// const server = http.createServer(app);
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
