const mongoose = require("mongoose");
const { Schema } = mongoose;

const areaSchema = new Schema(
  {
    name: { type: String, required: true },
    numberOfEmployees: { type: Number, required: true },
    office: { type: String, required: true },
    budget: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("areaSchema", areaSchema);