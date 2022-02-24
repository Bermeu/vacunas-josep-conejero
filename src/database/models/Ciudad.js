const { model, Schema } = require("mongoose");

const stringArrayTypeSchema = new Schema({ type: [String], required: true });
const coordenadasTypeSchema = new Schema({ type: [Number], required: true });
const stringTypeSchema = new Schema({ type: String, required: true });

const CiudadSchema = new Schema({
  nombre: stringTypeSchema,
  puntosVacunacion: [
    {
      nombre: stringTypeSchema,
      localizacion: {
        coordenadas: coordenadasTypeSchema,
        direccion: stringTypeSchema,
      },
      vacunas: stringArrayTypeSchema,
    },
  ],
});

const Ciudad = model("Ciudad", CiudadSchema, "ciudades");

module.exports = Ciudad;
