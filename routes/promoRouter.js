const express = require("express");
const bodyParser = require("body-parser");

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.send("Will send all the promotions to you!");
  })
  .post((req, res, next) => {
    res.send(
      "will add the promotion: " +
        req.body.name +
        "with detail:" +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.send("PUT opreation not supoorted on /promotions");
  })
  .delete((req, res, next) => {
    res.send("Deleting all promotions");
  });
promoRouter
  .route("/:promoId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.send(
      "Will send detail of the  promotion" + req.params.promoId + "to you!"
    );
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.send("Post opreation not supoorted on /promotion", req.params.promoId);
  })
  .put((req, res, next) => {
    res.write("updated the promotion:" + req.params.promoId + "\n");
    res.send(
      "will update the promotion: " +
        req.body.name +
        "with detail:" +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.send("Deleting the promotion", req.params.promoId);
  });
module.exports = promoRouter;
