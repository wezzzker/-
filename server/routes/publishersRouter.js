const Router = require("express");
const publishersController = require("../controllers/publishersController");
const router = new Router();

router.get("/", publishersController.getAll);

router.post("/", publishersController.addPublishers);
router.get("/:id", publishersController.getOne);
router.put("/:id", publishersController.update);
router.delete("/:id", publishersController.removeOne);

module.exports = router;
