const router = require("express").Router();
const controller = require("./dataTwo.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
    .route("/:twoId")
    .get(controller.read)
    .all(methodNotAllowed);




router

    .route("/")
        .get(controller.list)
        .post(controller.create)
        .put(controller.update)
        .delete(controller.delete)
        .all(methodNotAllowed);
        
module.exports = router;