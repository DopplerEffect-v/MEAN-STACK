const Area = require("../models/area");

const areaCtrl = {};

areaCtrl.getAreas = async (req, res, next) => {
  const areas = await Area.find();
  res.json(areas);
};

areaCtrl.createArea = async (req, res, next) => {
  const area = new Area({
    name: req.body.name,
    numberOfEmployees: req.body.numberOfEmployees,
    office: req.body.office,
    budget: req.body.budget,
  });
  await area.save();
  res.json({ status: "Area created" });
};

areaCtrl.getArea = async (req, res, next) => {
  const { id } = req.params;
  const area = await Area.findById(id);
  res.json(area);
};

areaCtrl.editArea = async (req, res, next) => {
  const { id } = req.params;
  await Area.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Area Updated" });
};

areaCtrl.deleteArea = async (req, res, next) => {
  await Area.findByIdAndRemove(req.params.id);
  res.json({ status: "Area Deleted" });
};

module.exports = areaCtrl;