const router = require("express").Router();
const controller = require("./dataOne.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router

.route("/:oneId")
    .get(controller.list)
    .post(controller.create)
    .put(controller.update)
    .delete(controller.delete)
    .all(methodNotAllowed);
    


router

    .route("/")
        .get(controller.list)
        .post(controller.create)
        .put(controller.update)
        .delete(controller.delete)
        .all(methodNotAllowed);
module.exports = router;