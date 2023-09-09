const Router = require("express");
const router = new Router();
const tTGCOntroller = require("../controllers/tTGController");

router.get("/", tTGCOntroller.getAll);
router.post("/", tTGCOntroller.addGame);
router.get("/check", tTGCOntroller.check);
router.get("/:id", tTGCOntroller.getOne);
router.put("/:id", tTGCOntroller.update);
router.delete("/:id", tTGCOntroller.removeOne);

module.exports = router;
