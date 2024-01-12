const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.send("Will send all the leaders to you!");
  })
  .post((req, res, next) => {
    res.send(
      "will add the leader: " +
        req.body.name +
        "with detail:" +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.send("PUT opreation not supoorted on /leader");
  })
  .delete((req, res, next) => {
    res.send("Deleting all leader");
  });

leaderRouter
  .route("/:leaderId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.send(
      "Will send detail of the  leader" + req.params.leaderId + "to you!"
    );
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.send("Post opreation not supoorted on /leader");
  })
  .put((req, res, next) => {
    res.write("updated the leader:" + req.params.leaderId + "\n");
    res.send(
      "will update the leader: " +
        req.body.name +
        "with detail:" +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.send("Deleting the leader", req.params.leaderId);
  });
module.exports = leaderRouter;
