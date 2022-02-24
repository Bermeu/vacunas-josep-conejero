const { model, Schema } = require("mongoose");

const VacunaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  dosis: {
    type: Number,
    required: true,
  },
});

const Vacuna = model("Vacuna", VacunaSchema, "vacunas");

module.exports = Vacuna;
