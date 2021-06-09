const express = require("express");
const router = express.Router();

const area = require("../controllers/area.controller");

router.get("/", area.getAreas);

router.post("/", area.createArea);

router.get("/:id", area.getArea);

router.put("/:id", area.editArea);

router.delete("/:id", area.deleteArea);

module.exports = router;
